import { spawn } from "node:child_process";
import { existsSync } from "node:fs";

const child = spawn(
  process.execPath,
  ["./node_modules/vite/bin/vite.js", "build", "--config", "vite.static.config.ts"],
  { stdio: "inherit" },
);

child.on("exit", (code) => {
  const ready =
    existsSync(".output/public/index.html") &&
    existsSync(".output/public/about/index.html") &&
    existsSync(".output/public/contact/index.html");
  if (ready) {
    console.log("\nStatic site is in .output/public — upload that folder to your host.");
    process.exit(0);
  }
  process.exit(code ?? 1);
});
