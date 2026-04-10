import fs from "fs";
import path from "path";
import ClientFieldProductivityBundlePage from "./dev/field-productivity-bundle/ClientFieldProductivityBundlePage";

function parseHtml(rawHtml: string) {
  const bodyHtml = rawHtml
    .replace(/<!doctype html[^>]*>/i, "")
    .replace(/<html[^>]*>/gi, "")
    .replace(/<\/html>/gi, "")
    .replace(/<head[^>]*>/gi, "")
    .replace(/<\/head>/gi, "")
    .replace(/<body[^>]*>/gi, "")
    .replace(/<\/body>/gi, "");

  const scripts: string[] = [];
  const html = bodyHtml.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, (_, scriptContent) => {
    scripts.push(scriptContent);
    return "";
  });

  return { html, scripts };
}

const rawHtml = fs.readFileSync(
  path.join(process.cwd(), "field-productivity-bundles.html"),
  "utf8"
);
const { html, scripts } = parseHtml(rawHtml);

export default function Home() {
  return <ClientFieldProductivityBundlePage html={html} scripts={scripts} />;
}
