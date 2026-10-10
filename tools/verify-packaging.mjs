#!/usr/bin/env node
/**
 * Packaging layout verifier for Mum PC Helper.
 * Drives the real repo tree + key hire-facing files (no mocked paths).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { execSync } from "node:child_process";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

function exists(rel) {
  return fs.existsSync(path.join(root, rel));
}
function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}
function fail(msg) {
  failures.push(msg);
}
function ok(msg) {
  console.log(`OK  ${msg}`);
}

// 1) Stubs gone from root
for (const stub of [
  "Mum PC Helper - Connector Switching Rule.md",
  "PC Helper - Packaging Worksheet.md",
]) {
  if (exists(stub)) fail(`stub still at root: ${stub}`);
  else ok(`root lacks stub ${stub}`);
}
for (const stub of [
  "archive/Mum PC Helper - Connector Switching Rule.md",
  "archive/PC Helper - Packaging Worksheet.md",
]) {
  if (!exists(stub)) fail(`stub missing from archive: ${stub}`);
  else ok(`archived ${stub}`);
}

// 2) Build / Product / Archive separation
for (const dir of ["product", "build", "archive", "scripts", "release", "docs"]) {
  if (!exists(dir)) fail(`missing folder ${dir}`);
  else ok(`folder ${dir}`);
}
const productMust = [
  "product/Mum PC Helper - Start Here.md",
  "product/Mum PC Helper - Quick Run Card.md",
  "product/Mum PC Helper - Safety Notes.md",
  "product/Mum PC Helper - User Guide.md",
];
for (const f of productMust) {
  if (!exists(f)) fail(`missing product file ${f}`);
  else ok(`product has ${path.basename(f)}`);
}
const buildMust = [
  "build/Mum PC Helper - Master Index.md",
  "build/Mum PC Helper - Run Order for Scripts.md",
  "build/Mum PC Helper - Canonical Product Structure.md",
];
for (const f of buildMust) {
  if (!exists(f)) fail(`missing build file ${f}`);
  else ok(`build has ${path.basename(f)}`);
}

// Root must not still hold classified guides (only README + AGENTS)
const rootMd = fs.readdirSync(root).filter((n) => n.endsWith(".md"));
const allowedRootMd = new Set(["README.md", "AGENTS.md"]);
for (const n of rootMd) {
  if (!allowedRootMd.has(n)) fail(`unexpected root markdown still live: ${n}`);
}
ok(`root markdown limited to ${[...allowedRootMd].join(", ")}`);

// 3) Mum-named release pack + zip; old names gone
if (exists("release/PC Helper v1")) fail("old release/PC Helper v1 still present");
else ok("old release/PC Helper v1 gone");
if (exists("release/PC-Helper-v1.zip")) fail("old release/PC-Helper-v1.zip still present");
else ok("old PC-Helper-v1.zip gone");
if (!exists("release/Mum PC Helper v1")) fail("missing release/Mum PC Helper v1");
else ok("release/Mum PC Helper v1 present");
if (!exists("release/Mum-PC-Helper-v1.zip")) fail("missing release/Mum-PC-Helper-v1.zip");
else ok("release/Mum-PC-Helper-v1.zip present");

// Zip must contain Mum-named top folder
const zipList = execSync('unzip -Z1 "release/Mum-PC-Helper-v1.zip"', {
  cwd: root,
  encoding: "utf8",
});
if (!zipList.split("\n").some((l) => l.startsWith("Mum PC Helper v1/"))) {
  fail("zip does not contain Mum PC Helper v1/ entries");
} else ok("zip lists Mum PC Helper v1/ entries");
const zipHasOldTop = zipList
  .split("\n")
  .some((l) => l === "PC Helper v1/" || l.startsWith("PC Helper v1/"));
if (zipHasOldTop) fail("zip still contains PC Helper v1/ entries");
else ok("zip has no PC Helper v1/ entries");

// 4) Hire-facing path refs (avoid substring false positives on Mum-named paths)
function hasStalePackagePath(text) {
  if (/(^|[^A-Za-z-])PC-Helper-v1\.zip\b/.test(text)) return true;
  if (/release\/PC Helper v1\b/.test(text)) return true;
  if (/release\\PC Helper v1\b/.test(text)) return true;
  return false;
}
for (const rel of ["README.md", "docs/index.html", "AGENTS.md"]) {
  const text = read(rel);
  if (hasStalePackagePath(text)) {
    fail(`${rel} still references old PC Helper v1 / PC-Helper-v1 package path`);
  } else ok(`${rel} has no stale package path`);
  if (!text.includes("Mum-PC-Helper-v1.zip")) {
    fail(`${rel} missing Mum-PC-Helper-v1.zip reference`);
  } else ok(`${rel} references Mum-PC-Helper-v1.zip`);
}

// 5) Scripts unchanged vs git HEAD for .ps1 (working tree vs index after our edits)
// Compare working tree .ps1 bytes to origin/master versions via git show
const scripts = [
  "scripts/DiskSpaceAudit.ps1",
  "scripts/DownloadsAudit.ps1",
  "scripts/LargeFilesFinder.ps1",
  "scripts/InstalledProgramsExport.ps1",
  "scripts/StartupItemsReview.ps1",
];
for (const rel of scripts) {
  const cur = fs.readFileSync(path.join(root, rel));
  const base = execSync(`git show origin/master:${rel}`, { cwd: root });
  if (Buffer.compare(cur, base) !== 0) {
    fail(`${rel} content changed vs origin/master`);
  } else {
    ok(`${rel} unchanged vs origin/master`);
  }
}

// Locked visit order still stated
const orderFiles = [
  "build/Mum PC Helper - Run Order for Scripts.md",
  "product/Mum PC Helper - Quick Run Card.md",
  "scripts/README.md",
];
for (const rel of orderFiles) {
  const text = read(rel);
  for (const name of [
    "DiskSpaceAudit",
    "DownloadsAudit",
    "LargeFilesFinder",
    "InstalledProgramsExport",
    "StartupItemsReview",
  ]) {
    if (!text.includes(name)) fail(`${rel} missing ${name}`);
  }
  ok(`${rel} states five-script order names`);
}

if (failures.length) {
  console.error("\nFAILURES:");
  for (const f of failures) console.error(" -", f);
  process.exit(1);
}
console.log("\nALL PACKAGING CHECKS PASSED");
