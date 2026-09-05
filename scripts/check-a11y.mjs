import { readRepoFile, repoFileExists, walkFiles } from "./lib/repo.mjs";

const STATIC_PAGES = [
  "dist/index.html",
  "dist/privacy/index.html",
  "dist/terms/index.html",
  "dist/404.html",
];

export function checkStaticPage(html, label) {
  const errors = [];
  if (!/<html[^>]*lang=/.test(html)) {
    errors.push(`${label}: missing html lang`);
  }
  if (!/<title>[\s\S]+<\/title>/.test(html)) {
    errors.push(`${label}: missing title`);
  }
  if (label !== "dist/index.html" && !/<main[\s>]/.test(html)) {
    errors.push(`${label}: missing main landmark`);
  }
  if (label !== "dist/index.html") {
    const headings = html.match(/<h1\b/g) ?? [];
    if (headings.length !== 1) {
      errors.push(`${label}: expected exactly one h1`);
    }
  }

  const images = [...html.matchAll(/<img\b([^>]*)>/g)];
  for (const image of images) {
    if (!/\balt=/.test(image[1])) {
      errors.push(`${label}: image missing alt`);
    }
  }
  return errors;
}

export function checkBuiltAccessibility() {
  const errors = [];
  if (!repoFileExists("dist/index.html")) {
    return ["dist/ is missing; run npm run build first"];
  }

  for (const page of STATIC_PAGES) {
    if (!repoFileExists(page)) {
      errors.push(`missing ${page}`);
      continue;
    }
    errors.push(...checkStaticPage(readRepoFile(page), page));
  }

  const extraHtml = walkFiles("dist", [".html"]).filter(
    (file) => !STATIC_PAGES.includes(file),
  );
  for (const page of extraHtml) {
    errors.push(...checkStaticPage(readRepoFile(page), page));
  }

  return errors;
}

function main() {
  const errors = checkBuiltAccessibility();
  if (errors.length > 0) {
    for (const error of errors) console.error(`a11y: ${error}`);
    process.exit(1);
  }
  console.log(
    "a11y: ok (static HTML; interactive checks stay in ESLint + Playwright)",
  );
}

const invoked = process.argv[1]?.endsWith("check-a11y.mjs");
if (invoked) main();
