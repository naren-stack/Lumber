"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Link from "./_Builtin/Link";

export function ArrowRunCta({
  as: _Component = Link,

  link = {
    href: "#",
  },

  text = "See it in action",
}) {
  return (
    <_Component
      block="inline"
      button={false}
      className={_utils.cx(_styles, "button2")}
      options={link}
    >
      <Block className={_utils.cx(_styles, "button2_text")} tag="div">
        {text}
      </Block>
      <Block className={_utils.cx(_styles, "button2_icon-wrap")} tag="div">
        <HtmlEmbed
          className={_utils.cx(_styles, "button2_icon")}
          content=""
          value="%3Cstyle%3E%0A%20%20.button2_icon%20%7B%0A%20%20%20%20color%3A%20inherit%3B%20%2F*%20Inherits%20from%20parent%20text%20color%20*%2F%0A%20%20%20%20display%3A%20inline-block%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Csvg%20class%3D%22button2_icon%22%20width%3D%2222%22%20height%3D%2220%22%20viewBox%3D%220%200%2022%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.5%2010C0.5%209.64013%200.638266%209.295%200.88438%209.04053C1.13049%208.78606%201.4643%208.6431%201.81235%208.6431H17.0173L11.382%202.8193C11.1356%202.56451%2010.9972%202.21894%2010.9972%201.85861C10.9972%201.49829%2011.1356%201.15272%2011.382%200.897929C11.6285%200.643139%2011.9627%200.5%2012.3112%200.5C12.6597%200.5%2012.9939%200.643139%2013.2403%200.897929L21.1144%209.03932C21.2367%209.16536%2021.3336%209.31509%2021.3998%209.47995C21.4659%209.6448%2021.5%209.82152%2021.5%2010C21.5%2010.1785%2021.4659%2010.3552%2021.3998%2010.5201C21.3336%2010.6849%2021.2367%2010.8346%2021.1144%2010.9607L13.2403%2019.1021C12.9939%2019.3569%2012.6597%2019.5%2012.3112%2019.5C11.9627%2019.5%2011.6285%2019.3569%2011.382%2019.1021C11.1356%2018.8473%2010.9972%2018.5017%2010.9972%2018.1414C10.9972%2017.7811%2011.1356%2017.4355%2011.382%2017.1807L17.0173%2011.3569H1.81235C1.4643%2011.3569%201.13049%2011.2139%200.88438%2010.9595C0.638266%2010.705%200.5%2010.3599%200.5%2010Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </Block>
      <HtmlEmbed
        content=""
        value="%3C!--%0A%3Cstyle%3E%0A%0A.button2%20.button2_icon-wrap%20%7B%0A%09left%3A%20calc(100%25%20-%200.5em)%3B%0A%20%20transform%3A%20translateX(-100%25)%3B%0A%20%20transition%3A%20all%20500ms%20cubic-bezier(0.215%2C%200.610%2C%200.355%2C%201.000)%3B%0A%7D%0A%0A.button2%3Ahover%20.button2_icon-wrap%20%7B%0A%09left%3A%200.5em%3B%0A%20%20transform%3A%20translateX(0)%3B%0A%20%20background%3A%20rgba(255%2C255%2C255%2C0)%3B%0A%7D%0A%0A.button2%20.button2_text%20%7B%0A%09position%3Arelative%3B%0A%09left%3A0%3B%0A%20%20transition%3A%20all%20500ms%20cubic-bezier(0.215%2C%200.610%2C%200.355%2C%201.000)%3B%0A%7D%0A%0A.button2%3Ahover%20.button2_text%20%7B%0A%09left%3A2.5em%3B%0A%7D%0A%0A.button2%20.button2_icon%20%7B%0A%09%0A%20%20transition%3A%20all%20500ms%20cubic-bezier(0.215%2C%200.610%2C%200.355%2C%201.000)%3B%0A%7D%0A%0A%0A%3C%2Fstyle%3E%0A--%3E%0A%0A%3Cstyle%3E%0A.button2%20.button2_icon-wrap%20%7B%0A%09left%3A%20calc(100%25%20-%200.5em)%3B%0A%09transform%3A%20translateX(-100%25)%3B%0A%09transition%3A%20all%20500ms%20cubic-bezier(0.215%2C%200.610%2C%200.355%2C%201.000)%3B%0A%7D%0A%0A.button2%3Ahover%20.button2_icon-wrap%20%7B%0A%09left%3A%200.5em%3B%0A%09transform%3A%20translateX(0)%3B%0A%09background%3A%20rgba(255%2C255%2C255%2C0)%3B%0A%7D%0A%0A.button2%20.button2_text%20%7B%0A%09position%3A%20relative%3B%0A%09left%3A%200%3B%0A%09transition%3A%20all%20500ms%20cubic-bezier(0.215%2C%200.610%2C%200.355%2C%201.000)%3B%0A%7D%0A%0A.button2%3Ahover%20.button2_text%20%7B%0A%09left%3A%202.5em%3B%0A%09%0A%7D%0A%0A.button2%20.button2_icon%20%7B%0A%09color%3A%20inherit%3B%20%2F*%20SVG%20uses%20text%20color%20*%2F%0A%09transition%3A%20all%20500ms%20cubic-bezier(0.215%2C%200.610%2C%200.355%2C%201.000)%3B%0A%7D%0A%0A.button2%3Ahover%20.button2_icon%20%7B%0A%09color%3A%20%23FF6F61%3B%20%2F*%20matches%20hover%20text%20color%20*%2F%0A%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
