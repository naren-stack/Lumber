import fs from "fs";
import path from "path";

const rawHtml = fs.readFileSync(
  path.join(process.cwd(), "src/content/field-productivity-bundles.html"),
  "utf8"
);

const html = rawHtml
  .replace(/<!doctype html[^>]*>/i, "")
  .replace(/<html[^>]*>/gi, "")
  .replace(/<\/html>/gi, "")
  .replace(/<head[\s\S]*?<\/head>/gi, "")
  .replace(/<body[^>]*>/gi, "")
  .replace(/<\/body>/gi, "");

export default function FieldProductivityBundlePage() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
