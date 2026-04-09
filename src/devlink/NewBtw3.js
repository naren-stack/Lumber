"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Link from "./_Builtin/Link";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-3381":{"id":"e-3381","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-379","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3382"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b29dc6ab-e282-f072-6ccb-eb519c33baaf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b29dc6ab-e282-f072-6ccb-eb519c33baaf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747136779879},"e-3382":{"id":"e-3382","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-380","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3381"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b29dc6ab-e282-f072-6ccb-eb519c33baaf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b29dc6ab-e282-f072-6ccb-eb519c33baaf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747136779879},"e-3668":{"id":"e-3668","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-379","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3669"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68386384a0c8c41df298c6a1|7c1d90fd-0e2e-41e0-17a1-946ec4e6a294","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68386384a0c8c41df298c6a1|7c1d90fd-0e2e-41e0-17a1-946ec4e6a294","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748525943581},"e-3669":{"id":"e-3669","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-380","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3668"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68386384a0c8c41df298c6a1|7c1d90fd-0e2e-41e0-17a1-946ec4e6a294","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68386384a0c8c41df298c6a1|7c1d90fd-0e2e-41e0-17a1-946ec4e6a294","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748525943581}},"actionLists":{"a-379":{"id":"a-379","title":"btw-variant_4-in","actionItemGroups":[{"actionItems":[{"id":"a-379-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-379-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"globalSwatchId":"--cta-red","rValue":255,"bValue":97,"gValue":111,"aValue":1}},{"id":"a-379-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-379-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-379-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-379-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outBack","duration":900,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"xValue":2.5,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-379-n-8","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outBack","duration":900,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-379-n-9","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outBack","duration":900,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"globalSwatchId":"--cta-red","rValue":255,"bValue":97,"gValue":111,"aValue":1}},{"id":"a-379-n-10","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outBack","duration":900,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"xValue":1.25,"yValue":1.25,"locked":true}},{"id":"a-379-n-11","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outBack","duration":900,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1745585252563},"a-380":{"id":"a-380","title":"btw-variant_4-out","actionItemGroups":[{"actionItems":[{"id":"a-380-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outBack","duration":900,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-380-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outBack","duration":900,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"globalSwatchId":"--cta-red","rValue":255,"bValue":97,"gValue":111,"aValue":1}},{"id":"a-380-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outBack","duration":900,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-380-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outBack","duration":900,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-380-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outBack","duration":900,"target":{"useEventTarget":"CHILDREN","selector":".button-4_arrow-wrapper","selectorGuids":["d4b04a3c-301d-c396-dc9b-e6369bb73233"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1745585252563}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewBtw3({
  as: _Component = Link,

  link = {
    href: "#",
  },

  textHolder = "Yes, I want to streamline my operations!",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      block="inline"
      button={false}
      className={_utils.cx(_styles, "btw-variant-4")}
      data-w-id="b29dc6ab-e282-f072-6ccb-eb519c33baaf"
      options={link}
    >
      <HtmlEmbed
        className={_utils.cx(_styles, "svg-filter_embed")}
        content=""
        value="%3Csvg%20width%3D%220%22%20height%3D%220%22%20class%3D%22absolute%20hidden%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22buttonFilter%22%3E%0A%3CfeGaussianBlur%20in%3D%22SourceGraphic%22%20stdDeviation%3D%225%22%20result%3D%22blur%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22blur%22%20mode%3D%22matrix%22%20values%3D%221%200%200%200%200%20%200%201%200%200%200%20%200%200%201%200%200%20%200%200%200%2019%20-9%22%20result%3D%22buttonFilter%22%2F%3E%0A%3CfeComposite%20in%3D%22SourceGraphic%22%20in2%3D%22buttonFilter%22%20operator%3D%22atop%22%2F%3E%0A%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22buttonFilter%22%2F%3E%0A%3C%2Ffilter%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
      />
      <Block
        className={_utils.cx(_styles, "button-4_content", "new-pad")}
        tag="div"
      >
        <Block tag="div">{textHolder}</Block>
        <Block
          className={_utils.cx(_styles, "button-4_arrow-wrapper")}
          tag="div"
        >
          <HtmlEmbed
            className={_utils.cx(_styles, "button_arrow-icon")}
            content=""
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--tabler%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M17%207L7%2017M8%207h9v9%22%2F%3E%3C%2Fsvg%3E"
          />
        </Block>
      </Block>
    </_Component>
  );
}
