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
import Section from "./_Builtin/Section";

export function NewEmailField({ as: _Component = Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer-email-field")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <Block className={_utils.cx(_styles, "container_lumber")} tag="div">
        <Block
          className={_utils.cx(_styles, "footer-gmail-container")}
          tag="div"
        >
          <Block
            className={_utils.cx(_styles, "footer-mail-field-text-wrap")}
            tag="div"
          >
            <Block
              className={_utils.cx(_styles, "footer-mail-field-title")}
              tag="div"
            >
              {"Join our newsletter"}
            </Block>
            <Block
              className={_utils.cx(_styles, "footer-mail-field-sub-title")}
              tag="div"
            >
              {"We’ll send you a nice letter once per week. No spam."}
            </Block>
          </Block>
          <FormWrapper className={_utils.cx(_styles, "form-block-6")}>
            <FormForm
              className={_utils.cx(_styles, "form-3")}
              data-name="Newsletter"
              id={_utils.cx(_styles, "wf-form-Newsletter")}
              method="get"
              name="wf-form-Newsletter"
            >
              <Block tag="div">
                <FormTextInput
                  autoFocus={false}
                  className={_utils.cx(_styles, "new-blog-email-field")}
                  data-name="Email 2"
                  disabled={false}
                  id={_utils.cx(_styles, "email-2")}
                  maxLength={256}
                  name="email-2"
                  placeholder="Enter your email"
                  required={true}
                  type="email"
                />
              </Block>
              <FormButton
                className={_utils.cx(_styles, "submit-button-2")}
                data-wait="Please wait..."
                type="submit"
                value="Get started"
              />
            </FormForm>
            <FormSuccessMessage>
              <Block tag="div">
                {"Thank you! Your submission has been received!"}
              </Block>
            </FormSuccessMessage>
            <FormErrorMessage>
              <Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </Block>
            </FormErrorMessage>
          </FormWrapper>
        </Block>
      </Block>
    </_Component>
  );
}
