"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Link from "./_Builtin/Link";

export function ArrowLearn({
  as: _Component = Link,

  link = {
    href: "#",
  },

  textPlaceholder = "Learn more",
}) {
  return (
    <_Component
      block="inline"
      button={false}
      className={_utils.cx(_styles, "learn-more_cta")}
      options={link}
    >
      <Block tag="div">{textPlaceholder}</Block>
      <HtmlEmbed
        className={_utils.cx(_styles, "icon")}
        content=""
        value="%3Csvg%20width%3D%2221%22%20height%3D%2220%22%20viewBox%3D%220%200%2021%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.66699%2010.0001H16.3337M16.3337%2010.0001L10.5003%204.16675M16.3337%2010.0001L10.5003%2015.8334%22%20stroke%3D%22%23FF8F84%22%20stroke-width%3D%221.66667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
      />
    </_Component>
  );
}
