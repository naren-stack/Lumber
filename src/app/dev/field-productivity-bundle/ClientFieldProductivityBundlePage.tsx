"use client";

import { useEffect, useRef } from "react";

type Props = {
  html: string;
  scripts: string[];
};

export default function ClientFieldProductivityBundlePage({ html, scripts }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const appendedScripts: HTMLScriptElement[] = [];
    const container = containerRef.current;
    if (!container) return;

    scripts.forEach((scriptContent) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.text = scriptContent;
      script.async = false;
      document.body.appendChild(script);
      appendedScripts.push(script);
    });

    return () => {
      appendedScripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [scripts]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />;
}
