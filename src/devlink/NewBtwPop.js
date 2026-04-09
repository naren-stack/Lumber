"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import Link from "./_Builtin/Link";

export function NewBtwPop({
  as: _Component = Link,

  link = {
    href: "#",
  },

  textHolder = "All integrations",
}) {
  return (
    <_Component
      block="inline"
      button={false}
      className={_utils.cx(_styles, "btw-variant-5")}
      options={link}
    >
      <Block className={_utils.cx(_styles, "hover-btn-6-text-block")} tag="div">
        {textHolder}
      </Block>
    </_Component>
  );
}
