import {
  PUBLIC_EMAIL,
  collectEmails,
  readRepoFile,
  walkFiles,
} from "./lib/repo.mjs";

const SOURCE_EXTENSIONS = [
  ".js",
  ".jsx",
  ".html",
  ".md",
  ".css",
  ".json",
  ".yml",
  ".yaml",
  ".txt",
  ".svg",
];

const SECRET_PATTERNS = [
  { name: "OpenAI secret key", regex: /sk-[A-Za-z0-9]{20,}/g },
  { name: "GitHub token", regex: /ghp_[A-Za-z0-9]{20,}/g },
  { name: "AWS access key", regex: /AKIA[0-9A-Z]{16}/g },
  {
    name: "Private key block",
    regex: /BEGIN (RSA |OPENSSH |EC )?PRIVATE KEY/g,
  },
  {
    name: "Supabase service role",
    regex: /service_role["'\s:=]/gi,
  },
  { name: "Slack token", regex: /xox[baprs]-[A-Za-z0-9-]{10,}/g },
];

const SECRET_SCAN_EXTENSIONS = [
  ".js",
  ".jsx",
  ".html",
  ".yml",
  ".yaml",
  ".json",
  ".css",
];

const EMAIL_ALLOWLIST = new Set([
  PUBLIC_EMAIL,
  "fonts.gstatic.com",
  "fonts.googleapis.com",
  "schema.org",
  "www.w3.org",
  "www.sitemaps.org",
]);

const PATH_ALLOWLIST = new Set([
  "package-lock.json",
  "docs/SECURITY.md",
  "docs/PRIVACY.md",
  "docs/AUTOMATION.md",
  "docs/RELEASE.md",
  "docs/ROADMAP.md",
  "docs/DEVELOPMENT.md",
  "AGENTS.md",
  ".cursor/rules/ljb-website.mdc",
  ".cursor/rules/human-only.mdc",
  "scripts/lib/repo.mjs",
  "scripts/check-secrets.mjs",
  "scripts/check-seo.mjs",
  "tests/unit/contact.test.js",
  "tests/unit/governance.test.js",
  "tests/e2e/smoke.spec.js",
]);

function isAllowedEmail(email) {
  if (EMAIL_ALLOWLIST.has(email)) return true;
  if (email.endsWith(".googleapis.com") || email.endsWith(".gstatic.com")) {
    return true;
  }
  return false;
}

export function scanText(text, relativePath) {
  const findings = [];

  if (SECRET_SCAN_EXTENSIONS.some((ext) => relativePath.endsWith(ext))) {
    for (const pattern of SECRET_PATTERNS) {
      if (pattern.regex.test(text)) {
        findings.push(`${relativePath}: possible ${pattern.name}`);
      }
      pattern.regex.lastIndex = 0;
    }
  }

  if (PATH_ALLOWLIST.has(relativePath)) return findings;

  for (const email of collectEmails(text)) {
    if (!isAllowedEmail(email)) {
      findings.push(`${relativePath}: unexpected email ${email}`);
    }
  }

  return findings;
}

export function scanRepository() {
  const files = walkFiles(".", SOURCE_EXTENSIONS).filter(
    (file) => file !== "package-lock.json",
  );
  return files.flatMap((file) => scanText(readRepoFile(file), file));
}

function main() {
  const findings = scanRepository();
  if (findings.length > 0) {
    for (const finding of findings) console.error(`secrets: ${finding}`);
    process.exit(1);
  }
  console.log(`secrets: ok (public email ${PUBLIC_EMAIL})`);
}

const invoked = process.argv[1]?.endsWith("check-secrets.mjs");
if (invoked) main();
