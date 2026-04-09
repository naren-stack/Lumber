"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import Grid from "./_Builtin/Grid";
import Heading from "./_Builtin/Heading";
import Image from "./_Builtin/Image";
import NotSupported from "./_Builtin/NotSupported";
import Span from "./_Builtin/Span";
import TabsContent from "./_Builtin/TabsContent";
import TabsLink from "./_Builtin/TabsLink";
import TabsMenu from "./_Builtin/TabsMenu";
import TabsPane from "./_Builtin/TabsPane";
import TabsWrapper from "./_Builtin/TabsWrapper";
import * as _interactions from "./interactions";
import { ArrowLearn } from "./ArrowLearn";
import { ArrowRunCta } from "./ArrowRunCta";

const _interactionsData = JSON.parse(
  '{"events":{"e-3613":{"id":"e-3613","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-172","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3614"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68386384a0c8c41df298c6a1|a76db150-085e-8595-1b6a-0ddd9a33228d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68386384a0c8c41df298c6a1|a76db150-085e-8595-1b6a-0ddd9a33228d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748525943581},"e-3614":{"id":"e-3614","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-175","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3613"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68386384a0c8c41df298c6a1|a76db150-085e-8595-1b6a-0ddd9a33228d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68386384a0c8c41df298c6a1|a76db150-085e-8595-1b6a-0ddd9a33228d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748525943581}},"actionLists":{"a-172":{"id":"a-172","title":"Scheduler-word-highlighter","actionItemGroups":[{"actionItems":[{"id":"a-172-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":2000,"target":{"selector":".scheduler-highlighter","selectorGuids":["85f6c6e4-c31b-83e7-1c25-0dd3ae1bed8b"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-172-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":4000,"easing":"outQuart","duration":2000,"target":{"selector":".scheduler-highlighter","selectorGuids":["85f6c6e4-c31b-83e7-1c25-0dd3ae1bed8b"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-172-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":4000,"easing":"outQuart","duration":2000,"target":{"selector":".scheduler-highlighter","selectorGuids":["85f6c6e4-c31b-83e7-1c25-0dd3ae1bed8b"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1720010431667},"a-175":{"id":"a-175","title":"Scheduler-word-RESET","actionItemGroups":[{"actionItems":[{"id":"a-175-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"selector":".scheduler-highlighter","selectorGuids":["85f6c6e4-c31b-83e7-1c25-0dd3ae1bed8b"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1720010431667}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ProductTabs({ as: _Component = TabsWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "tabs-2", "n")}
      current="HR"
      easing="ease"
      fadeIn={300}
      fadeOut={100}
    >
      <TabsMenu className={_utils.cx(_styles, "tabs-menu-2", "n")} tag="div">
        <TabsLink
          block="inline"
          className={_utils.cx(_styles, "tab-link--products")}
          data-w-tab="HR"
        >
          <Block tag="div">{"HR"}</Block>
        </TabsLink>
        <TabsLink
          block="inline"
          className={_utils.cx(_styles, "tab-link--products")}
          data-w-tab="Scheduling"
        >
          <Block tag="div">{"Scheduling"}</Block>
        </TabsLink>
        <TabsLink
          block="inline"
          className={_utils.cx(_styles, "tab-link--products", "tab-link-tab-1")}
          data-w-tab="Time Tracking"
        >
          <Block tag="div">{"Time Tracking"}</Block>
        </TabsLink>
        <TabsLink
          block="inline"
          className={_utils.cx(_styles, "tab-link--products")}
          data-w-tab="Payroll"
        >
          <Block tag="div">{"Payroll"}</Block>
        </TabsLink>
        <TabsLink
          block="inline"
          className={_utils.cx(_styles, "tab-link--products")}
          data-w-tab="Benefits"
        >
          <Block tag="div">{"Benefits"}</Block>
        </TabsLink>
      </TabsMenu>
      <TabsContent tag="div">
        <TabsPane data-w-tab="HR" tag="div">
          <Grid
            className={_utils.cx(_styles, "grid-2-1", "_1-1--fr")}
            tag="div"
          >
            <Block
              className={_utils.cx(_styles, "content-left-aligned")}
              id={_utils.cx(
                _styles,
                "w-node-_784a93a6-181e-130e-6c84-f4e402e13523-02e1350f"
              )}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, "row", "is-vertical", "gap-24")}
                id={_utils.cx(
                  _styles,
                  "w-node-_784a93a6-181e-130e-6c84-f4e402e13524-02e1350f"
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "row", "is-vertical", "gap-8")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(
                      _styles,
                      "sub-title-18px",
                      "semibold",
                      "n"
                    )}
                    tag="div"
                  >
                    {"Construction HR Software"}
                  </Block>
                  <Block
                    className={_utils.cx(_styles, "h2-content-holder")}
                    tag="div"
                  >
                    <Heading
                      className={_utils.cx(
                        _styles,
                        "title-30px",
                        "semibold",
                        "max-wd_430",
                        "n"
                      )}
                      tag="h2"
                    >
                      {"Get "}
                      <Span
                        className={_utils.cx(
                          _styles,
                          "title-36px",
                          "extra-bold",
                          "n"
                        )}
                      >
                        {"HIRING & ONBOARDING"}
                      </Span>
                      {" done right with Lumber HR"}
                    </Heading>
                  </Block>
                </Block>
                <Block
                  className={_utils.cx(_styles, "row", "is-vertical", "gap-16")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {
                        "Manage all HR functions, including employee records, time tracking, payroll, and benefits, in one place."
                      }
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12",
                      "grid"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {
                        "Adhere to labor laws and regulations, including wage and hour laws, OSHA standards, and discrimination laws."
                      }
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {
                        "Empower employees to access and manage their HR information, such as time off requests, benefits enrollment, and pay stubs."
                      }
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block className={_utils.cx(_styles, "button-holder")} tag="div">
                <ArrowRunCta
                  link={{
                    href: "#",
                  }}
                  text="Book a Demo"
                />
                <ArrowLearn
                  link={{
                    href: "#",
                  }}
                />
              </Block>
            </Block>
            <Image
              alt="HR image"
              height="auto"
              id={_utils.cx(
                _styles,
                "w-node-_784a93a6-181e-130e-6c84-f4e402e1353f-02e1350f"
              )}
              loading="lazy"
              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66d847f2a2ae187da8a733cb_HR%20image.avif"
              width="552"
            />
            <NotSupported _atom="Animation" />
          </Grid>
        </TabsPane>
        <TabsPane data-w-tab="Scheduling" tag="div">
          <Grid
            className={_utils.cx(_styles, "grid-2-1", "_1-1--fr")}
            tag="div"
          >
            <Block
              className={_utils.cx(_styles, "content-left-aligned")}
              id={_utils.cx(
                _styles,
                "w-node-_784a93a6-181e-130e-6c84-f4e402e13543-02e1350f"
              )}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, "row", "is-vertical", "gap-24")}
                id={_utils.cx(
                  _styles,
                  "w-node-_784a93a6-181e-130e-6c84-f4e402e13544-02e1350f"
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "row", "is-vertical", "gap-8")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(
                      _styles,
                      "sub-title-18px",
                      "semibold",
                      "n"
                    )}
                    tag="div"
                  >
                    {"Construction Job Scheduling Software"}
                  </Block>
                  <Block
                    className={_utils.cx(_styles, "h2-content-holder")}
                    tag="div"
                  >
                    <Heading
                      className={_utils.cx(
                        _styles,
                        "title-30px",
                        "semibold",
                        "max-wd_430",
                        "n"
                      )}
                      tag="h2"
                    >
                      {"Get more "}
                      <Span
                        className={_utils.cx(
                          _styles,
                          "title-36px",
                          "extra-bold",
                          "n"
                        )}
                      >
                        {"ORGANIZED "}
                      </Span>
                      {"with Lumber Scheduler"}
                    </Heading>
                  </Block>
                </Block>
                <Block
                  className={_utils.cx(_styles, "row", "is-vertical", "gap-16")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {
                        "Effortlessly share schedules and assignments with your entire team."
                      }
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12",
                      "grid"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {
                        "Experience seamless teamwork with everyone on the same page."
                      }
                      <br />
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {
                        "Keep your field crews informed with instant updates to tasks and schedules."
                      }
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block className={_utils.cx(_styles, "button-holder")} tag="div">
                <ArrowRunCta
                  link={{
                    href: "#",
                  }}
                  text="Book a Demo"
                />
                <ArrowLearn
                  link={{
                    href: "#",
                  }}
                />
              </Block>
            </Block>
            <NotSupported _atom="Animation" />
            <NotSupported _atom="Animation" />
          </Grid>
        </TabsPane>
        <TabsPane data-w-tab="Time Tracking" tag="div">
          <Grid
            className={_utils.cx(_styles, "grid-2-1", "_1-1--fr")}
            tag="div"
          >
            <Block
              className={_utils.cx(_styles, "content-left-aligned")}
              id={_utils.cx(
                _styles,
                "w-node-_784a93a6-181e-130e-6c84-f4e402e13564-02e1350f"
              )}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, "row", "is-vertical", "gap-24")}
                id={_utils.cx(
                  _styles,
                  "w-node-_784a93a6-181e-130e-6c84-f4e402e13565-02e1350f"
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "row", "is-vertical", "gap-8")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(
                      _styles,
                      "sub-title-18px",
                      "semibold",
                      "n"
                    )}
                    tag="div"
                  >
                    {"Construction Time Tracking Software"}
                  </Block>
                  <Block
                    className={_utils.cx(_styles, "h2-content-holder")}
                    tag="div"
                  >
                    <Heading
                      className={_utils.cx(
                        _styles,
                        "title-30px",
                        "semibold",
                        "max-wd_430",
                        "n"
                      )}
                      tag="h2"
                    >
                      {"Get more "}
                      <Span
                        className={_utils.cx(
                          _styles,
                          "title-36px",
                          "extra-bold",
                          "n"
                        )}
                      >
                        {"EFFICIENT"}
                      </Span>
                      {" with Lumber Time Tracking "}
                    </Heading>
                  </Block>
                </Block>
                <Block
                  className={_utils.cx(_styles, "row", "is-vertical", "gap-16")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {"Integrate with 20+ popular payroll applications."}
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {"Submit timesheets in Spanish."}
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {"Track your projects in real-time and geo-fencing."}
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {"Communicate with your team on the site."}
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block className={_utils.cx(_styles, "button-holder")} tag="div">
                <ArrowRunCta
                  link={{
                    href: "#",
                  }}
                  text="Book a Demo"
                />
                <ArrowLearn
                  link={{
                    href: "#",
                  }}
                />
              </Block>
            </Block>
            <NotSupported _atom="Animation" />
            <NotSupported _atom="Animation" />
          </Grid>
        </TabsPane>
        <TabsPane data-w-tab="Payroll" tag="div">
          <Grid
            className={_utils.cx(_styles, "grid-2-1", "_1-1--fr")}
            tag="div"
          >
            <Block
              className={_utils.cx(_styles, "content-left-aligned")}
              id={_utils.cx(
                _styles,
                "w-node-_784a93a6-181e-130e-6c84-f4e402e13588-02e1350f"
              )}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, "row", "is-vertical", "gap-24")}
                id={_utils.cx(
                  _styles,
                  "w-node-_784a93a6-181e-130e-6c84-f4e402e13589-02e1350f"
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "row", "is-vertical", "gap-8")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(
                      _styles,
                      "sub-title-18px",
                      "semibold",
                      "n"
                    )}
                    tag="div"
                  >
                    {"Construction Payroll Software"}
                  </Block>
                  <Block
                    className={_utils.cx(_styles, "h2-content-holder")}
                    tag="div"
                  >
                    <Heading
                      className={_utils.cx(
                        _styles,
                        "title-30px",
                        "semibold",
                        "max-wd_430",
                        "n"
                      )}
                      tag="h2"
                    >
                      {"Get more "}
                      <Span
                        className={_utils.cx(
                          _styles,
                          "title-36px",
                          "extra-bold",
                          "n"
                        )}
                      >
                        {"PRODUCTIVE"}
                      </Span>
                      {" with Lumber Payroll "}
                    </Heading>
                  </Block>
                </Block>
                <Block
                  className={_utils.cx(_styles, "row", "is-vertical", "gap-16")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {"Streamline, automate, and succeed."}
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {"Minimize errors and maximize productivity."}
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {"Pay your crew securely through Lumber."}
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block className={_utils.cx(_styles, "button-holder")} tag="div">
                <ArrowRunCta
                  link={{
                    href: "#",
                  }}
                  text="Book a Demo"
                />
                <ArrowLearn
                  link={{
                    href: "#",
                  }}
                />
              </Block>
            </Block>
            <NotSupported _atom="Animation" />
            <NotSupported _atom="Animation" />
          </Grid>
        </TabsPane>
        <TabsPane data-w-tab="Benefits" tag="div">
          <Grid
            className={_utils.cx(_styles, "grid-2-1", "_1-1--fr")}
            tag="div"
          >
            <Block
              className={_utils.cx(_styles, "content-left-aligned")}
              id={_utils.cx(
                _styles,
                "w-node-_784a93a6-181e-130e-6c84-f4e402e135a8-02e1350f"
              )}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, "row", "is-vertical", "gap-24")}
                id={_utils.cx(
                  _styles,
                  "w-node-_784a93a6-181e-130e-6c84-f4e402e135a9-02e1350f"
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "row", "is-vertical", "gap-8")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(
                      _styles,
                      "sub-title-18px",
                      "semibold",
                      "n"
                    )}
                    tag="div"
                  >
                    {"Construction Benefits Management"}
                  </Block>
                  <Block
                    className={_utils.cx(_styles, "h2-content-holder")}
                    tag="div"
                  >
                    <Heading
                      className={_utils.cx(
                        _styles,
                        "title-30px",
                        "semibold",
                        "max-wd_430",
                        "n"
                      )}
                      tag="h2"
                    >
                      {"Get more "}
                      <Span
                        className={_utils.cx(
                          _styles,
                          "title-36px",
                          "extra-bold",
                          "n"
                        )}
                      >
                        {"COMPREHENSIVE COVERAGE"}
                      </Span>
                      {" with Lumber Benefits"}
                    </Heading>
                    <Block
                      className={_utils.cx(_styles, "h2-highh-lighter")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(_styles, "scheduler-highlighter")}
                        tag="div"
                      />
                      <Heading
                        className={_utils.cx(
                          _styles,
                          "title-30px",
                          "semibold",
                          "max-wd_430",
                          "highlighted",
                          "b"
                        )}
                        tag="h2"
                      />
                    </Block>
                  </Block>
                </Block>
                <Block
                  className={_utils.cx(_styles, "row", "is-vertical", "gap-16")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {
                        "Streamline your benefits administration with Lumber's experienced benefits advisors."
                      }
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12",
                      "grid"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {
                        "Ensure compliance with ever-changing regulations and industry standards."
                      }
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(
                      _styles,
                      "row",
                      "align_left-_top",
                      "gap-12"
                    )}
                    tag="div"
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "new-green-tick")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66bb42df8bd8290ed0c4caa5_nCheck%20icon.webp"
                      width="28"
                    />
                    <Block
                      className={_utils.cx(_styles, "text-18px")}
                      tag="div"
                    >
                      {
                        "Optimize your benefits strategy to attract and retain top talent."
                      }
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block className={_utils.cx(_styles, "button-holder")} tag="div">
                <ArrowRunCta
                  link={{
                    href: "#",
                  }}
                  text="Book a Demo"
                />
                <ArrowLearn
                  link={{
                    href: "#",
                  }}
                />
              </Block>
            </Block>
            <Image
              alt="Benefits image"
              height="auto"
              id={_utils.cx(
                _styles,
                "w-node-_784a93a6-181e-130e-6c84-f4e402e135c7-02e1350f"
              )}
              loading="lazy"
              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66d84b31f75bd71b8916dbb8_Benefits%20image.webp"
              width="574.5"
            />
            <NotSupported _atom="Animation" />
          </Grid>
        </TabsPane>
      </TabsContent>
    </_Component>
  );
}
