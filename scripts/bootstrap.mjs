import { spawnSync } from "node:child_process";
import { repoRoot } from "./lib/repo.mjs";

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    stdio: "inherit",
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run("node", ["scripts/doctor.mjs"]);
run("npm", ["ci"]);

console.log("bootstrap: dependencies installed.");
console.log("Optional, once: npx playwright install --with-deps webkit");
