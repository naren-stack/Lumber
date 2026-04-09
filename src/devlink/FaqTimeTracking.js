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

export function FaqTimeTracking({ as: _Component = Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_lumber", "faq")}
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
                    {"Why should I use Lumber Time Tracking to log work hours?"}
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
                    "Lumber Time Tracking is purpose-built for the construction industry and your workforce can start using it almost immediately without tweaking. The interface is simple enough that it requires zero onboarding. Lumber Time Tracking integrates seamlessly with your payroll which makes it easy for you to calculate accurate work hours and achieve compliance."
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
                      "Can I track the work hours of multiple construction projects simultaneously?"
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
                    "Yes, tracking multiple projects simultaneously is possible."
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
                      "Is Lumber Time Tracking compatible with various devices, such as smartphones and tablets, for remote employee work hour tracking?"
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
                    "Yes, Lumber Time Tracking can also be used through tablets."
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
                      "How does Lumber Time Tracking help prevent inaccuracies and disputes in construction employee work hour records?"
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
                    "Time tracking plays a crucial role in preventing inaccuracies and disputes in construction employee work hour records by providing a transparent and reliable way to record and verify the hours worked by each employee."
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
                    {"How does Lumber Time Tracking help achieve compliance?"}
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
                    "Lumber is built with compliance at its core. It can help maintain regulatory compliance for Prevailing Wages, Union Rates, Contracts, Insurance, SafetyRegulations, OSHA, etc."
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
                      "Can Lumber Time Tracking help us adhere to labor laws and regulations concerning construction employee work hours?"
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
                    "Lumber Time Tracking can help you adhere to labor laws and regulations. You can maintain accurate work hours, and overtime accrued, and also log the break times of each employee. It can also be used to send notifications and alerts when an employee crosses the threshold for working a certain number of man hours and helps the contractor to stay within the mandated rules."
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
                      "Can I integrate Lumber Time Tracking with our existing payroll system for easy and accurate salary calculation?"
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
                    "Absolutely! Lumber Time Tracking can be easily integrated with your existing payroll applications. Check our integrations page for more information."
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
                      "Can supervisors or managers make manual adjustments to the work records of employees within Lumber Time Tracking?"
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
                  {"Yes."}
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
                      "Can supervisors or managers submit timesheets on behalf of their workforce?"
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
                    "Yes. Lumber Time Tracking has Manager Mode, which allows the managers to submit timesheets on behalf of the workforce."
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
                      "Does Lumber support multiple languages? Can the workforce submit timesheets in languages other than English?"
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
                    "Yes. Lumber has multi-language capabilities. Your workforce can submit timesheets in Spanish language too."
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
                      "Is there a limit to the number of construction employees that can be tracked using Lumber Time Tracking?"
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
                  {"No, Lumber supports unlimited users."}
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
                      "Can I customize the categories or job codes within Lumber Time Tracking to match our specific construction projects and tasks?"
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
                    "Yes. You can customize the job codes and project codes in Lumber."
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
                      "What kind of customer support or assistance is available if I encounter any issues while using Lumber Time Tracking for construction employee work hours?"
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
                    "You will be assigned a dedicated customer success manager. You can also email "
                  }
                  <Link
                    block=""
                    button={false}
                    options={{
                      href: "mailto:support@lumberfi.com",
                    }}
                  >
                    {"support@lumberfi.com"}
                  </Link>
                  {". We will respond to you within one business day."}
                  {""}
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
