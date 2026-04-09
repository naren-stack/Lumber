"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import Grid from "./_Builtin/Grid";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Image from "./_Builtin/Image";
import Link from "./_Builtin/Link";
import NavbarBrand from "./_Builtin/NavbarBrand";

export function NewFooter({ as: _Component = Block }) {
  return (
    <_Component className={_utils.cx(_styles, "new-footer")} tag="div">
      <Block className={_utils.cx(_styles, "footer11_component")} tag="footer">
        <Block className={_utils.cx(_styles, "container-large")} tag="div">
          <Grid
            className={_utils.cx(_styles, "footer11_top-wrapper")}
            tag="div"
          >
            <Block
              className={_utils.cx(_styles, "footer11_left-wrapper")}
              tag="div"
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "margin-bottom",
                  "margin-medium",
                  "footer-logo"
                )}
                tag="div"
              >
                <NavbarBrand
                  className={_utils.cx(_styles, "footer11_logo-link-copy")}
                  options={{
                    href: "#",
                  }}
                >
                  <Image
                    alt=""
                    height="auto"
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64ed8fa377a32a29681a9225_Logo.webp"
                    width="auto"
                  />
                </NavbarBrand>
                <NavbarBrand
                  className={_utils.cx(_styles, "footer11_logo-link-copy")}
                  options={{
                    href: "#",
                  }}
                >
                  <Image
                    alt=""
                    height="auto"
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/65cb62b408b2c569fcc3799b_footer%20women%20badge.svg"
                    width="auto"
                  />
                </NavbarBrand>
              </Block>
              <Block
                className={_utils.cx(_styles, "margin-bottom", "margin-medium")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "footer11_details-wrapper")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-small"
                    )}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, "footer-last-text")}
                      tag="div"
                    >
                      {
                        "Lumber is an all-in-one construction workforce management platform that seamlessly streamlines payroll, time tracking, safety, compliance, field productivity, rewards, and recognition for building contractors."
                      }
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
            <Grid
              className={_utils.cx(_styles, "footer11_menu-wrapper")}
              tag="div"
            >
              <Block tag="div">
                <Block
                  className={_utils.cx(_styles, "foooter-heading")}
                  tag="div"
                >
                  {"Product"}
                </Block>
                <Block
                  className={_utils.cx(_styles, "footer11_link-list")}
                  tag="div"
                >
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Time Tracking"}
                  </Link>
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Payroll"}
                  </Link>
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Integrations"}
                  </Link>
                </Block>
              </Block>
              <Block tag="div">
                <Block
                  className={_utils.cx(_styles, "foooter-heading")}
                  tag="div"
                >
                  {"Toolkit"}
                </Block>
                <Block
                  className={_utils.cx(_styles, "footer11_link-list")}
                  tag="div"
                >
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Blogs"}
                  </Link>
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Reports & Guides"}
                  </Link>
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link", "hide")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"E-Books & Guides"}
                  </Link>
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Infographics"}
                  </Link>
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Webinars"}
                  </Link>
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Podcasts"}
                  </Link>
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link", "hide")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Webinars"}
                  </Link>
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link", "hide")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Podcasts"}
                  </Link>
                </Block>
              </Block>
              <Block tag="div">
                <Block
                  className={_utils.cx(_styles, "foooter-heading")}
                  tag="div"
                >
                  {"Community"}
                </Block>
                <Block
                  className={_utils.cx(_styles, "footer11_link-list")}
                  tag="div"
                >
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link", "hide")}
                    options={{
                      href: "https://www.facebook.com/groups/6508644522524665",
                      target: "_blank",
                    }}
                  >
                    {"Facebook Community"}
                  </Link>
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link", "hide")}
                    options={{
                      href: "https://www.linkedin.com/groups/14305701/",
                      target: "_blank",
                    }}
                  >
                    {"LinkedIn Community"}
                  </Link>
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Associations"}
                  </Link>
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Ask a Question"}
                  </Link>
                </Block>
              </Block>
              <Block tag="div">
                <Block
                  className={_utils.cx(_styles, "foooter-heading")}
                  tag="div"
                >
                  {"Company"}
                </Block>
                <Block
                  className={_utils.cx(_styles, "footer11_link-list")}
                  tag="div"
                >
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Lumber Story"}
                  </Link>
                  <Link
                    block=""
                    button={false}
                    className={_utils.cx(_styles, "footer11_link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Lumber Newsroom"}
                  </Link>
                </Block>
              </Block>
            </Grid>
            <Grid
              className={_utils.cx(_styles, "footer11_social-list")}
              id={_utils.cx(
                _styles,
                "w-node-_41d4dbea-3adf-f8e3-63f2-f5f0b1e564a9-3b1649ae"
              )}
              tag="div"
            >
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "footer11_social-link-2")}
                options={{
                  href: "https://www.facebook.com/people/Lumber/100095049919475/",
                  target: "_blank",
                }}
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-embed-xsmall-3")}
                  content=""
                  value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22%2012.0611C22%206.50451%2017.5229%202%2012%202C6.47715%202%202%206.50451%202%2012.0611C2%2017.0828%205.65684%2021.2452%2010.4375%2022V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375%207.32296%2011.9305%205.93012%2014.2146%205.93012C15.3088%205.93012%2016.4531%206.12663%2016.4531%206.12663V8.60261H15.1922C13.95%208.60261%2013.5625%209.37822%2013.5625%2010.1739V12.0611H16.3359L15.8926%2014.9694H13.5625V22C18.3432%2021.2452%2022%2017.083%2022%2012.0611Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </Link>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "footer11_social-link-2")}
                options={{
                  href: "https://twitter.com/lumberfi_inc",
                  target: "_blank",
                }}
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-embed-xsmall-3")}
                  content=""
                  value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M17.1761%204H19.9362L13.9061%2010.7774L21%2020H15.4456L11.0951%2014.4066L6.11723%2020H3.35544L9.80517%2012.7508L3%204H8.69545L12.6279%209.11262L17.1761%204ZM16.2073%2018.3754H17.7368L7.86441%205.53928H6.2232L16.2073%2018.3754Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </Link>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "footer11_social-link-2")}
                options={{
                  href: "https://www.instagram.com/lumberfi/",
                  target: "_blank",
                }}
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-embed-xsmall-3")}
                  content=""
                  value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16%203H8C5.23858%203%203%205.23858%203%208V16C3%2018.7614%205.23858%2021%208%2021H16C18.7614%2021%2021%2018.7614%2021%2016V8C21%205.23858%2018.7614%203%2016%203ZM19.25%2016C19.2445%2017.7926%2017.7926%2019.2445%2016%2019.25H8C6.20735%2019.2445%204.75549%2017.7926%204.75%2016V8C4.75549%206.20735%206.20735%204.75549%208%204.75H16C17.7926%204.75549%2019.2445%206.20735%2019.25%208V16ZM16.75%208.25C17.3023%208.25%2017.75%207.80228%2017.75%207.25C17.75%206.69772%2017.3023%206.25%2016.75%206.25C16.1977%206.25%2015.75%206.69772%2015.75%207.25C15.75%207.80228%2016.1977%208.25%2016.75%208.25ZM12%207.5C9.51472%207.5%207.5%209.51472%207.5%2012C7.5%2014.4853%209.51472%2016.5%2012%2016.5C14.4853%2016.5%2016.5%2014.4853%2016.5%2012C16.5027%2010.8057%2016.0294%209.65957%2015.1849%208.81508C14.3404%207.97059%2013.1943%207.49734%2012%207.5ZM9.25%2012C9.25%2013.5188%2010.4812%2014.75%2012%2014.75C13.5188%2014.75%2014.75%2013.5188%2014.75%2012C14.75%2010.4812%2013.5188%209.25%2012%209.25C10.4812%209.25%209.25%2010.4812%209.25%2012Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </Link>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "footer11_social-link-2")}
                options={{
                  href: "https://www.linkedin.com/company/lumberfi/",
                  target: "_blank",
                }}
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-embed-xsmall-3")}
                  content=""
                  value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.5%203C3.67157%203%203%203.67157%203%204.5V19.5C3%2020.3284%203.67157%2021%204.5%2021H19.5C20.3284%2021%2021%2020.3284%2021%2019.5V4.5C21%203.67157%2020.3284%203%2019.5%203H4.5ZM8.52076%207.00272C8.52639%207.95897%207.81061%208.54819%206.96123%208.54397C6.16107%208.53975%205.46357%207.90272%205.46779%207.00413C5.47201%206.15897%206.13998%205.47975%207.00764%205.49944C7.88795%205.51913%208.52639%206.1646%208.52076%207.00272ZM12.2797%209.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217%2017.742%2012.4214%2017.362%2012.4211%2016.9819V16.9818V16.9816V16.9815V16.9812C12.4203%2015.9674%2012.4194%2014.9532%2012.4246%2013.9397C12.426%2013.6936%2012.4372%2013.4377%2012.5005%2013.2028C12.7381%2012.3253%2013.5271%2011.7586%2014.4074%2011.8979C14.9727%2011.9864%2015.3467%2012.3141%2015.5042%2012.8471C15.6013%2013.1803%2015.6449%2013.5389%2015.6491%2013.8863C15.6605%2014.9339%2015.6589%2015.9815%2015.6573%2017.0292V17.0294C15.6567%2017.3992%2015.6561%2017.769%2015.6561%2018.1388V18.3202H18.328V18.1149C18.328%2017.6629%2018.3278%2017.211%2018.3275%2016.7591V16.759V16.7588C18.327%2015.6293%2018.3264%2014.5001%2018.3294%2013.3702C18.3308%2012.8597%2018.276%2012.3563%2018.1508%2011.8627C17.9638%2011.1286%2017.5771%2010.5211%2016.9485%2010.0824C16.5027%209.77019%2016.0133%209.5691%2015.4663%209.5466C15.404%209.54401%2015.3412%209.54062%2015.2781%209.53721L15.2781%209.53721L15.2781%209.53721C14.9984%209.52209%2014.7141%209.50673%2014.4467%209.56066C13.6817%209.71394%2013.0096%2010.0641%2012.5019%2010.6814C12.4429%2010.7522%2012.3852%2010.8241%2012.2991%2010.9314L12.2991%2010.9315L12.2797%2010.9557V9.76176ZM5.68164%2018.3244H8.33242V9.76733H5.68164V18.3244Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </Link>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "footer11_social-link-2")}
                options={{
                  href: "https://www.youtube.com/@LumberFi",
                  target: "_blank",
                }}
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-embed-xsmall-3")}
                  content=""
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22currentColor%22%20class%3D%22bi%20bi-youtube%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M8.051%201.999h.089c.822.003%204.987.033%206.11.335a2.01%202.01%200%200%201%201.415%201.42c.101.38.172.883.22%201.402l.01.104.022.26.008.104c.065.914.073%201.77.074%201.957v.075c-.001.194-.01%201.108-.082%202.06l-.008.105-.009.104c-.05.572-.124%201.14-.235%201.558a2.007%202.007%200%200%201-1.415%201.42c-1.16.312-5.569.334-6.18.335h-.142c-.309%200-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007%202.007%200%200%201-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09%209.82l-.008-.104A31.4%2031.4%200%200%201%200%207.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007%202.007%200%200%201%201.415-1.42c.487-.13%201.544-.21%202.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788%2099.788%200%200%201%207.858%202h.193zM6.4%205.209v4.818l4.157-2.408L6.4%205.209z%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </Link>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "footer11_social-link-2")}
                options={{
                  href: "#",
                }}
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-embed-xsmall-3", "hide")}
                  content=""
                  value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.5686%204.77345C21.5163%205.02692%2022.2555%205.76903%2022.5118%206.71673C23.1821%209.42042%2023.1385%2014.5321%2022.5259%2017.278C22.2724%2018.2257%2021.5303%2018.965%2020.5826%2019.2213C17.9071%2019.8831%205.92356%2019.8015%203.40294%2019.2213C2.45524%2018.9678%201.71595%2018.2257%201.45966%2017.278C0.827391%2014.7011%200.871044%209.25144%201.44558%206.73081C1.69905%205.78311%202.44116%205.04382%203.38886%204.78753C6.96561%204.0412%2019.2956%204.282%2020.5686%204.77345ZM9.86682%208.70227L15.6122%2011.9974L9.86682%2015.2925V8.70227Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </Link>
            </Grid>
            <Block
              className={_utils.cx(_styles, "play-store-holder")}
              id={_utils.cx(
                _styles,
                "w-node-e4590612-79a7-cd75-9f19-7cfbae69d1a1-3b1649ae"
              )}
              tag="div"
            >
              <Link
                block="inline"
                button={false}
                options={{
                  href: "https://apps.apple.com/us/app/lumberfi/id6470901047?platform=iphone",
                  target: "_blank",
                }}
              >
                <Image
                  alt="appstore lumber"
                  height="auto"
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/65c0928abc19eafdb05a0f96_apple%20appstore.svg"
                  width="auto"
                />
              </Link>
              <Link
                block="inline"
                button={false}
                options={{
                  href: "https://play.google.com/store/apps/details?id=com.lumberfi.timesheet&pli=1",
                  target: "_blank",
                }}
              >
                <Image
                  alt="google playstore lumber"
                  height="auto"
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/65c0928adb6f2c3d9f5fad56_google%20playstore.svg"
                  width="auto"
                />
              </Link>
            </Block>
          </Grid>
        </Block>
      </Block>
      <Block className={_utils.cx(_styles, "footer-line")} tag="div" />
      <Block
        className={_utils.cx(_styles, "footer11_bottom-wrapper")}
        tag="div"
      >
        <Block
          className={_utils.cx(_styles, "container_lumber-footer")}
          tag="div"
        >
          <Grid className={_utils.cx(_styles, "footer11_legal-list")} tag="div">
            <Link
              block=""
              button={false}
              className={_utils.cx(_styles, "footer11_legal-link")}
              options={{
                href: "#",
              }}
            >
              {"Privacy policy"}
            </Link>
            <Link
              block=""
              button={false}
              className={_utils.cx(_styles, "footer11_legal-link")}
              options={{
                href: "#",
              }}
            >
              {"Terms of service"}
            </Link>
          </Grid>
          <Block
            className={_utils.cx(_styles, "footer11_credit-text")}
            tag="div"
          >
            {"© Copyright 2024 - LumberFi Inc"}
          </Block>
        </Block>
      </Block>
    </_Component>
  );
}
