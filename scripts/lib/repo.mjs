import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { PUBLIC_EMAIL } from "../../src/data/contact.js";

export { PUBLIC_EMAIL };
export const REQUIRED_NODE = "24.19.0";
export const REQUIRED_NPM = "11.17.0";

export const repoRoot = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
);

export function readRepoFile(relativePath) {
  return readFileSync(join(repoRoot, relativePath), "utf8");
}

export function repoFileExists(relativePath) {
  return existsSync(join(repoRoot, relativePath));
}

const SKIP_DIR_NAMES = new Set([
  ".git",
  ".cache",
  "node_modules",
  "dist",
  "playwright-report",
  "test-results",
  "blob-report",
  "coverage",
]);

export function walkFiles(relativeDir = ".", extensions = null) {
  const start = join(repoRoot, relativeDir);
  const files = [];

  function visit(dir) {
    for (const entry of readdirSync(dir)) {
      if (SKIP_DIR_NAMES.has(entry)) continue;
      const full = join(dir, entry);
      const stats = statSync(full);
      if (stats.isDirectory()) {
        visit(full);
        continue;
      }
      if (extensions && !extensions.some((ext) => entry.endsWith(ext))) {
        continue;
      }
      files.push(relative(repoRoot, full));
    }
  }

  if (existsSync(start)) visit(start);
  return files;
}

export function collectEmails(text) {
  return text.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g) ?? [];
}
