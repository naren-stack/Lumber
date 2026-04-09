"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import Heading from "./_Builtin/Heading";
import Image from "./_Builtin/Image";
import Link from "./_Builtin/Link";
import Paragraph from "./_Builtin/Paragraph";
import Section from "./_Builtin/Section";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-91":{"id":"e-91","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-92"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq-card","originalId":"84c9f934-bd8e-e534-3369-4be6a294f7a9","appliesTo":"CLASS"},"targets":[{"selector":".faq-card","originalId":"f27211bc-2f80-2952-ec0f-93033f47c39c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649107911526},"e-92":{"id":"e-92","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-91"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq-card","originalId":"84c9f934-bd8e-e534-3369-4be6a294f7a9","appliesTo":"CLASS"},"targets":[{"selector":".faq-card","originalId":"f27211bc-2f80-2952-ec0f-93033f47c39c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649107911528},"e-578":{"id":"e-578","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-116","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-579"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq-card","originalId":"6628d79054b6e013ddab6d08|bb5b167c-f540-6cbb-ad31-819d477828d8","appliesTo":"CLASS"},"targets":[{"selector":".faq-card","originalId":"6628d79054b6e013ddab6d08|bb5b167c-f540-6cbb-ad31-819d477828d8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713956140657},"e-579":{"id":"e-579","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-117","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-578"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq-card","originalId":"6628d79054b6e013ddab6d08|bb5b167c-f540-6cbb-ad31-819d477828d8","appliesTo":"CLASS"},"targets":[{"selector":".faq-card","originalId":"6628d79054b6e013ddab6d08|bb5b167c-f540-6cbb-ad31-819d477828d8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713956140657}},"actionLists":{"a-34":{"id":"a-34","title":"FAQs | Open","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-34-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"value":"none"}},{"id":"a-34-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-34-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"value":"block"}}]},{"actionItems":[{"id":"a-34-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-34-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716e"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-34-n-8","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-wrapper","selectorGuids":["e4baaa83-8211-9467-9490-f301cf395466"]},"globalSwatchId":"956e99e9","rValue":116,"bValue":61,"gValue":233,"aValue":1}},{"id":"a-34-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"value":1,"unit":""}},{"id":"a-34-n-9","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faq-card","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716a"]},"globalSwatchId":"956e99e9","rValue":116,"bValue":61,"gValue":233,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1638549681280},"a-35":{"id":"a-35","title":"FAQs | Close","actionItemGroups":[{"actionItems":[{"id":"a-35-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-35-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"selector":".faq-icon","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716e"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-35-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"value":0,"unit":""}},{"id":"a-35-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-wrapper","selectorGuids":["e4baaa83-8211-9467-9490-f301cf395466"]},"globalSwatchId":"","rValue":242,"bValue":242,"gValue":242,"aValue":1}},{"id":"a-35-n-7","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-card","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]},{"actionItems":[{"id":"a-35-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outExpo","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1638550132964},"a-116":{"id":"a-116","title":"FAQs | Open 2","actionItemGroups":[{"actionItems":[{"id":"a-116-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-116-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"value":"none"}},{"id":"a-116-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-116-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"value":"block"}}]},{"actionItems":[{"id":"a-116-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-116-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716e"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-116-n-7","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-wrapper","selectorGuids":["e4baaa83-8211-9467-9490-f301cf395466"]},"globalSwatchId":"956e99e9","rValue":116,"bValue":61,"gValue":233,"aValue":1}},{"id":"a-116-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"value":1,"unit":""}},{"id":"a-116-n-9","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faq-card","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716a"]},"globalSwatchId":"956e99e9","rValue":116,"bValue":61,"gValue":233,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1638549681280},"a-117":{"id":"a-117","title":"FAQs | Close 2","actionItemGroups":[{"actionItems":[{"id":"a-117-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-117-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"selector":".faq-icon","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716e"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-117-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"value":0,"unit":""}},{"id":"a-117-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-wrapper","selectorGuids":["e4baaa83-8211-9467-9490-f301cf395466"]},"globalSwatchId":"","rValue":242,"bValue":242,"gValue":242,"aValue":1}},{"id":"a-117-n-5","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-card","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]},{"actionItems":[{"id":"a-117-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outExpo","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".faqs-answer-wrap","selectorGuids":["123d5bce-b9c6-0227-0168-499ae68e716f"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1638550132964}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FaqPayroll({ as: _Component = Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_lumber")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <Block className={_utils.cx(_styles, "content-holder")} tag="div">
        <Heading className={_utils.cx(_styles, "h2")} tag="h2">
          {"Frequently Asked Questions"}
        </Heading>
      </Block>
      <Block className={_utils.cx(_styles, "faqs-wrapper")} tag="div">
        <Block className={_utils.cx(_styles, "faqs-main-container")} tag="div">
          <Block className={_utils.cx(_styles, "faq-wrapper-2")} tag="div">
            <Block className={_utils.cx(_styles, "faq-card")} tag="div">
              <Block
                className={_utils.cx(_styles, "faqs-question-container")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "faqs-question-wrapper")}
                  tag="div"
                >
                  <Heading
                    className={_utils.cx(_styles, "faqs-question")}
                    tag="h3"
                  >
                    {
                      "What’s different about Lumber Payroll and why should I start using it?"
                    }
                    <br />
                  </Heading>
                  <Block
                    className={_utils.cx(_styles, "faq-icon-wrapper")}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "faq-icon")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ef2656c9c2a4be3cd7e1ae_faq%20icon.svg"
                      width="auto"
                    />
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "faqs-answer-wrap")}
                tag="div"
              >
                <Paragraph className={_utils.cx(_styles, "faqs-content")}>
                  {
                    "Lumber Payroll is custom-built for the construction industry. From calculating precise wages to paying the workforce, Lumber Payroll supports end-to-end process, unlike other payroll applications in the market."
                  }
                </Paragraph>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "faq-card")} tag="div">
              <Block
                className={_utils.cx(_styles, "faqs-question-container")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "faqs-question-wrapper")}
                  tag="div"
                >
                  <Heading
                    className={_utils.cx(_styles, "faqs-question")}
                    tag="h3"
                  >
                    {
                      "How is construction payroll different from regular payroll?"
                    }
                    <br />
                  </Heading>
                  <Block
                    className={_utils.cx(_styles, "faq-icon-wrapper")}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "faq-icon")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ef2656c9c2a4be3cd7e1ae_faq%20icon.svg"
                      width="auto"
                    />
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "faqs-answer-wrap")}
                tag="div"
              >
                <Paragraph className={_utils.cx(_styles, "faqs-content")}>
                  {
                    "Construction payroll involves unique challenges such as handling varying job locations, multiple job roles, prevailing wage rates, union requirements, and complex tax implications specific to the construction industry."
                  }
                </Paragraph>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "faq-card")} tag="div">
              <Block
                className={_utils.cx(_styles, "faqs-question-container")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "faqs-question-wrapper")}
                  tag="div"
                >
                  <Heading
                    className={_utils.cx(_styles, "faqs-question")}
                    tag="h3"
                  >
                    {"What are prevailing wage rates?"}
                    <br />
                  </Heading>
                  <Block
                    className={_utils.cx(_styles, "faq-icon-wrapper")}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "faq-icon")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ef2656c9c2a4be3cd7e1ae_faq%20icon.svg"
                      width="auto"
                    />
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "faqs-answer-wrap")}
                tag="div"
              >
                <Paragraph className={_utils.cx(_styles, "faqs-content")}>
                  {
                    "Prevailing wage rates are predetermined hourly wages set by government agencies for various construction job roles in a specific geographical area. Contractors and subcontractors are required to pay these rates on government-funded construction projects."
                  }
                </Paragraph>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "faq-card")} tag="div">
              <Block
                className={_utils.cx(_styles, "faqs-question-container")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "faqs-question-wrapper")}
                  tag="div"
                >
                  <Heading
                    className={_utils.cx(_styles, "faqs-question")}
                    tag="h3"
                  >
                    {"What is certified payroll?"}
                    <br />
                  </Heading>
                  <Block
                    className={_utils.cx(_styles, "faq-icon-wrapper")}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "faq-icon")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ef2656c9c2a4be3cd7e1ae_faq%20icon.svg"
                      width="auto"
                    />
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "faqs-answer-wrap")}
                tag="div"
              >
                <Paragraph className={_utils.cx(_styles, "faqs-content")}>
                  {
                    "Certified payroll is a detailed report submitted by contractors and subcontractors on government-funded projects. It provides information about employee wages, hours worked, job classifications, and other relevant data to ensure compliance with prevailing wage laws."
                  }
                </Paragraph>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "faq-card")} tag="div">
              <Block
                className={_utils.cx(_styles, "faqs-question-container")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "faqs-question-wrapper")}
                  tag="div"
                >
                  <Heading
                    className={_utils.cx(_styles, "faqs-question")}
                    tag="h3"
                  >
                    {"How do construction companies handle overtime pay?"}
                    <br />
                  </Heading>
                  <Block
                    className={_utils.cx(_styles, "faq-icon-wrapper")}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "faq-icon")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ef2656c9c2a4be3cd7e1ae_faq%20icon.svg"
                      width="auto"
                    />
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "faqs-answer-wrap")}
                tag="div"
              >
                <Paragraph className={_utils.cx(_styles, "faqs-content")}>
                  {
                    "Overtime pay is typically calculated as 1.5 times the regular hourly wage for hours worked beyond a standard 40-hour workweek. Some jurisdictions might have different rules, so it's important to be aware of local labor laws."
                  }
                </Paragraph>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "faq-card")} tag="div">
              <Block
                className={_utils.cx(_styles, "faqs-question-container")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "faqs-question-wrapper")}
                  tag="div"
                >
                  <Heading
                    className={_utils.cx(_styles, "faqs-question")}
                    tag="h3"
                  >
                    {"What is a union payroll?"}
                    <br />
                  </Heading>
                  <Block
                    className={_utils.cx(_styles, "faq-icon-wrapper")}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "faq-icon")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ef2656c9c2a4be3cd7e1ae_faq%20icon.svg"
                      width="auto"
                    />
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "faqs-answer-wrap")}
                tag="div"
              >
                <Paragraph className={_utils.cx(_styles, "faqs-content")}>
                  {
                    "A union payroll pertains to construction workers who are part of a labor union. Union contracts often have specific pay rates, benefits, and deductions that need to be accurately managed and processed."
                  }
                </Paragraph>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "faq-card")} tag="div">
              <Block
                className={_utils.cx(_styles, "faqs-question-container")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "faqs-question-wrapper")}
                  tag="div"
                >
                  <Heading
                    className={_utils.cx(_styles, "faqs-question")}
                    tag="h3"
                  >
                    {"How do I account for deductions in construction payroll?"}
                    <br />
                  </Heading>
                  <Block
                    className={_utils.cx(_styles, "faq-icon-wrapper")}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "faq-icon")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ef2656c9c2a4be3cd7e1ae_faq%20icon.svg"
                      width="auto"
                    />
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "faqs-answer-wrap")}
                tag="div"
              >
                <Paragraph className={_utils.cx(_styles, "faqs-content")}>
                  {
                    "Deductions in construction payroll can include taxes, insurance premiums, retirement contributions, union dues, and other benefits. These deductions need to be accurately calculated and withheld from employees' wages."
                  }
                </Paragraph>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "faq-card")} tag="div">
              <Block
                className={_utils.cx(_styles, "faqs-question-container")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "faqs-question-wrapper")}
                  tag="div"
                >
                  <Heading
                    className={_utils.cx(_styles, "faqs-question")}
                    tag="h3"
                  >
                    {"How do I ensure compliance with tax regulations?"}
                    <br />
                  </Heading>
                  <Block
                    className={_utils.cx(_styles, "faq-icon-wrapper")}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "faq-icon")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ef2656c9c2a4be3cd7e1ae_faq%20icon.svg"
                      width="auto"
                    />
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "faqs-answer-wrap")}
                tag="div"
              >
                <Paragraph className={_utils.cx(_styles, "faqs-content")}>
                  {
                    "It’s important to stay informed about federal, state, and local tax regulations that pertain to the construction industry. Consulting with tax professionals or using specialized payroll software can help ensure accurate tax calculations and reporting."
                  }
                </Paragraph>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "faq-card")} tag="div">
              <Block
                className={_utils.cx(_styles, "faqs-question-container")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "faqs-question-wrapper")}
                  tag="div"
                >
                  <Heading
                    className={_utils.cx(_styles, "faqs-question")}
                    tag="h3"
                  >
                    {"How do I handle payroll for subcontractors?"}
                    <br />
                  </Heading>
                  <Block
                    className={_utils.cx(_styles, "faq-icon-wrapper")}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "faq-icon")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ef2656c9c2a4be3cd7e1ae_faq%20icon.svg"
                      width="auto"
                    />
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "faqs-answer-wrap")}
                tag="div"
              >
                <Paragraph className={_utils.cx(_styles, "faqs-content")}>
                  {
                    "When working with subcontractors, it's important to have clear agreements in place regarding payment terms. Some companies choose to handle subcontractor payments separately, while others integrate them into their overall payroll process."
                  }
                </Paragraph>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "faq-card")} tag="div">
              <Block
                className={_utils.cx(_styles, "faqs-question-container")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "faqs-question-wrapper")}
                  tag="div"
                >
                  <Heading
                    className={_utils.cx(_styles, "faqs-question")}
                    tag="h3"
                  >
                    {
                      "What records should I maintain for the construction payroll?"
                    }
                    <br />
                  </Heading>
                  <Block
                    className={_utils.cx(_styles, "faq-icon-wrapper")}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "faq-icon")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ef2656c9c2a4be3cd7e1ae_faq%20icon.svg"
                      width="auto"
                    />
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "faqs-answer-wrap")}
                tag="div"
              >
                <Paragraph className={_utils.cx(_styles, "faqs-content")}>
                  {
                    "You will need to maintain records of employee information, time and attendance records, wage rates, deductions, benefits, tax forms, and certified payroll reports for auditing and compliance purposes."
                  }
                </Paragraph>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "faq-card")} tag="div">
              <Block
                className={_utils.cx(_styles, "faqs-question-container")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "faqs-question-wrapper")}
                  tag="div"
                >
                  <Heading
                    className={_utils.cx(_styles, "faqs-question")}
                    tag="h3"
                  >
                    {"What happens if I make mistakes in processing payroll?"}
                    <br />
                  </Heading>
                  <Block
                    className={_utils.cx(_styles, "faq-icon-wrapper")}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "faq-icon")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ef2656c9c2a4be3cd7e1ae_faq%20icon.svg"
                      width="auto"
                    />
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "faqs-answer-wrap")}
                tag="div"
              >
                <Paragraph className={_utils.cx(_styles, "faqs-content")}>
                  {
                    "Payroll mistakes can lead to legal and financial consequences. It's essential to rectify errors promptly and work with legal or accounting professionals if necessary. You can also use construction payroll applications like Lumber to ensure error-free calculations in payments and taxes."
                  }
                </Paragraph>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "faq-card")} tag="div">
              <Block
                className={_utils.cx(_styles, "faqs-question-container")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "faqs-question-wrapper")}
                  tag="div"
                >
                  <Heading
                    className={_utils.cx(_styles, "faqs-question")}
                    tag="h3"
                  >
                    {
                      "Does Lumber Payroll integrate with time tracking applications?"
                    }
                    <br />
                  </Heading>
                  <Block
                    className={_utils.cx(_styles, "faq-icon-wrapper")}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "faq-icon")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ef2656c9c2a4be3cd7e1ae_faq%20icon.svg"
                      width="auto"
                    />
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "faqs-answer-wrap")}
                tag="div"
              >
                <Paragraph className={_utils.cx(_styles, "faqs-content")}>
                  {
                    "Yes, Lumber Payroll can be integrated with Lumber’s Time Tracking or any other third-party application also."
                  }
                </Paragraph>
              </Block>
            </Block>
          </Block>
        </Block>
        <Heading className={_utils.cx(_styles, "faq-subheading")} tag="h4">
          {"Have more questions?"}
        </Heading>
        <Block className={_utils.cx(_styles, "faq-paragraph")} tag="div">
          <Link
            block=""
            button={false}
            options={{
              href: "#",
            }}
          >
            {"Contact us"}
          </Link>
          {" here so we can help."}
        </Block>
      </Block>
    </_Component>
  );
}
