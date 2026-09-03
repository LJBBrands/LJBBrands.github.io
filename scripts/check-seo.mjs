import { PUBLIC_EMAIL, readRepoFile, repoFileExists } from "./lib/repo.mjs";

const REQUIRED_META = [
  ["title", /<title>[\s\S]*LJB Media Group[\s\S]*<\/title>/],
  ["description", /name="description"/],
  ["canonical", /rel="canonical"/],
  ["og:title", /property="og:title"/],
  ["og:description", /property="og:description"/],
  ["og:image", /property="og:image"/],
  ["twitter:card", /name="twitter:card"/],
  ["json-ld", /application\/ld\+json/],
];

export function checkHtmlDocument(html, label) {
  const errors = [];
  if (!html.includes('lang="en"')) {
    errors.push(`${label}: missing html lang`);
  }
  if (!html.includes("viewport-fit=cover")) {
    errors.push(`${label}: missing viewport-fit=cover`);
  }
  for (const [name, pattern] of REQUIRED_META) {
    if (!pattern.test(html)) {
      errors.push(`${label}: missing ${name}`);
    }
  }
  if (!html.includes(`"email": "${PUBLIC_EMAIL}"`)) {
    errors.push(`${label}: JSON-LD must use ${PUBLIC_EMAIL}`);
  }
  if (html.includes("@ljbbrands.com") || html.includes("investors@")) {
    errors.push(`${label}: unpublished or retired mailbox found`);
  }
  return errors;
}

export function checkSeoSources() {
  const errors = [];
  const html = readRepoFile("index.html");
  errors.push(...checkHtmlDocument(html, "index.html"));

  if (!repoFileExists("public/robots.txt")) {
    errors.push("missing public/robots.txt");
  } else if (!readRepoFile("public/robots.txt").includes("Sitemap:")) {
    errors.push("robots.txt must declare a sitemap");
  }

  if (!repoFileExists("public/sitemap.xml")) {
    errors.push("missing public/sitemap.xml");
  }

  if (!repoFileExists("public/og-image.png")) {
    errors.push("missing public/og-image.png");
  }
  if (!repoFileExists("public/favicon.svg")) {
    errors.push("missing public/favicon.svg");
  }

  return errors;
}

function main() {
  const errors = checkSeoSources();
  if (errors.length > 0) {
    for (const error of errors) console.error(`seo: ${error}`);
    process.exit(1);
  }
  console.log("seo: ok");
}

const invoked = process.argv[1]?.endsWith("check-seo.mjs");
if (invoked) main();
