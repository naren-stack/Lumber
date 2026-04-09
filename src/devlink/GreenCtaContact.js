"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import Heading from "./_Builtin/Heading";
import Image from "./_Builtin/Image";
import Link from "./_Builtin/Link";
import Section from "./_Builtin/Section";

export function GreenCtaContact({ as: _Component = Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_lumber", "cta")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <Block className={_utils.cx(_styles, "container_lumber")} tag="div">
        <Block
          className={_utils.cx(_styles, "content-holder", "insight")}
          tag="div"
        >
          <Block className={_utils.cx(_styles, "wd-650")} tag="div">
            <Heading className={_utils.cx(_styles, "green-cta-title")} tag="h2">
              {"Lumber can transform the way you work."}
            </Heading>
            <Block className={_utils.cx(_styles, "align-center")} tag="div">
              {"Contact a Lumber expert today!"}
            </Block>
          </Block>
          <Link
            block="inline"
            button={false}
            className={_utils.cx(_styles, "free-button")}
            id={_utils.cx(_styles, "green-cta1")}
            options={{
              href: "#",
            }}
          >
            <Block tag="div">{"Talk to us"}</Block>
            <Block
              className={_utils.cx(_styles, "arrow-icon", "black")}
              tag="div"
            >
              <Image
                alt=""
                className={_utils.cx(_styles, "icon-16")}
                height="auto"
                loading="lazy"
                src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64edbe7653bc14e5e1ad4430_greenVector.svg"
                width="auto"
              />
            </Block>
          </Link>
        </Block>
      </Block>
    </_Component>
  );
}
