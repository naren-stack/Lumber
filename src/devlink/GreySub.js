"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import Heading from "./_Builtin/Heading";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Link from "./_Builtin/Link";
import Section from "./_Builtin/Section";

export function GreySub({ as: _Component = Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_lumber", "zero")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <Block
        className={_utils.cx(_styles, "container_lumber", "ash")}
        tag="div"
      >
        <Block
          className={_utils.cx(_styles, "content-holder", "insight")}
          tag="div"
        >
          <Block className={_utils.cx(_styles, "wd-800")} tag="div">
            <Heading tag="h4">{"Newsletter"}</Heading>
            <Heading className={_utils.cx(_styles, "sub-text")} tag="h2">
              {"Subscribe to Lumber Logline"}
            </Heading>
          </Block>
          <Block className={_utils.cx(_styles, "form-n-privacy")} tag="div">
            <Block className={_utils.cx(_styles, "form-block-5")} tag="div">
              <HtmlEmbed
                className={_utils.cx(_styles, "html-embed-2")}
                content=""
                value="%3Cstyle%3E%0A%0A%0A%23label-email-91243b07-0fb4-49f4-9dd0-0679c448772b%0A%7B%0A%09position%3A%20absolute%3B%0A%09-webkit-transform%3A%20translateY(1px)%3B%0A%09-ms-transform%3A%20translateY(1px)%3B%0A%09transform%3A%20translateY(1px)%3B%0A%09-webkit-transition%3A%200.25s%3B%0A%09-o-transition%3A%200.25s%3B%0A%09transition%3A%200.25s%3B%0A%09pointer-events%3A%20none%3B%0A%09top%3A%2014px%3B%0A%20%20left%3A%2017px%3B%0A%7D%0A.hs-input%7B%0Aborder%3Anone%3B%0A%7D%0A%40media%20screen%20and%20(min-width%3A%201048px)%7B%0A%23hsForm_91243b07-0fb4-49f4-9dd0-0679c448772b%7B%0A%09display%3A%20grid%3B%0A%20%20%20%20grid-template-columns%3A%20auto%20auto%3B%0A%20%20%20%20column-gap%3A%2010px%3B%0A%20%20%20%20%7D%20%20%0A%20%7D%0A%2F*%23hsForm_91243b07-0fb4-49f4-9dd0-0679c448772b%3Ediv.active%3Elabel%20%7B%0A%09-webkit-transform%3A%20translateY(-42px)%3B%0A%09-ms-transform%3A%20translateY(-42px)%3B%0A%09transform%3A%20translateY(-42px)%3B%0A%7D*%2F%0A%0A%0A%23hsForm_91243b07-0fb4-49f4-9dd0-0679c448772b%3Ediv.hs-form-field%20%7B%0A%09margin-top%3A%208px%3B%0A%09margin-bottom%3A%2032px%3B%0A%7D%0A.hs-button%20%7B%0Amargin-top%3A%200.5rem%3B%0A%7D%0A%0A.hs_error_rollup%7B%0Adisplay%3Anone%3B%0A%7D%0A.hs_error_rollup%7B%0Adisplay%3Anone%3B%0A%7D%0A%23hsForm_91243b07-0fb4-49f4-9dd0-0679c448772b%3Ediv.hs-form-field%7B%0A%20%20%20%20margin-bottom%3A%200px%3B%0A%20%20%20%20%7D%0A%3C%2Fstyle%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%3C%2Fstyle%3E%0A%3Cstyle%3E%0A%23hsForm_91243b07-0fb4-49f4-9dd0-0679c448772b%3Ediv.active%3Elabel%20%7B%0A%20%20%20%20-webkit-transform%3A%20translateY(-42px)%3B%0A%20%20%20%20-ms-transform%3A%20translateY(-42px)%3B%0A%20%20%20%20transform%3A%20translateY(-42px)%3B%0A%7D%0A%0A.label-moved%20%7B%0A%20%20%20%20-webkit-transform%3A%20translateY(0)%3B%0A%20%20%20%20-ms-transform%3A%20translateY(0)%3B%0A%20%20%20%20transform%3A%20translateY(0)%3B%0A%7D%0A%3C%2Fstyle%3E%0A%0A%0A%3Cscript%3E%0A%20%20var%20emailInput%20%3D%20document.getElementById('email-91243b07-0fb4-49f4-9dd0-0679c448772b')%3B%0A%20%20var%20label%20%3D%20document.querySelector('%23hsForm_91243b07-0fb4-49f4-9dd0-0679c448772b%3Ediv.active%3Elabel')%3B%0A%0A%20%20emailInput.addEventListener('focus'%2C%20function()%20%7B%0A%20%20%20%20label.classList.add('label-moved')%3B%0A%20%20%7D)%3B%0A%0A%20%20emailInput.addEventListener('blur'%2C%20function()%20%7B%0A%20%20%20%20if%20(emailInput.value%20%3D%3D%3D%20'')%20%7B%0A%20%20%20%20%20%20label.classList.remove('label-moved')%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%3C%2Fscript%3E%0A%0A%0A%0A%3Cscript%20charset%3D%22utf-8%22%20type%3D%22text%2Fjavascript%22%20src%3D%22%2F%2Fjs.hsforms.net%2Fforms%2Fembed%2Fv2.js%22%3E%3C%2Fscript%3E%0A%3Cscript%3E%0A%20%20hbspt.forms.create(%7B%0A%20%20%20%20region%3A%20%22na1%22%2C%0A%20%20%20%20portalId%3A%20%2224336868%22%2C%0A%20%20%20%20formId%3A%20%2291243b07-0fb4-49f4-9dd0-0679c448772b%22%2C%0A%20%20%20%20%09onFormReady%3A%20function(%24form)%20%7B%0A%09%09jQuery(%22input%2C%20textarea%22).on(%22focus%22%2C%20function(e)%20%7B%0A%09%09%09%09jQuery(this).parents(%22.field%22).addClass(%22active%22)%0A%09%09%09%7D)%3B%0A%0A%09%09jQuery(%22input%2C%20textarea%22).on(%22focusout%22%2C%20function(e)%20%7B%0A%20%20%20%20%09if%20(jQuery(this).val().length%20%3C%201)%20%7B%0A%09%09%09%09jQuery(this).parents(%22.field%22).removeClass(%22active%22)%0A%09%09%09%7Delse%7B%0A%09%20%20%20%20%20%20jQuery(this).addClass(%22filled%22)%0A%20%20%20%20%20%20%7D%0A%09%09%09%7D)%3B%0A%09%7D%0A%7D)%3B%0A%0A%3C%2Fscript%3E"
              />
            </Block>
            <Block className={_utils.cx(_styles, "privacy-link")} tag="div">
              {"By submitting, you agree to the "}
              <Link
                block=""
                button={false}
                className={_utils.cx(_styles, "privacy")}
                options={{
                  href: "#",
                }}
              >
                {"privacy policy"}
              </Link>
              {
                " including Lumber using your contact details for marketing purposes."
              }
            </Block>
          </Block>
        </Block>
      </Block>
    </_Component>
  );
}
