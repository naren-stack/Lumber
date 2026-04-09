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
import NavbarLink from "./_Builtin/NavbarLink";
import NavbarMenu from "./_Builtin/NavbarMenu";
import NavbarWrapper from "./_Builtin/NavbarWrapper";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-58":{"id":"e-58","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2071"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff08","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff08","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643668887055},"e-59":{"id":"e-59","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1935"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff08","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff08","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643668887055},"e-81":{"id":"e-81","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-82"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff0e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff0e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693380964451},"e-82":{"id":"e-82","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-81"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff0e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff0e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693380964452},"e-83":{"id":"e-83","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693381155197},"e-84":{"id":"e-84","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-83"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693381155198},"e-173":{"id":"e-173","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff69","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff69","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694409643139},"e-174":{"id":"e-174","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff69","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff69","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694409643140},"e-228":{"id":"e-228","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-226"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4a7450256421dc093fe44|5b49e7f5-6181-dbc8-7d8a-fab3a54df042","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4a7450256421dc093fe44|5b49e7f5-6181-dbc8-7d8a-fab3a54df042","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695362347283},"e-226":{"id":"e-226","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-228"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4a7450256421dc093fe44|5b49e7f5-6181-dbc8-7d8a-fab3a54df042","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4a7450256421dc093fe44|5b49e7f5-6181-dbc8-7d8a-fab3a54df042","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695362347283},"e-286":{"id":"e-286","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-287"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4a7450256421dc093fdb6|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4a7450256421dc093fdb6|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697198222019},"e-287":{"id":"e-287","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4a7450256421dc093fdb6|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4a7450256421dc093fdb6|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697198222019},"e-288":{"id":"e-288","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1822"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697198484912},"e-289":{"id":"e-289","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1821"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c89fcc7c-a199-9088-4e3d-aeee02a1ff66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697198484913},"e-436":{"id":"e-436","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-437"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4a7450256421dc093fd9b|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4a7450256421dc093fd9b|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702969275810},"e-437":{"id":"e-437","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-436"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4a7450256421dc093fd9b|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4a7450256421dc093fd9b|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702969275810},"e-3929":{"id":"e-3929","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3930"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68415b7436d38ca0f5579c81|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68415b7436d38ca0f5579c81|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749113717188},"e-3930":{"id":"e-3930","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3929"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68415b7436d38ca0f5579c81|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68415b7436d38ca0f5579c81|73ad3cf1-47e7-b155-3d2d-7d42b852e838","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749113717188}},"actionLists":{"a-18":{"id":"a-18","title":"Navbar 11 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["6055ce8c-798f-6bfa-49e2-5a032f9e7254"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-18-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["6055ce8c-798f-6bfa-49e2-5a032f9e7256"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-18-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["6055ce8c-798f-6bfa-49e2-5a032f9e7253"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-18-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["6055ce8c-798f-6bfa-49e2-5a032f9e7253"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-18-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["6055ce8c-798f-6bfa-49e2-5a032f9e7256"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-19":{"id":"a-19","title":"Navbar 11 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["6055ce8c-798f-6bfa-49e2-5a032f9e7256"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-19-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["6055ce8c-798f-6bfa-49e2-5a032f9e7253"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-19-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["6055ce8c-798f-6bfa-49e2-5a032f9e7256"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-19-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["6055ce8c-798f-6bfa-49e2-5a032f9e7253"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-19-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["6055ce8c-798f-6bfa-49e2-5a032f9e7254"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-26":{"id":"a-26","title":"Show-1","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"block"}}]},{"actionItems":[{"id":"a-26-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-26-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]},{"actionItems":[{"id":"a-26-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1693380993198},"a-27":{"id":"a-27","title":"Hide-1","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-27-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-27-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]},{"actionItems":[{"id":"a-27-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1693381082684},"a-28":{"id":"a-28","title":"Show-2","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"block"}}]},{"actionItems":[{"id":"a-28-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-28-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]},{"actionItems":[{"id":"a-28-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1693381163997},"a-29":{"id":"a-29","title":"Hide-2","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-29-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-29-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]},{"actionItems":[{"id":"a-29-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1693381163997},"a-53":{"id":"a-53","title":"show-3.1","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"block"}}]},{"actionItems":[{"id":"a-53-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-53-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-53-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694409648765},"a-54":{"id":"a-54","title":"hide-3.1","actionItemGroups":[{"actionItems":[{"id":"a-54-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-54-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]},{"actionItems":[{"id":"a-54-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-54-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694409811253},"a-73":{"id":"a-73","title":"Show4","actionItemGroups":[{"actionItems":[{"id":"a-73-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"block"}}]},{"actionItems":[{"id":"a-73-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-73-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-73-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697198524011},"a-74":{"id":"a-74","title":"Hide 4","actionItemGroups":[{"actionItems":[{"id":"a-74-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".community-dropdown","selectorGuids":["086d1ce5-345f-ab2c-134f-2b8af62f1891"]},"value":"none"}}]},{"actionItems":[{"id":"a-74-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".product-dropdown","selectorGuids":["fa018854-7876-ab95-7f10-f2c3e13a2e4e"]},"value":"none"}}]},{"actionItems":[{"id":"a-74-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".toolkit-dropdown","selectorGuids":["bd25f477-8c1c-cd3d-1ed8-bc5d47a2c001"]},"value":"none"}}]},{"actionItems":[{"id":"a-74-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".company-dropdown","selectorGuids":["cb55ba0a-7770-9213-d1b1-fc09c319fc31"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697198524011}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewNabar({ as: _Component = NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
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
      data-w-id="c89fcc7c-a199-9088-4e3d-aeee02a1ff08"
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
            "navbar11_menu",
            "is-page-height-tablet"
          )}
          role="navigation"
          tag="nav"
        >
          <Block className={_utils.cx(_styles, "dropdown-holder")} tag="div">
            <NavbarLink
              className={_utils.cx(_styles, "dropdown", "nav-desktop")}
              data-w-id="c89fcc7c-a199-9088-4e3d-aeee02a1ff0e"
              options={{
                href: "#",
              }}
            >
              {"Product"}
            </NavbarLink>
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
            <DropdownWrapper
              className={_utils.cx(_styles, "navbar3_menu-dropdown")}
              delay="200"
              hover={true}
              tag="div"
            >
              <DropdownToggle
                className={_utils.cx(_styles, "navbar3_dropdown-toggle")}
                tag="div"
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "dropdown-icon")}
                  content=""
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Block tag="div">{"Product"}</Block>
              </DropdownToggle>
              <DropdownList
                className={_utils.cx(_styles, "navbar3_dropdown-list")}
                tag="nav"
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
              </DropdownList>
            </DropdownWrapper>
          </Block>
          <Block className={_utils.cx(_styles, "dropdown-holder")} tag="div">
            <NavbarLink
              className={_utils.cx(_styles, "dropdown", "nav-desktop")}
              data-w-id="c89fcc7c-a199-9088-4e3d-aeee02a1ff34"
              options={{
                href: "#",
              }}
            >
              {"Toolkit"}
            </NavbarLink>
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
                          src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64eedd7cc3b6732ca1347e52_Icon-4.svg"
                          width="auto"
                        />
                        <Block tag="div">
                          <Block
                            className={_utils.cx(_styles, "nav-title")}
                            tag="div"
                          >
                            {"E-Books & Guides"}
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
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "tooltip-diamond", "top")}
                tag="div"
              />
            </Block>
            <DropdownWrapper
              className={_utils.cx(_styles, "navbar3_menu-dropdown")}
              delay="200"
              hover={true}
              tag="div"
            >
              <DropdownToggle
                className={_utils.cx(_styles, "navbar3_dropdown-toggle")}
                tag="div"
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "dropdown-icon")}
                  content=""
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Block tag="div">{"Toolkit"}</Block>
              </DropdownToggle>
              <DropdownList
                className={_utils.cx(_styles, "navbar3_dropdown-list")}
                tag="nav"
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
                            {"Blog"}
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
                          src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/64eedd7cc3b6732ca1347e52_Icon-4.svg"
                          width="auto"
                        />
                        <Block tag="div">
                          <Block
                            className={_utils.cx(_styles, "nav-title")}
                            tag="div"
                          >
                            {"E-Books & Guides"}
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
                  </Block>
                </Block>
              </DropdownList>
            </DropdownWrapper>
          </Block>
          <Block className={_utils.cx(_styles, "dropdown-holder")} tag="div">
            <NavbarLink
              className={_utils.cx(_styles, "dropdown", "nav-desktop")}
              data-w-id="c89fcc7c-a199-9088-4e3d-aeee02a1ff66"
              options={{
                href: "#",
              }}
            >
              {"Community"}
            </NavbarLink>
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
          </Block>
          <Block className={_utils.cx(_styles, "dropdown-holder")} tag="div">
            <NavbarLink
              className={_utils.cx(_styles, "dropdown", "nav-desktop")}
              data-w-id="c89fcc7c-a199-9088-4e3d-aeee02a1ff69"
              options={{
                href: "#",
              }}
            >
              {"Company"}
            </NavbarLink>
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
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "tooltip-diamond", "top")}
                tag="div"
              />
            </Block>
            <DropdownWrapper
              className={_utils.cx(_styles, "navbar3_menu-dropdown")}
              delay="200"
              hover={true}
              tag="div"
            >
              <DropdownToggle
                className={_utils.cx(_styles, "navbar3_dropdown-toggle")}
                tag="div"
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "dropdown-icon")}
                  content=""
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Block tag="div">{"Company"}</Block>
              </DropdownToggle>
              <DropdownList
                className={_utils.cx(_styles, "navbar3_dropdown-list")}
                tag="nav"
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
                  </Block>
                </Block>
              </DropdownList>
            </DropdownWrapper>
          </Block>
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
                href: "https://meetings.hubspot.com/lumber/demo",
                target: "_blank",
              }}
            >
              {"Talk to us"}
            </Link>
          </Block>
        </NavbarMenu>
        <NavbarButton
          className={_utils.cx(_styles, "navbar11_menu-button")}
          tag="div"
        >
          <Block className={_utils.cx(_styles, "menu-icon1")} tag="div">
            <Block
              className={_utils.cx(_styles, "menu-icon1_line-top")}
              tag="div"
            />
            <Block
              className={_utils.cx(_styles, "menu-icon1_line-middle")}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, "menu-icon_line-middle-inner")}
                tag="div"
              />
            </Block>
            <Block
              className={_utils.cx(_styles, "menu-icon1_line-bottom")}
              tag="div"
            />
          </Block>
        </NavbarButton>
      </Block>
    </_Component>
  );
}
