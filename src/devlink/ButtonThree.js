"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import Link from "./_Builtin/Link";

export function ButtonThree({
  as: _Component = Link,

  link = {
    href: "#",
  },

  textHolder = "View more",
}) {
  return (
    <_Component
      block="inline"
      button={false}
      className={_utils.cx(_styles, "button--three")}
      options={link}
    >
      <Block tag="div">{textHolder}</Block>
    </_Component>
  );
}
