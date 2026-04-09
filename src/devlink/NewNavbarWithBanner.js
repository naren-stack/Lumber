"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import DropdownList from "./_Builtin/DropdownList";
import DropdownToggle from "./_Builtin/DropdownToggle";
import DropdownWrapper from "./_Builtin/DropdownWrapper";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Image from "./_Builtin/Image";
import Link from "./_Builtin/Link";
import NavbarBrand from "./_Builtin/NavbarBrand";
import NavbarButton from "./_Builtin/NavbarButton";
import NavbarMenu from "./_Builtin/NavbarMenu";
import NavbarWrapper from "./_Builtin/NavbarWrapper";
import Paragraph from "./_Builtin/Paragraph";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-81":{"id":"e-81","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-82"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff0e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff0e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693380964451},"e-82":{"id":"e-82","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-81"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff0e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff0e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693380964452},"e-83":{"id":"e-83","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693381155197},"e-84":{"id":"e-84","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-83"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693381155198},"e-173":{"id":"e-173","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff69","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff69","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694409643139},"e-174":{"id":"e-174","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff69","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff69","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694409643140},"e-286":{"id":"e-286","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-287"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4a7450256421dc093fdb6|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4a7450256421dc093fdb6|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697198222019},"e-287":{"id":"e-287","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4a7450256421dc093fdb6|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4a7450256421dc093fdb6|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697198222019},"e-288":{"id":"e-288","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1822"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697198484912},"e-289":{"id":"e-289","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1821"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697198484913},"e-348":{"id":"e-348","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-77","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-349"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0439216e-79a5-9c32-e869-16294136739b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0439216e-79a5-9c32-e869-16294136739b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699016585057},"e-436":{"id":"e-436","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-437"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4a7450256421dc093fd9b|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4a7450256421dc093fd9b|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702969275810},"e-437":{"id":"e-437","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-436"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4a7450256421dc093fd9b|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4a7450256421dc093fd9b|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702969275810},"e-490":{"id":"e-490","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-407"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e13670","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e13670","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-491":{"id":"e-491","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-590"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e13670","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e13670","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-492":{"id":"e-492","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-493"}},"mediaQueries":["main"],"target":{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e1367b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e1367b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653380561820},"e-493":{"id":"e-493","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-104","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-492"}},"mediaQueries":["main"],"target":{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e1367b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e1367b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653380561834},"e-494":{"id":"e-494","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-105","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-495"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e1367b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e1367b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653380616175},"e-495":{"id":"e-495","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-106","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-494"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e1367b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e1367b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653380616183},"e-496":{"id":"e-496","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-497"}},"mediaQueries":["main"],"target":{"id":"98fb1ca1-f1a7-693e-e41b-1255bf194474","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"98fb1ca1-f1a7-693e-e41b-1255bf194474","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705484144448},"e-497":{"id":"e-497","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-104","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-496"}},"mediaQueries":["main"],"target":{"id":"98fb1ca1-f1a7-693e-e41b-1255bf194474","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"98fb1ca1-f1a7-693e-e41b-1255bf194474","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705484144448},"e-498":{"id":"e-498","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-105","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-499"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"98fb1ca1-f1a7-693e-e41b-1255bf194474","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"98fb1ca1-f1a7-693e-e41b-1255bf194474","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705484144448},"e-499":{"id":"e-499","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-106","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-498"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"98fb1ca1-f1a7-693e-e41b-1255bf194474","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"98fb1ca1-f1a7-693e-e41b-1255bf194474","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705484144448},"e-500":{"id":"e-500","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-501"}},"mediaQueries":["main"],"target":{"id":"113d0414-665c-19e6-e5b3-ad5c438e0ec9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"113d0414-665c-19e6-e5b3-ad5c438e0ec9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705484144969},"e-501":{"id":"e-501","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-104","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-500"}},"mediaQueries":["main"],"target":{"id":"113d0414-665c-19e6-e5b3-ad5c438e0ec9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"113d0414-665c-19e6-e5b3-ad5c438e0ec9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705484144969},"e-502":{"id":"e-502","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-105","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-503"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"113d0414-665c-19e6-e5b3-ad5c438e0ec9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"113d0414-665c-19e6-e5b3-ad5c438e0ec9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705484144969},"e-503":{"id":"e-503","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-106","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-502"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"113d0414-665c-19e6-e5b3-ad5c438e0ec9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"113d0414-665c-19e6-e5b3-ad5c438e0ec9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705484144969},"e-504":{"id":"e-504","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-505"}},"mediaQueries":["main"],"target":{"id":"d4a8001d-9627-a3f4-a6b9-390becc10a48","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d4a8001d-9627-a3f4-a6b9-390becc10a48","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705484145514},"e-505":{"id":"e-505","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-104","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-504"}},"mediaQueries":["main"],"target":{"id":"d4a8001d-9627-a3f4-a6b9-390becc10a48","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d4a8001d-9627-a3f4-a6b9-390becc10a48","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705484145514},"e-506":{"id":"e-506","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-105","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-507"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"d4a8001d-9627-a3f4-a6b9-390becc10a48","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d4a8001d-9627-a3f4-a6b9-390becc10a48","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705484145514},"e-507":{"id":"e-507","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-106","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-506"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"d4a8001d-9627-a3f4-a6b9-390becc10a48","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d4a8001d-9627-a3f4-a6b9-390becc10a48","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705484145514},"e-582":{"id":"e-582","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-119","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-583"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6628d79054b6e013ddab6d08|090877a6-4f83-2308-9692-ad17afd4a2d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6628d79054b6e013ddab6d08|090877a6-4f83-2308-9692-ad17afd4a2d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714124323191},"e-583":{"id":"e-583","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-120","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-582"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6628d79054b6e013ddab6d08|090877a6-4f83-2308-9692-ad17afd4a2d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6628d79054b6e013ddab6d08|090877a6-4f83-2308-9692-ad17afd4a2d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714124323191},"e-704":{"id":"e-704","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-119","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-705"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66605adf2ae25c24a37ca03f|31cfc87a-3ebe-fdae-3688-6764755356e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66605adf2ae25c24a37ca03f|31cfc87a-3ebe-fdae-3688-6764755356e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717591813642},"e-705":{"id":"e-705","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-120","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-704"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66605adf2ae25c24a37ca03f|31cfc87a-3ebe-fdae-3688-6764755356e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66605adf2ae25c24a37ca03f|31cfc87a-3ebe-fdae-3688-6764755356e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717591813642},"e-1897":{"id":"e-1897","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-259","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1898"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c547c6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c547c6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1899":{"id":"e-1899","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-260","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1900"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c547c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c547c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1900":{"id":"e-1900","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-261","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1899"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c547c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c547c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-2087":{"id":"e-2087","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-328","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2567"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef1346378","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef1346378","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726736710654},"e-2216":{"id":"e-2216","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2569"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef134637a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef134637a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727287016799},"e-2217":{"id":"e-2217","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2568"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef134637a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef134637a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727287016805},"e-2568":{"id":"e-2568","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2569"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"a872b31d-8eed-3003-b021-4d98ab561022","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a872b31d-8eed-3003-b021-4d98ab561022","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727287016799},"e-2569":{"id":"e-2569","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2568"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"a872b31d-8eed-3003-b021-4d98ab561022","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a872b31d-8eed-3003-b021-4d98ab561022","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727287016805},"e-3929":{"id":"e-3929","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3930"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68415b7436d38ca0f5579c81|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68415b7436d38ca0f5579c81|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749113717188},"e-3930":{"id":"e-3930","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3929"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68415b7436d38ca0f5579c81|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68415b7436d38ca0f5579c81|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749113717188},"e-5387":{"id":"e-5387","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-515","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5388"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761548565416},"e-5389":{"id":"e-5389","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-518","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5390"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761548565416},"e-5390":{"id":"e-5390","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-519","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5389"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761548565416}},"actionLists":{"a-26":{"id":"a-26","title":"Show-1","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"block"}}]},{"actionItems":[{"id":"a-26-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-26-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]},{"actionItems":[{"id":"a-26-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1693380993198},"a-27":{"id":"a-27","title":"Hide-1","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-27-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-27-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]},{"actionItems":[{"id":"a-27-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1693381082684},"a-28":{"id":"a-28","title":"Show-2","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"block"}}]},{"actionItems":[{"id":"a-28-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-28-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]},{"actionItems":[{"id":"a-28-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1693381163997},"a-29":{"id":"a-29","title":"Hide-2","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-29-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-29-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]},{"actionItems":[{"id":"a-29-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1693381163997},"a-53":{"id":"a-53","title":"show-3.1","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"block"}}]},{"actionItems":[{"id":"a-53-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-53-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-53-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694409648765},"a-54":{"id":"a-54","title":"hide-3.1","actionItemGroups":[{"actionItems":[{"id":"a-54-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-54-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]},{"actionItems":[{"id":"a-54-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-54-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694409811253},"a-73":{"id":"a-73","title":"Show4","actionItemGroups":[{"actionItems":[{"id":"a-73-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"block"}}]},{"actionItems":[{"id":"a-73-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-73-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-73-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697198524011},"a-74":{"id":"a-74","title":"Hide 4","actionItemGroups":[{"actionItems":[{"id":"a-74-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]},{"actionItems":[{"id":"a-74-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-74-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-74-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697198524011},"a-77":{"id":"a-77","title":"Banner 2 [Close]","actionItemGroups":[{"actionItems":[{"id":"a-77-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".banner2_wrapper","selectorGuids":["10274617-49db-d4da-96b1-725e0ac6adec"]},"value":"flex"}}]},{"actionItems":[{"id":"a-77-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".banner2_wrapper","selectorGuids":["10274617-49db-d4da-96b1-725e0ac6adec"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1643212821099},"a-101":{"id":"a-101","title":"Navbar 1 menu [Close] 3","actionItemGroups":[{"actionItems":[{"id":"a-101-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-101-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-101-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-101-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-101-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-102":{"id":"a-102","title":"Navbar 1 menu [Open] 3","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-102-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-102-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-102-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-102-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-103":{"id":"a-103","title":"Navbar 1 dropdown [Open] [Desktop] 2","actionItemGroups":[{"actionItems":[{"id":"a-103-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list-2","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e96"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-103-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list-2","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e96"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-103-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list-2","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e96"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-103-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list-2","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e96"]},"value":1,"unit":""}},{"id":"a-103-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["3544d499-b24c-b93f-b269-fbbba62e7d43"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-104":{"id":"a-104","title":"Navbar 1 dropdown [Close] [Desktop] 2","actionItemGroups":[{"actionItems":[{"id":"a-104-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list-2","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e96"]},"value":0,"unit":""}},{"id":"a-104-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["3544d499-b24c-b93f-b269-fbbba62e7d43"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-104-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list-2","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e96"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-105":{"id":"a-105","title":"Navbar 1 dropdown [Open] [Tablet] 2","actionItemGroups":[{"actionItems":[{"id":"a-105-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list-2","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e96"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-105-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list-2","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e96"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-105-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["3544d499-b24c-b93f-b269-fbbba62e7d43"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-106":{"id":"a-106","title":"Navbar 1 dropdown [Close] [Tablet] 2","actionItemGroups":[{"actionItems":[{"id":"a-106-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list-2","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e96"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-106-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["3544d499-b24c-b93f-b269-fbbba62e7d43"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-119":{"id":"a-119","title":"Navbar 1 menu [Close] 4","actionItemGroups":[{"actionItems":[{"id":"a-119-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-119-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-119-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-119-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-119-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-120":{"id":"a-120","title":"Navbar 1 menu [Open] 4","actionItemGroups":[{"actionItems":[{"id":"a-120-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-120-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-120-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-120-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-120-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-259":{"id":"a-259","title":"Banner 2 [Close] 10","actionItemGroups":[{"actionItems":[{"id":"a-259-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".banner2_wrapper","selectorGuids":["10274617-49db-d4da-96b1-725e0ac6adec"]},"value":"flex"}}]},{"actionItems":[{"id":"a-259-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".banner2_wrapper","selectorGuids":["10274617-49db-d4da-96b1-725e0ac6adec"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1643212821099},"a-260":{"id":"a-260","title":"Navbar 1 menu [Close] 12","actionItemGroups":[{"actionItems":[{"id":"a-260-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-260-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-260-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-260-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-260-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-261":{"id":"a-261","title":"Navbar 1 menu [Open] 12","actionItemGroups":[{"actionItems":[{"id":"a-261-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-261-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-261-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-261-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-261-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-328":{"id":"a-328","title":"Close the nav banner","actionItemGroups":[{"actionItems":[{"id":"a-328-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".banner2_component","selectorGuids":["10274617-49db-d4da-96b1-725e0ac6adf2"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1726736716417},"a-515":{"id":"a-515","title":"Close the nav banner 2","actionItemGroups":[{"actionItems":[{"id":"a-515-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".banner2_component","selectorGuids":["10274617-49db-d4da-96b1-725e0ac6adf2"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1726736716417},"a-518":{"id":"a-518","title":"Navbar 1 menu [Close] 13","actionItemGroups":[{"actionItems":[{"id":"a-518-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-518-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-518-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-518-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-518-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-519":{"id":"a-519","title":"Navbar 1 menu [Open] 13","actionItemGroups":[{"actionItems":[{"id":"a-519-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-519-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-519-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-519-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-519-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewNavbarWithBanner({ as: _Component = Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "nav-wrap")} tag="header">
      <Block className={_utils.cx(_styles, "banner2_component")} tag="section">
        <Block className={_utils.cx(_styles, "padding-global")} tag="div">
          <Block className={_utils.cx(_styles, "container-large-2")} tag="div">
            <Block className={_utils.cx(_styles, "banner2_wrapper")} tag="div">
              <Block
                className={_utils.cx(_styles, "banner2_content")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "banner2_text-wrapper")}
                  tag="div"
                >
                  <Paragraph className={_utils.cx(_styles, "text-size-small")}>
                    {
                      "Discover how to slash your EMRand boost your botttom line with our new EMRguide! "
                    }
                  </Paragraph>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "banner2_button-wrapper")}
                tag="div"
              >
                <Link
                  block=""
                  button={true}
                  className={_utils.cx(_styles, "banner-btn", "is-small")}
                  options={{
                    href: "https://www.lumberfi.com/toolkit/report-guide/emr-in-construction-a-comprehensive-strategic-guide-for-construction-executives",
                  }}
                >
                  {"DownloadNow"}
                </Link>
              </Block>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "banner2_close-button")}
                data-w-id="0439216e-79a5-9c32-e869-16294136739b"
                options={{
                  href: "#",
                }}
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-embed-small")}
                  content=""
                  value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20color%3D%22000000%22%20viewBox%3D%220%200%2032%2033%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.8354%2022.864L22.3639%2023.3354C22.1036%2023.5957%2021.6815%2023.5957%2021.4211%2023.3354L16%2017.9142L10.5788%2023.3353C10.3185%2023.5957%209.89638%2023.5957%209.63603%2023.3353L9.16462%2022.8639C8.90427%2022.6036%208.90427%2022.1815%209.16462%2021.9211L14.5858%2016.5L9.16462%2011.0788C8.90427%2010.8185%208.90427%2010.3964%209.16462%2010.136L9.63602%209.66463C9.89637%209.40428%2010.3185%209.40428%2010.5788%209.66463L16%2015.0858L21.4211%209.66462C21.6815%209.40427%2022.1036%209.40427%2022.3639%209.66462L22.8354%2010.136C23.0957%2010.3964%2023.0957%2010.8185%2022.8354%2011.0788L17.4142%2016.5L22.8354%2021.9211C23.0957%2022.1815%2023.0957%2022.6036%2022.8354%2022.864Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </Link>
            </Block>
          </Block>
        </Block>
      </Block>
      <NavbarWrapper
        className={_utils.cx(_styles, "navbar11_component")}
        config={{
          collapse: "medium",
          animation: "default",
          easing: "ease",
          easing2: "ease",
          duration: 400,
          docHeight: false,
          noScroll: false,
        }}
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-w-id="64dd6d7c-fe7f-f0f1-c45a-27e587e13670"
        fs-scrolldisable-element="smart-nav"
        tag="div"
      >
        <Block className={_utils.cx(_styles, "navbar11_container")} tag="div">
          <NavbarBrand
            className={_utils.cx(_styles, "navbar11_logo-link")}
            options={{
              href: "#",
            }}
          >
            <Image
              alt=""
              className={_utils.cx(_styles, "navbar11_logo")}
              height="auto"
              loading="lazy"
              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64f20320f6decbe606c058e0_Logo.svg"
              width="auto"
            />
          </NavbarBrand>
          <NavbarMenu
            className={_utils.cx(
              _styles,
              "navbar1_menu-2",
              "is-page-height-tablet"
            )}
            role="navigation"
            tag="nav"
          >
            <DropdownWrapper
              className={_utils.cx(_styles, "navbar1_menu-dropdown")}
              data-w-id="64dd6d7c-fe7f-f0f1-c45a-27e587e1367b"
              delay="200"
              hover={true}
              tag="div"
            >
              <DropdownToggle
                className={_utils.cx(_styles, "navbar1_dropdown-toggle")}
                tag="div"
              >
                <Block tag="div">{"Product"}</Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "dropdown-chevron")}
                  content=""
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </DropdownToggle>
              <DropdownList
                className={_utils.cx(_styles, "navbar1_dropdown-list-2")}
                tag="nav"
              >
                <Block
                  className={_utils.cx(_styles, "product-dropdown")}
                  data-cy="step5"
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "tooltip-container")}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, "nav-component")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(_styles, "nav-category")}
                        tag="div"
                      >
                        {"Platform"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "nav-item-holder")}
                        tag="div"
                      >
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/664f139517e74a85a5e454c5_scheduler-Icon.png"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Scheduler"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Unlocking predictability"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64eedd7d45b217c3c3d76631_Icon.svg"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Time Tracking"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Seamlessly track time"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64eedd7be3f0649a05fc03ac_Icon-1.svg"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Payroll"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"End to end payroll process"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66a38f221e9f14293b84309a_Icon.svg"
                              width="12"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"HR"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Hiring & onboarding"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66b25c25e768027c6031b69c_NavBenefits.webp"
                              width="12"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Benefits"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Benefits administration"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                      </Block>
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "nav-component")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(_styles, "nav-category")}
                        tag="div"
                      >
                        {"TECHNOLOGY"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "nav-item-holder")}
                        tag="div"
                      >
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64eedd7b5c1700c1885951c6_Icon-2.svg"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Integrations"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Connect with your stack"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                      </Block>
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(_styles, "tooltip-diamond", "top")}
                    tag="div"
                  />
                </Block>
              </DropdownList>
            </DropdownWrapper>
            <DropdownWrapper
              className={_utils.cx(_styles, "navbar1_menu-dropdown")}
              data-w-id="d4a8001d-9627-a3f4-a6b9-390becc10a48"
              delay="200"
              hover={true}
              tag="div"
            >
              <DropdownToggle
                className={_utils.cx(_styles, "navbar1_dropdown-toggle")}
                tag="div"
              >
                <Block tag="div">{"Toolkit"}</Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "dropdown-chevron")}
                  content=""
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </DropdownToggle>
              <DropdownList
                className={_utils.cx(_styles, "navbar1_dropdown-list-2")}
                tag="nav"
              >
                <Block
                  className={_utils.cx(_styles, "toolkit-dropdown")}
                  data-cy="step5"
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "tooltip-container")}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, "nav-component")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(_styles, "nav-category")}
                        tag="div"
                      >
                        {"RESOURCES"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "nav-item-holder")}
                        tag="div"
                      >
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          id={_utils.cx(_styles, "blog-btn")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64eedd7bb59f5bc5455852bc_Icon-3.svg"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Blogs"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Gain insights"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64eedd7cc3b6732ca1347e52_Icon-4.svg"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Reports & Guides"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Unlock knowledge"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          id={_utils.cx(_styles, "infographic-btn")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64eedd7bd83559e6d9df8af6_Icon-5.svg"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Infographics"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Visualizing insights"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64eedd7cdb0ebf511bd14d1d_Icon-6.svg"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Webinars"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Learn from Experts"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64eedd7c9d430b36b584270b_Icon-7.svg"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Podcasts"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Words of Wisdom"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/664f1554555a97db6a03c6de_wiki-Icon.webp"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Wiki"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Compliance at your fingertips"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/664f1554594e3ff47307c814_Glossary-Icon.webp"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Glossary"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"100+ construction terms"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                      </Block>
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(_styles, "tooltip-diamond", "top")}
                    tag="div"
                  />
                </Block>
              </DropdownList>
            </DropdownWrapper>
            <DropdownWrapper
              className={_utils.cx(_styles, "navbar1_menu-dropdown")}
              data-w-id="113d0414-665c-19e6-e5b3-ad5c438e0ec9"
              delay="200"
              hover={true}
              tag="div"
            >
              <DropdownToggle
                className={_utils.cx(_styles, "navbar1_dropdown-toggle")}
                tag="div"
              >
                <Block tag="div">{"Community"}</Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "dropdown-chevron")}
                  content=""
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </DropdownToggle>
              <DropdownList
                className={_utils.cx(_styles, "navbar1_dropdown-list-2")}
                tag="nav"
              >
                <Block
                  className={_utils.cx(_styles, "community-dropdown")}
                  data-cy="step5"
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "tooltip-container")}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, "nav-component")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(_styles, "nav-category")}
                        tag="div"
                      >
                        {"COMMUNITY"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "nav-item-holder")}
                        tag="div"
                      >
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker", "hide")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64eedd7d815fa7607027f0bc_Icon-9.svg"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Lumber Community"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Join our community"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/652936a5e9d517554e2e73ff_Icon%20Associations.svg"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Associations"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Our industry affiliations"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/6529375a29681836be6f2616_Icon%20Ask%20Lumber.png"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Ask Lumber"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Got any questions?"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                      </Block>
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(_styles, "tooltip-diamond", "top")}
                    tag="div"
                  />
                </Block>
              </DropdownList>
            </DropdownWrapper>
            <DropdownWrapper
              className={_utils.cx(_styles, "navbar1_menu-dropdown")}
              data-w-id="98fb1ca1-f1a7-693e-e41b-1255bf194474"
              delay="200"
              hover={true}
              tag="div"
            >
              <DropdownToggle
                className={_utils.cx(_styles, "navbar1_dropdown-toggle")}
                tag="div"
              >
                <Block tag="div">{"Company"}</Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "dropdown-chevron")}
                  content=""
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </DropdownToggle>
              <DropdownList
                className={_utils.cx(_styles, "navbar1_dropdown-list-2")}
                tag="nav"
              >
                <Block
                  className={_utils.cx(_styles, "company-dropdown")}
                  data-cy="step5"
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "tooltip-container")}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, "nav-component")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(_styles, "nav-category")}
                        tag="div"
                      >
                        {"ABOUT LUMBER"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "nav-item-holder")}
                        tag="div"
                      >
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64eedd7d815fa7607027f0bc_Icon-9.svg"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Lumber Story"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"How we got started"}
                                <br />
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64f6c34ce8c6230384ec1192_Icon-8.webp"
                              width="auto"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Lumber Newsroom"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Making waves"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                        <Link
                          block="inline"
                          button={false}
                          className={_utils.cx(_styles, "nav-linker")}
                          options={{
                            href: "#",
                          }}
                        >
                          <Block
                            className={_utils.cx(_styles, "nav-item")}
                            tag="div"
                          >
                            <Image
                              alt=""
                              className={_utils.cx(_styles, "nav-icon")}
                              height="auto"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66acd9c60c7e8cb51b4e93a4_partner-Icon.svg"
                              width="24"
                            />
                            <Block tag="div">
                              <Block
                                className={_utils.cx(_styles, "nav-title")}
                                tag="div"
                              >
                                {"Lumber Partners"}
                              </Block>
                              <Block
                                className={_utils.cx(_styles, "nav-caption")}
                                tag="div"
                              >
                                {"Let’s partner"}
                              </Block>
                            </Block>
                          </Block>
                        </Link>
                      </Block>
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(_styles, "tooltip-diamond", "top")}
                    tag="div"
                  />
                </Block>
              </DropdownList>
            </DropdownWrapper>
            <Link
              block=""
              button={false}
              className={_utils.cx(_styles, "nav-contact")}
              options={{
                href: "#",
              }}
            >
              {"Contact"}
            </Link>
            <Block
              className={_utils.cx(_styles, "navbar11_menu-buttons")}
              tag="div"
            >
              <Link
                block=""
                button={true}
                className={_utils.cx(_styles, "button", "is-primary", "no-px")}
                id={_utils.cx(_styles, "nav-btn")}
                options={{
                  href: "#",
                }}
              >
                {"Talk to us"}
              </Link>
            </Block>
          </NavbarMenu>
          <NavbarButton
            className={_utils.cx(_styles, "navbar1_menu-button")}
            tag="div"
          >
            <Block className={_utils.cx(_styles, "menu-icon1")} tag="div">
              <Block
                className={_utils.cx(_styles, "menu-icon1_line-top-4")}
                tag="div"
              />
              <Block
                className={_utils.cx(_styles, "menu-icon1_line-middle-3")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "menu-icon_line-middle-inner")}
                  tag="div"
                />
              </Block>
              <Block
                className={_utils.cx(_styles, "menu-icon1_line-bottom-3")}
                tag="div"
              />
            </Block>
          </NavbarButton>
        </Block>
      </NavbarWrapper>
    </_Component>
  );
}
