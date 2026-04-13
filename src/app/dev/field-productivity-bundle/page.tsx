import ClientFieldProductivityBundlePage from "./ClientFieldProductivityBundlePage";
import rawHtml from "@/content/field-productivity-bundles.html";

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

const { html, scripts } = parseHtml(rawHtml);

export default function FieldProductivityBundlePage() {
  return <ClientFieldProductivityBundlePage html={html} scripts={scripts} />;
}
