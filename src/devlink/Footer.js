"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import FormButton from "./_Builtin/FormButton";
import FormErrorMessage from "./_Builtin/FormErrorMessage";
import FormForm from "./_Builtin/FormForm";
import FormSuccessMessage from "./_Builtin/FormSuccessMessage";
import FormTextInput from "./_Builtin/FormTextInput";
import FormWrapper from "./_Builtin/FormWrapper";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Image from "./_Builtin/Image";
import Link from "./_Builtin/Link";
import Section from "./_Builtin/Section";

export function Footer({ as: _Component = Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer")}
      id={_utils.cx(_styles, "blog-query")}
      tag="div"
    >
      <Section
        className={_utils.cx(_styles, "section_lumber", "footer")}
        grid={{
          type: "section",
        }}
        id={_utils.cx(_styles, "waiting")}
        tag="section"
      >
        <Block className={_utils.cx(_styles, "container_lumber")} tag="div">
          <Block className={_utils.cx(_styles, "content-holder")} tag="div">
            <Link
              block="inline"
              button={false}
              className={_utils.cx(_styles, "logo")}
              options={{
                href: "#",
              }}
            >
              <Image
                alt=""
                height="auto"
                loading="lazy"
                src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64d1d8337588ef5b1c516a6a_logo%20.webp"
                width="auto"
              />
            </Link>
            <Block className={_utils.cx(_styles, "form-holder")} tag="div">
              <HtmlEmbed
                content=""
                value="%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%0A%23label-firstname-15997ec0-d7dd-4994-bda7-946631f7dfd9%2C%0A%23label-lastname-15997ec0-d7dd-4994-bda7-946631f7dfd9%2C%0A%23label-jobtitle-15997ec0-d7dd-4994-bda7-946631f7dfd9%2C%0A%23label-email-15997ec0-d7dd-4994-bda7-946631f7dfd9%2C%0A%23label-phone-15997ec0-d7dd-4994-bda7-946631f7dfd9%2C%0A%23label-company-15997ec0-d7dd-4994-bda7-946631f7dfd9%7B%0A%09position%3A%20absolute%3B%0A%09-webkit-transform%3A%20translateY(1px)%3B%0A%09-ms-transform%3A%20translateY(1px)%3B%0A%09transform%3A%20translateY(1px)%3B%0A%09-webkit-transition%3A%200.25s%3B%0A%09-o-transition%3A%200.25s%3B%0A%09transition%3A%200.25s%3B%0A%09pointer-events%3A%20none%3B%0A%09top%3A%2014px%3B%0A%20%20left%3A%2017px%3B%0A%7D%0A%40media%20screen%20and%20(min-width%3A%201048px)%7B%0A%23hsForm_15997ec0-d7dd-4994-bda7-946631f7dfd9%7B%0A%09display%3A%20grid%3B%0A%20%20%20%20grid-template-columns%3A%20auto%20auto%3B%0A%20%20%20%20column-gap%3A%2010px%3B%0A%20%20%20%20%7D%0A%20%20%20.hs_submit%7B%0A%20%20%20grid-row%3A%204%2F4%3B%0A%20%20%20grid-column%3A%201%2F3%3B%0A%20%20%20%7D%0A%20%20%20%0A%20%7D%0A%23hsForm_15997ec0-d7dd-4994-bda7-946631f7dfd9%3Ediv.active%3Elabel%20%7B%0A%09-webkit-transform%3A%20translateY(-42px)%3B%0A%09-ms-transform%3A%20translateY(-42px)%3B%0A%09transform%3A%20translateY(-42px)%3B%0A%7D%0A%0A%23hsForm_15997ec0-d7dd-4994-bda7-946631f7dfd9%3Ediv.hs-form-field%20%7B%0A%09margin-top%3A%208px%3B%0A%09margin-bottom%3A%2032px%3B%0A%7D%0A%0A%3C%2Fstyle%3E%0A%3Cscript%20charset%3D%22utf-8%22%20type%3D%22text%2Fjavascript%22%20src%3D%22%2F%2Fjs.hsforms.net%2Fforms%2Fembed%2Fv2.js%22%3E%3C%2Fscript%3E%3Cscript%3Ehbspt.forms.create(%7B%0A%0A%09region%3A%20%22na1%22%2C%0A%09portalId%3A%20%2224336868%22%2C%0A%09formId%3A%20%2215997ec0-d7dd-4994-bda7-946631f7dfd9%22%2C%0A%09onFormReady%3A%20function(%24form)%20%7B%0A%09%09jQuery(%22input%2C%20textarea%22).on(%22focus%22%2C%20function(e)%20%7B%0A%09%09%09%09jQuery(this).parents(%22.field%22).addClass(%22active%22)%0A%09%09%09%7D)%3B%0A%0A%09%09jQuery(%22input%2C%20textarea%22).on(%22focusout%22%2C%20function(e)%20%7B%0A%20%20%20%20%09if%20(jQuery(this).val().length%20%3C%201)%20%7B%0A%09%09%09%09jQuery(this).parents(%22.field%22).removeClass(%22active%22)%0A%09%09%09%7Delse%7B%0A%09%20%20%20%20%20%20jQuery(this).addClass(%22filled%22)%0A%20%20%20%20%20%20%7D%0A%09%09%09%7D)%3B%0A%09%7D%0A%7D)%3B%0A%3C%2Fscript%3E"
              />
            </Block>
            <FormWrapper className={_utils.cx(_styles, "form-block")}>
              <FormForm
                className={_utils.cx(_styles, "form")}
                data-name="Webmaster Lumber"
                id={_utils.cx(_styles, "wf-form-Webmaster-Lumber")}
                method="get"
                name="wf-form-Webmaster-Lumber"
              >
                <Block
                  className={_utils.cx(_styles, "form-field-holder")}
                  tag="div"
                >
                  <FormTextInput
                    autoFocus={false}
                    className={_utils.cx(_styles, "form-field")}
                    data-name="Name"
                    disabled={false}
                    id={_utils.cx(_styles, "Name")}
                    maxLength={256}
                    name="Name"
                    placeholder="*Name"
                    required={true}
                    type="text"
                  />
                  <FormTextInput
                    autoFocus={false}
                    className={_utils.cx(_styles, "form-field")}
                    data-name="Company Name"
                    disabled={false}
                    id={_utils.cx(_styles, "Company-Name")}
                    maxLength={256}
                    name="Company-Name"
                    placeholder="*Company name"
                    required={true}
                    type="text"
                  />
                  <FormTextInput
                    autoFocus={false}
                    className={_utils.cx(_styles, "form-field")}
                    data-name="Email Address"
                    disabled={false}
                    id={_utils.cx(_styles, "Email-Address")}
                    maxLength={256}
                    name="Email-Address"
                    placeholder="*Email address"
                    required={true}
                    type="email"
                  />
                  <FormTextInput
                    autoFocus={false}
                    className={_utils.cx(_styles, "form-field")}
                    data-name="Contact"
                    disabled={false}
                    id={_utils.cx(_styles, "Contact")}
                    maxLength={256}
                    name="Contact"
                    placeholder="*Contact number"
                    required={true}
                    type="tel"
                  />
                </Block>
                <FormButton
                  className={_utils.cx(_styles, "primary_btn", "form")}
                  data-wait="Please wait..."
                  type="submit"
                  value="Get first dibs on Lumber"
                />
              </FormForm>
              <FormSuccessMessage
                className={_utils.cx(_styles, "success-message")}
              >
                <Block tag="div">
                  {"🎉 Thank you! Your submission has been received!"}
                </Block>
              </FormSuccessMessage>
              <FormErrorMessage>
                <Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </Block>
              </FormErrorMessage>
            </FormWrapper>
            <Block className={_utils.cx(_styles, "footer-link")} tag="div">
              {"or "}
              <Link
                block=""
                button={false}
                className={_utils.cx(_styles, "link")}
                options={{
                  href: "#",
                  target: "_blank",
                }}
              >
                {"schedule a demo"}
              </Link>
              {" with our Lumber Experts"}
            </Block>
          </Block>
        </Block>
      </Section>
      <Section
        className={_utils.cx(_styles, "section_lumber", "footer2")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <Block className={_utils.cx(_styles, "container_lumber")} tag="div">
          <Block className={_utils.cx(_styles, "footer-align")} tag="div">
            <Block className={_utils.cx(_styles, "footer-left")} tag="div">
              <Image
                alt=""
                height="auto"
                loading="lazy"
                src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ba4ec40aa01698297aa988_white%20logo.svg"
                width="auto"
              />
            </Block>
            <Block className={_utils.cx(_styles, "div-block-2")} tag="div">
              <Block className={_utils.cx(_styles, "footer-text")} tag="div">
                <Link
                  block=""
                  button={false}
                  className={_utils.cx(_styles, "footer-mail")}
                  options={{
                    href: "mailto:info@lumberfi.com",
                  }}
                >
                  {"info@lumberfi.com"}
                </Link>
              </Block>
              <Block className={_utils.cx(_styles, "footer-text")} tag="div">
                <Block className={_utils.cx(_styles, "text-block-4")} tag="div">
                  {"© All Rights Reserved 2023 | Lumberfi Inc."}
                </Block>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "footer-links")} tag="div">
              <Block className={_utils.cx(_styles, "footer-right")} tag="div">
                <Link
                  block="inline"
                  button={false}
                  options={{
                    href: "https://www.linkedin.com/company/lumberfi/",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt=""
                    height="auto"
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ba4ec40c73018fbba7e208_linkedin.webp"
                    width="auto"
                  />
                </Link>
                <Link
                  block="inline"
                  button={false}
                  options={{
                    href: "https://www.instagram.com/lumberfi/",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt=""
                    height="auto"
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64d1d47d5e12abf938f60921_instagram%201.webp"
                    width="auto"
                  />
                </Link>
                <Link
                  block="inline"
                  button={false}
                  options={{
                    href: "https://www.facebook.com/people/Lumber/100095049919475/",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt=""
                    height="auto"
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ccbdb1e5a96686970ad109_icon%2001.webp"
                    width="auto"
                  />
                </Link>
                <Link
                  block="inline"
                  button={false}
                  options={{
                    href: "https://www.youtube.com/@LumberFi",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt=""
                    height="auto"
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64d1d492d5be49b3871410c2_youtube.webp"
                    width="auto"
                  />
                </Link>
              </Block>
            </Block>
          </Block>
        </Block>
      </Section>
    </_Component>
  );
}
