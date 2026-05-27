// deploy.js
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoUrl = "https://github.com/kiwrious/play-kiwrious.git";
const branch = "main";
const tempDir = path.join(__dirname, "gh-pages");

const excludeFiles = new Set([
  "deploy.js",
  "gh-pages",
  ".git",
  "node_modules",
  ".vscode",
]);

try {
  console.log("🚀 Starting deployment...");

  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }

  // Clone or init if empty repo
  execSync(`git clone --depth 1 ${repoUrl} ${tempDir}`, { stdio: "inherit" });

  // If repo was empty, initialize it
  if (!fs.existsSync(path.join(tempDir, ".git", "HEAD"))) {
    process.chdir(tempDir);
    execSync("git init", { stdio: "inherit" });
    execSync(`git remote add origin ${repoUrl}`, { stdio: "inherit" });
  } else {
    process.chdir(tempDir);
  }

  // Remove everything except .git and CNAME
  const existingFiles = fs.readdirSync(tempDir);
  for (const file of existingFiles) {
    if (file === ".git" || file === "CNAME") continue;
    fs.rmSync(path.join(tempDir, file), { recursive: true, force: true });
  }

  // Copy all files from root except excluded ones
  const rootFiles = fs.readdirSync(__dirname);
  for (const file of rootFiles) {
    if (excludeFiles.has(file)) continue;
    const src = path.join(__dirname, file);
    const dest = path.join(tempDir, file);
    fs.cpSync(src, dest, { recursive: true });
  }

  execSync("git add .", { stdio: "inherit" });

  try {
    execSync(`git commit -m "Deploy to dev.kiwrious.com"`, { stdio: "inherit" });
  } catch {
    console.log("No changes to commit");
  }

  // Use --force for first push to empty repo
  execSync(`git push -u origin ${branch}`, { stdio: "inherit" });

  process.chdir(__dirname);
  fs.rmSync(tempDir, { recursive: true, force: true });

  console.log("✅ Deployment completed!");
  console.log("🌍 Live at: https://dev.kiwrious.com/");
} catch (err) {
  console.error("❌ Deployment failed:", err);
  process.exit(1);
}