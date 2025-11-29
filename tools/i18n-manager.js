#!/usr/bin/env node
/**
 * ClinicaVoice i18n Manager (Single combined index.js)
 *
 * Commands:
 *   node tools/i18n-manager.js scan
 *   node tools/i18n-manager.js fix
 *   node tools/i18n-manager.js sync
 */

const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join("src", "i18n", "index.js");

// Extract translation objects from the combined file
function extractTranslations(content) {
  const regex = /const resources\s*=\s*({[\s\S]*?});/m;
  const match = content.match(regex);

  if (!match) throw new Error("❌ Couldn't find `resources = {}` in index.js");

  const resourcesStr = match[1]
    .replace("const resources =", "")
    .replace(/;$/, "");

  let resources;
  try {
    resources = eval("(" + resourcesStr + ")");
  } catch (err) {
    console.error("❌ Failed to parse translations:", err);
    process.exit(1);
  }

  return resources;
}

// Save updated resources back into index.js
function saveTranslations(original, updatedResources) {
  const newContent = original.replace(
    /const resources\s*=\s*({[\s\S]*?});/m,
    "const resources = " + JSON.stringify(updatedResources, null, 2) + ";"
  );

  fs.writeFileSync(FILE_PATH, newContent, "utf8");
}

function walk(dir) {
  let results = [];
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory() && !full.includes("node_modules"))
      results = results.concat(walk(full));
    else if (file.endsWith(".js") || file.endsWith(".jsx"))
      results.push(full);
  }
  return results;
}

// Find t("key") usage
function findUsedKeys() {
  const files = walk("src");
  const keyRegex = /t\(["'`](.*?)["'`]\)/g;
  const used = new Set();

  for (const f of files) {
    const content = fs.readFileSync(f, "utf8");

    let match;
    while ((match = keyRegex.exec(content))) {
      used.add(match[1]);
    }
  }
  return used;
}

function runScan() {
  console.log("🔍 Scanning project…");

  const content = fs.readFileSync(FILE_PATH, "utf8");
  const resources = extractTranslations(content);

  const en = resources.en.translation;
  const fr = resources.fr.translation;

  const used = findUsedKeys();

  const missingEn = [];
  const missingFr = [];
  const unusedEn = [];
  const unusedFr = [];

  for (const key of used) {
    if (!en[key]) missingEn.push(key);
    if (!fr[key]) missingFr.push(key);
  }

  for (const key of Object.keys(en)) {
    if (!used.has(key)) unusedEn.push(key);
  }
  for (const key of Object.keys(fr)) {
    if (!used.has(key)) unusedFr.push(key);
  }

  console.log("\n📌 Missing EN:", missingEn);
  console.log("📌 Missing FR:", missingFr);
  console.log("🗑 Unused EN:", unusedEn);
  console.log("🗑 Unused FR:", unusedFr);
}

function runFix() {
  console.log("🛠 Fixing translations…");

  const content = fs.readFileSync(FILE_PATH, "utf8");
  const resources = extractTranslations(content);

  const en = resources.en.translation;
  const fr = resources.fr.translation;

  const used = findUsedKeys();

  // Add missing keys
  for (const key of used) {
    if (!en[key]) en[key] = `[MISSING] ${key}`;
    if (!fr[key]) fr[key] = `[FR] ${key}`;
  }

  // Remove unused keys
  for (const key of Object.keys(en)) {
    if (!used.has(key)) delete en[key];
  }
  for (const key of Object.keys(fr)) {
    if (!used.has(key)) delete fr[key];
  }

  // Save updated translations
  fs.copyFileSync(FILE_PATH, FILE_PATH + ".bak");
  saveTranslations(content, resources);

  console.log("✨ Fix complete! Backup created:", FILE_PATH + ".bak");
}

const cmd = process.argv[2];

switch (cmd) {
  case "scan":
    runScan();
    break;
  case "fix":
  case "sync":
    runFix();
    break;
  default:
    console.log("❓ Usage:");
    console.log("   node tools/i18n-manager.js scan");
    console.log("   node tools/i18n-manager.js fix");
}
