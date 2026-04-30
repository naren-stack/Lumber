import htmlData from "@/content/field-productivity-bundles.json";
import ClientFieldProductivityBundlePage from "./ClientFieldProductivityBundlePage";

function parseHtml(rawHtml: string) {
  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : rawHtml;

  const headMatch = rawHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const headHtml = headMatch ? headMatch[1] : "";
  const preservedHeadAssets = (headHtml.match(/<link\b[^>]*>|<style\b[^>]*>[\s\S]*?<\/style>/gi) ?? []).join("\n");

  const scripts: string[] = [];
  const contentWithoutScripts = bodyHtml.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, (_, scriptContent) => {
    scripts.push(scriptContent);
    return "";
  });

  const html = preservedHeadAssets ? `${preservedHeadAssets}\n${contentWithoutScripts}` : contentWithoutScripts;

  return { html, scripts };
}

const { html, scripts } = parseHtml(htmlData.html);

export default function FieldProductivityBundlePage() {
  return <ClientFieldProductivityBundlePage html={html} scripts={scripts} />;
}
