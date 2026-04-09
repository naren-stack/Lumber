"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import HtmlEmbed from "./_Builtin/HtmlEmbed";

export function BeforeBodyTag({ as: _Component = HtmlEmbed }) {
  return (
    <_Component
      className={_utils.cx(_styles, "global-embed")}
      content=""
      value="%3C!--%20Google%20Tag%20Manager%20(noscript)%20--%3E%0A%3Cnoscript%3E%3Ciframe%20src%3D%22https%3A%2F%2Fwww.googletagmanager.com%2Fns.html%3Fid%3DGTM-NWLS24RG%22%20height%3D%220%22%20width%3D%220%22%20style%3D%22display%3Anone%3Bvisibility%3Ahidden%22%3E%3C%2Fiframe%3E%3C%2Fnoscript%3E%0A%3C!--%20End%20Google%20Tag%20Manager%20(noscript)%20--%3E"
    />
  );
}
