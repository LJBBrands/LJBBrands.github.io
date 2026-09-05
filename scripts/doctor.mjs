import { execFileSync } from "node:child_process";
import {
  REQUIRED_NODE,
  REQUIRED_NPM,
  readRepoFile,
  repoFileExists,
  repoRoot,
  walkFiles,
} from "./lib/repo.mjs";

const requiredFiles = [
  "package.json",
  "package-lock.json",
  ".nvmrc",
  ".node-version",
  "AGENTS.md",
  "docs/ARCHITECTURE.md",
  "docs/DEVELOPMENT.md",
  "docs/SECURITY.md",
  "docs/PRIVACY.md",
  "docs/AUTOMATION.md",
  "docs/RELEASE.md",
  "docs/ROADMAP.md",
  ".github/workflows/deploy.yml",
  ".github/PULL_REQUEST_TEMPLATE.md",
  ".github/ISSUE_TEMPLATE/agent-ready.yml",
  ".github/ISSUE_TEMPLATE/config.yml",
  ".cursor/rules/ljb-website.mdc",
  ".cursor/rules/human-only.mdc",
  ".cursor/rules/agent-ready.mdc",
  "src/data/contact.js",
];

export function readPinnedVersions() {
  return {
    nvmrc: readRepoFile(".nvmrc").trim(),
    nodeVersion: readRepoFile(".node-version").trim(),
    engines: JSON.parse(readRepoFile("package.json")).engines,
  };
}

export function checkPinnedVersions() {
  const pinned = readPinnedVersions();
  const errors = [];
  if (pinned.nvmrc !== REQUIRED_NODE) {
    errors.push(`.nvmrc must be ${REQUIRED_NODE}`);
  }
  if (pinned.nodeVersion !== REQUIRED_NODE) {
    errors.push(`.node-version must be ${REQUIRED_NODE}`);
  }
  if (pinned.engines?.node !== REQUIRED_NODE) {
    errors.push(`package.json engines.node must be ${REQUIRED_NODE}`);
  }
  if (pinned.engines?.npm !== REQUIRED_NPM) {
    errors.push(`package.json engines.npm must be ${REQUIRED_NPM}`);
  }
  return errors;
}

export function checkRequiredFiles() {
  return requiredFiles
    .filter((file) => !repoFileExists(file))
    .map((file) => `Missing required file: ${file}`);
}

export function checkEnvironmentFiles(files = walkFiles(".")) {
  return files
    .filter(
      (file) =>
        /(^|\/)\.env(?:\..+)?$/.test(file) && !file.endsWith(".env.example"),
    )
    .map((file) => `Do not keep environment file ${file} in the workspace`);
}

function runtimeVersion(command, args) {
  return execFileSync(command, args, { encoding: "utf8" }).trim();
}

export function checkRuntime() {
  const errors = [];
  const node = runtimeVersion("node", ["-v"]).replace(/^v/, "");
  const npm = runtimeVersion("npm", ["-v"]);
  if (node !== REQUIRED_NODE) {
    errors.push(`node ${node} does not match required ${REQUIRED_NODE}`);
  }
  if (npm !== REQUIRED_NPM) {
    errors.push(`npm ${npm} does not match required ${REQUIRED_NPM}`);
  }
  return errors;
}

function main() {
  const errors = [
    ...checkRequiredFiles(),
    ...checkPinnedVersions(),
    ...checkRuntime(),
    ...checkEnvironmentFiles(),
  ];

  if (errors.length > 0) {
    for (const error of errors) console.error(`doctor: ${error}`);
    process.exit(1);
  }

  console.log(
    `doctor: ok (node ${REQUIRED_NODE}, npm ${REQUIRED_NPM}) in ${repoRoot}`,
  );
}

const invoked = process.argv[1]?.endsWith("doctor.mjs");
if (invoked) main();
