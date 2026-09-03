import { existsSync } from "node:fs";
import { dirname, join, normalize } from "node:path";
import {
  collectEmails,
  PUBLIC_EMAIL,
  readRepoFile,
  repoRoot,
  walkFiles,
} from "./lib/repo.mjs";

const HREF_RE = /(?:href|src)=["']([^"']+)["']/g;

function localPathFromHref(pageFile, href) {
  const bare = href.split("#")[0].split("?")[0];
  if (!bare || bare.startsWith("mailto:") || bare.startsWith("http")) {
    return null;
  }
  if (bare.startsWith("data:") || bare.startsWith("javascript:")) return null;

  if (bare.startsWith("/")) {
    return join(repoRoot, "dist", bare.replace(/^\//, ""));
  }
  return normalize(join(repoRoot, "dist", dirname(pageFile), bare));
}

function existsAsPage(target) {
  if (existsSync(target)) return true;
  if (existsSync(`${target}.html`)) return true;
  if (existsSync(join(target, "index.html"))) return true;
  return false;
}

export function checkDistLinks() {
  const errors = [];
  const pages = walkFiles("dist", [".html"]);
  if (pages.length === 0) {
    return ["dist/ is missing or empty; run npm run build first"];
  }

  for (const page of pages) {
    const html = readRepoFile(page);
    for (const email of collectEmails(html)) {
      if (email !== PUBLIC_EMAIL && !email.endsWith(".googleapis.com")) {
        errors.push(`${page}: unexpected email ${email}`);
      }
    }

    HREF_RE.lastIndex = 0;
    let match = HREF_RE.exec(html);
    while (match) {
      const href = match[1];
      const target = localPathFromHref(page.replace(/^dist\//, ""), href);
      if (target && !existsAsPage(target)) {
        errors.push(`${page}: broken local ${href}`);
      }
      match = HREF_RE.exec(html);
    }
  }

  return errors;
}

function main() {
  const errors = checkDistLinks();
  if (errors.length > 0) {
    for (const error of errors) console.error(`links: ${error}`);
    process.exit(1);
  }
  console.log("links: ok");
}

const invoked = process.argv[1]?.endsWith("check-links.mjs");
if (invoked) main();
