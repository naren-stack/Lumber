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
  '{"events":{"e-348":{"id":"e-348","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-77","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-349"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0439216e-79a5-9c32-e869-16294136739b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0439216e-79a5-9c32-e869-16294136739b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699016585057},"e-490":{"id":"e-490","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-407"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e13670","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e13670","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-491":{"id":"e-491","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-590"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e13670","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e13670","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-582":{"id":"e-582","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-119","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-583"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6628d79054b6e013ddab6d08|090877a6-4f83-2308-9692-ad17afd4a2d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6628d79054b6e013ddab6d08|090877a6-4f83-2308-9692-ad17afd4a2d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714124323191},"e-583":{"id":"e-583","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-120","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-582"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6628d79054b6e013ddab6d08|090877a6-4f83-2308-9692-ad17afd4a2d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6628d79054b6e013ddab6d08|090877a6-4f83-2308-9692-ad17afd4a2d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714124323191},"e-704":{"id":"e-704","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-119","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-705"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66605adf2ae25c24a37ca03f|31cfc87a-3ebe-fdae-3688-6764755356e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66605adf2ae25c24a37ca03f|31cfc87a-3ebe-fdae-3688-6764755356e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717591813642},"e-705":{"id":"e-705","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-120","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-704"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66605adf2ae25c24a37ca03f|31cfc87a-3ebe-fdae-3688-6764755356e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66605adf2ae25c24a37ca03f|31cfc87a-3ebe-fdae-3688-6764755356e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717591813642},"e-1897":{"id":"e-1897","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-259","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1898"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c547c6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c547c6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1899":{"id":"e-1899","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-260","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1900"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c547c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c547c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1900":{"id":"e-1900","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-261","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1899"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c547c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c547c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1901":{"id":"e-1901","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-262","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1902"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c547ce","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c547ce","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1902":{"id":"e-1902","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-263","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1901"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c547ce","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c547ce","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1903":{"id":"e-1903","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-264","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1904"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c547ce","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c547ce","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1904":{"id":"e-1904","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-265","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1903"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c547ce","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c547ce","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1905":{"id":"e-1905","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-264","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1906"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c548bb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c548bb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1906":{"id":"e-1906","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-265","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1905"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c548bb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c548bb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1907":{"id":"e-1907","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-262","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1908"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c548bb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c548bb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1908":{"id":"e-1908","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-263","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1907"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c548bb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c548bb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1909":{"id":"e-1909","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-264","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1910"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c548fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c548fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1910":{"id":"e-1910","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-265","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1909"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c548fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c548fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1911":{"id":"e-1911","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-262","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1912"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c548fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c548fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1912":{"id":"e-1912","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-263","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1911"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c548fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c548fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-2087":{"id":"e-2087","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-328","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2567"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef1346378","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef1346378","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726736710654},"e-2210":{"id":"e-2210","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-335","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2571"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef1346447","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef1346447","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727274352575},"e-2211":{"id":"e-2211","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-334","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2570"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef1346447","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef1346447","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727274352583},"e-2212":{"id":"e-2212","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-335","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2573"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef1346554","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef1346554","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727284542682},"e-2213":{"id":"e-2213","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-334","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2572"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef1346554","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef1346554","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727284542689},"e-2214":{"id":"e-2214","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-335","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2575"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef13465c3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef13465c3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727284577397},"e-2215":{"id":"e-2215","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-334","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2574"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef13465c3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef13465c3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727284577405},"e-2216":{"id":"e-2216","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2569"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef134637a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef134637a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727287016799},"e-2217":{"id":"e-2217","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2568"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef134637a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef134637a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727287016805},"e-2568":{"id":"e-2568","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2569"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"a872b31d-8eed-3003-b021-4d98ab561022","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a872b31d-8eed-3003-b021-4d98ab561022","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727287016799},"e-2569":{"id":"e-2569","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2568"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"a872b31d-8eed-3003-b021-4d98ab561022","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a872b31d-8eed-3003-b021-4d98ab561022","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727287016805},"e-2612":{"id":"e-2612","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-335","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2613"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9019c8e1-b37c-0ddb-adc7-9f559183e458","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9019c8e1-b37c-0ddb-adc7-9f559183e458","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1735302938535},"e-2613":{"id":"e-2613","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-334","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2612"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9019c8e1-b37c-0ddb-adc7-9f559183e458","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9019c8e1-b37c-0ddb-adc7-9f559183e458","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1735302938535},"e-5387":{"id":"e-5387","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-515","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5388"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761548565416},"e-5389":{"id":"e-5389","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-518","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5390"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761548565416},"e-5390":{"id":"e-5390","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-519","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5389"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761548565416}},"actionLists":{"a-77":{"id":"a-77","title":"Banner 2 [Close]","actionItemGroups":[{"actionItems":[{"id":"a-77-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".banner2_wrapper","selectorGuids":["10274617-49db-d4da-96b1-725e0ac6adec"]},"value":"flex"}}]},{"actionItems":[{"id":"a-77-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".banner2_wrapper","selectorGuids":["10274617-49db-d4da-96b1-725e0ac6adec"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1643212821099},"a-101":{"id":"a-101","title":"Navbar 1 menu [Close] 3","actionItemGroups":[{"actionItems":[{"id":"a-101-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-101-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-101-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-101-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-101-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-102":{"id":"a-102","title":"Navbar 1 menu [Open] 3","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-102-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-102-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-102-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-102-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-119":{"id":"a-119","title":"Navbar 1 menu [Close] 4","actionItemGroups":[{"actionItems":[{"id":"a-119-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-119-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-119-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-119-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-119-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-120":{"id":"a-120","title":"Navbar 1 menu [Open] 4","actionItemGroups":[{"actionItems":[{"id":"a-120-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-120-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-120-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-120-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-120-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-259":{"id":"a-259","title":"Banner 2 [Close] 10","actionItemGroups":[{"actionItems":[{"id":"a-259-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".banner2_wrapper","selectorGuids":["10274617-49db-d4da-96b1-725e0ac6adec"]},"value":"flex"}}]},{"actionItems":[{"id":"a-259-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".banner2_wrapper","selectorGuids":["10274617-49db-d4da-96b1-725e0ac6adec"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1643212821099},"a-260":{"id":"a-260","title":"Navbar 1 menu [Close] 12","actionItemGroups":[{"actionItems":[{"id":"a-260-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-260-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-260-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-260-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-260-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-261":{"id":"a-261","title":"Navbar 1 menu [Open] 12","actionItemGroups":[{"actionItems":[{"id":"a-261-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-261-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-261-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-261-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-261-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-262":{"id":"a-262","title":"Navbar08 dropdown (tablet) -> OPEN 6","actionItemGroups":[{"actionItems":[{"id":"a-262-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".product_dropdown-list","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598492"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-262-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".product_dropdown-list","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598492"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626242958157},"a-263":{"id":"a-263","title":"Navbar08 dropdown (tablet) -> CLOSE 6","actionItemGroups":[{"actionItems":[{"id":"a-263-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".product_dropdown-list","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598492"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626242958157},"a-264":{"id":"a-264","title":"Navbar08 -> OPEN 6","actionItemGroups":[{"actionItems":[{"id":"a-264-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".product_dropdown-list","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598492"]},"value":0,"unit":""}},{"id":"a-264-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".product_dropdown-list","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598492"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-264-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-icon-6","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598494"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-264-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".product_dropdown-list","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598492"]},"value":1,"unit":""}},{"id":"a-264-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".product_dropdown-list","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598492"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626161550593},"a-265":{"id":"a-265","title":"Navbar08 -> CLOSE 6","actionItemGroups":[{"actionItems":[{"id":"a-265-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-icon-6","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598494"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-265-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".product_dropdown-list","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598492"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-265-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".product_dropdown-list","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598492"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626161607847},"a-328":{"id":"a-328","title":"Close the nav banner","actionItemGroups":[{"actionItems":[{"id":"a-328-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".banner2_component","selectorGuids":["10274617-49db-d4da-96b1-725e0ac6adf2"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1726736716417},"a-335":{"id":"a-335","title":"Navbar-DD[open] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-335-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".product_dropdown-list","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598492"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-335-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-icon-6","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598494"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1727266716812},"a-334":{"id":"a-334","title":"Navbar-DD[Close] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-334-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".product_dropdown-list","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598492"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-334-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-icon-6","selectorGuids":["b57eb79a-123d-90cf-a898-6848e8598494"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1727266716812},"a-515":{"id":"a-515","title":"Close the nav banner 2","actionItemGroups":[{"actionItems":[{"id":"a-515-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".banner2_component","selectorGuids":["10274617-49db-d4da-96b1-725e0ac6adf2"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1726736716417},"a-518":{"id":"a-518","title":"Navbar 1 menu [Close] 13","actionItemGroups":[{"actionItems":[{"id":"a-518-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-518-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-518-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-518-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-518-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-519":{"id":"a-519","title":"Navbar 1 menu [Open] 13","actionItemGroups":[{"actionItems":[{"id":"a-519-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-519-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-519-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-519-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-519-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MobileNav({ as: _Component = Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "nav-wrap-mobile")} tag="header">
      <Block className={_utils.cx(_styles, "banner2_component")} tag="section">
        <Block className={_utils.cx(_styles, "padding-global")} tag="div">
          <Block className={_utils.cx(_styles, "container-large-2")} tag="div">
            <Block className={_utils.cx(_styles, "banner2_wrapper")} tag="div">
              <Block tag="div" />
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
                      "Discover how to slash your EMR and boost your botttom line with our new EMR guide!"
                    }
                  </Paragraph>
                </Block>
                <Block
                  className={_utils.cx(_styles, "banner2_button-wrapper")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "banner-btn")}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block tag="div">{"Download Now"}</Block>
                    <Image
                      alt=""
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66da7569ce3f80e28298ebe7_arrow-narrow-up-right.svg"
                      width="auto"
                    />
                  </Link>
                </Block>
              </Block>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "banner2_close-button")}
                data-w-id="82fb0296-7c5b-8557-d527-e0c129c547c6"
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
        className={_utils.cx(_styles, "navbar11_component", "n")}
        config={{
          easing: "ease",
          easing2: "ease",
          duration: 400,
          docHeight: false,
          noScroll: false,
          animation: "default",
          collapse: "medium",
        }}
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-w-id="82fb0296-7c5b-8557-d527-e0c129c547c8"
        fs-scrolldisable-element="smart-nav"
        tag="div"
      >
        <Block
          className={_utils.cx(_styles, "new-navbar11_container")}
          tag="div"
        >
          <NavbarBrand
            className={_utils.cx(_styles, "new-navbar11_logo-link")}
            options={{
              href: "#",
            }}
          >
            <Image
              alt=""
              className={_utils.cx(_styles, "navbar11_logo")}
              height="auto"
              loading="lazy"
              src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66da76347473f6276f4e8dc4_Logo.svg"
              width="auto"
            />
          </NavbarBrand>
          <NavbarMenu
            className={_utils.cx(
              _styles,
              "navbar1_menu-2",
              "is-page-height-tablet",
              "new-nav"
            )}
            role="navigation"
            tag="nav"
          >
            <Block className={_utils.cx(_styles, "mobile-nav-wrap")} tag="div">
              <DropdownWrapper
                className={_utils.cx(_styles, "desktop_menu-dropdown")}
                data-w-id="82fb0296-7c5b-8557-d527-e0c129c547ce"
                delay={300}
                hover={false}
                tag="div"
              >
                <DropdownToggle
                  className={_utils.cx(_styles, "desktop_dropdown-toggle")}
                  tag="div"
                >
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown-icon-6")}
                    content=""
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <Block tag="div">{"Product"}</Block>
                </DropdownToggle>
                <DropdownList
                  className={_utils.cx(_styles, "product_dropdown-list")}
                  tag="nav"
                >
                  <DropdownWrapper
                    className={_utils.cx(_styles, "dropdown-3")}
                    delay={0}
                    hover={false}
                    tag="div"
                  >
                    <DropdownToggle
                      className={_utils.cx(_styles, "dropdown-toggle")}
                      tag="div"
                    >
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(_styles, "navbar08_dropdown-link")}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(
                            _styles,
                            "navbar08_icon-wrapper"
                          )}
                          tag="div"
                        >
                          <HtmlEmbed
                            className={_utils.cx(_styles, "icon-1x1-xsmall")}
                            content=""
                            value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cpath%20d%3D%22M19%2018.5V17.5C19%2016.5681%2018.3626%2015.785%2017.5%2015.563M15.75%209.64538C16.483%209.94207%2017%2010.6607%2017%2011.5C17%2012.3393%2016.483%2013.0579%2015.75%2013.3546M16.5%2018.5C16.5%2017.5681%2016.5%2017.1022%2016.3478%2016.7346C16.1448%2016.2446%2015.7554%2015.8552%2015.2654%2015.6522C14.8978%2015.5%2014.4319%2015.5%2013.5%2015.5H12C11.0681%2015.5%2010.6022%2015.5%2010.2346%2015.6522C9.74458%2015.8552%209.35523%2016.2446%209.15224%2016.7346C9%2017.1022%209%2017.5681%209%2018.5M14.75%2011.5C14.75%2012.6046%2013.8546%2013.5%2012.75%2013.5C11.6454%2013.5%2010.75%2012.6046%2010.75%2011.5C10.75%2010.3954%2011.6454%209.5%2012.75%209.5C13.8546%209.5%2014.75%2010.3954%2014.75%2011.5Z%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        </Block>
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"HR"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <HtmlEmbed
                        className={_utils.cx(_styles, "dropdown-icon-6")}
                        content=""
                        value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </DropdownToggle>
                    <DropdownList
                      className={_utils.cx(_styles, "saprate-dropdown-list")}
                      tag="nav"
                    >
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Applicant Tracking System"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Referral Program"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Easy Apply"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c547ee-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Smart Candidate Matching"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c547f3-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Streamlined Onboarding"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                    </DropdownList>
                  </DropdownWrapper>
                  <DropdownWrapper
                    className={_utils.cx(_styles, "dropdown-3")}
                    delay={0}
                    hover={false}
                    tag="div"
                  >
                    <DropdownToggle
                      className={_utils.cx(_styles, "dropdown-toggle")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "dropdown-icon-6")}
                        content=""
                        value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(_styles, "navbar08_dropdown-link")}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(
                            _styles,
                            "navbar08_icon-wrapper"
                          )}
                          tag="div"
                        >
                          <HtmlEmbed
                            className={_utils.cx(_styles, "icon-1x1-xsmall")}
                            content=""
                            value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_703_85381)%22%3E%0A%3Cpath%20d%3D%22M18.5%2013H9.5M18.5%2014.25V12.4C18.5%2011.5599%2018.5%2011.1399%2018.3365%2010.819C18.1927%2010.5368%2017.9632%2010.3073%2017.681%2010.1635C17.3601%2010%2016.9401%2010%2016.1%2010H11.9C11.0599%2010%2010.6399%2010%2010.319%2010.1635C10.0368%2010.3073%209.8073%2010.5368%209.66349%2010.819C9.5%2011.1399%209.5%2011.5599%209.5%2012.4V16.6C9.5%2017.4401%209.5%2017.8601%209.66349%2018.181C9.8073%2018.4632%2010.0368%2018.6927%2010.319%2018.8365C10.6399%2019%2011.0599%2019%2011.9%2019H14M16%209V11M12%209V11M15.25%2017.5L16.25%2018.5L18.5%2016.25%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_703_85381%22%3E%0A%3Crect%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22white%22%20transform%3D%22translate(8%208)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                          />
                        </Block>
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Scheduling"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                    </DropdownToggle>
                    <DropdownList
                      className={_utils.cx(_styles, "saprate-dropdown-list")}
                      tag="nav"
                    >
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Seamless Integration"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Team Communication"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c5480d-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Project Management"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c54812-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Resource CapacityReport"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c54817-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Track Job Schedule"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                    </DropdownList>
                  </DropdownWrapper>
                  <DropdownWrapper
                    className={_utils.cx(_styles, "dropdown-3")}
                    delay={0}
                    hover={false}
                    tag="div"
                  >
                    <DropdownToggle
                      className={_utils.cx(_styles, "dropdown-toggle")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "dropdown-icon-6")}
                        content=""
                        value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(_styles, "navbar08_dropdown-link")}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(
                            _styles,
                            "navbar08_icon-wrapper"
                          )}
                          tag="div"
                        >
                          <HtmlEmbed
                            className={_utils.cx(_styles, "icon-1x1-xsmall")}
                            content=""
                            value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cpath%20d%3D%22M19.35%2013.75L18.3503%2014.75L17.35%2013.75M18.4725%2014.5C18.4907%2014.3358%2018.5%2014.169%2018.5%2014C18.5%2011.5147%2016.4853%209.5%2014%209.5C11.5147%209.5%209.5%2011.5147%209.5%2014C9.5%2016.4853%2011.5147%2018.5%2014%2018.5C15.4136%2018.5%2016.675%2017.8482%2017.5%2016.8287M14%2011.5V14L15.5%2015%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        </Block>
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Time Tracking"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                    </DropdownToggle>
                    <DropdownList
                      className={_utils.cx(_styles, "saprate-dropdown-list")}
                      tag="nav"
                    >
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Gamification"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Geofencing"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Timesheet Submission"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c54836-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Foreman Mode"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c5483b-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Integrated Solution"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c54840-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Crew Messaging"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c54845-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Reports"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c5484a-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Multilingual Support"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c5484f-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Time Off Requests"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                    </DropdownList>
                  </DropdownWrapper>
                  <DropdownWrapper
                    className={_utils.cx(_styles, "dropdown-3")}
                    delay={0}
                    hover={false}
                    tag="div"
                  >
                    <DropdownToggle
                      className={_utils.cx(_styles, "dropdown-toggle")}
                      tag="div"
                    >
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(_styles, "navbar08_dropdown-link")}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(
                            _styles,
                            "navbar08_icon-wrapper"
                          )}
                          tag="div"
                        >
                          <HtmlEmbed
                            className={_utils.cx(_styles, "icon-1x1-xsmall")}
                            content=""
                            value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cpath%20d%3D%22M11%2016C11%2017.1046%2011.8954%2018%2013%2018H15C16.1046%2018%2017%2017.1046%2017%2016C17%2014.8954%2016.1046%2014%2015%2014H13C11.8954%2014%2011%2013.1046%2011%2012C11%2010.8954%2011.8954%2010%2013%2010H15C16.1046%2010%2017%2010.8954%2017%2012M14%209V19%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        </Block>
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Payroll"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <HtmlEmbed
                        className={_utils.cx(_styles, "dropdown-icon-6")}
                        content=""
                        value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </DropdownToggle>
                    <DropdownList
                      className={_utils.cx(_styles, "saprate-dropdown-list")}
                      tag="nav"
                    >
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Automated Payroll"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Prevailing Wages"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Union Configuration"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c5486e-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Davis Bacon Certified Payroll"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c54873-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Payroll Reports"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c54878-29c547b7"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Payroll Backoffice"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                    </DropdownList>
                  </DropdownWrapper>
                  <DropdownWrapper
                    className={_utils.cx(_styles, "dropdown-3")}
                    delay={0}
                    hover={false}
                    tag="div"
                  >
                    <DropdownToggle
                      className={_utils.cx(_styles, "dropdown-toggle")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "dropdown-icon-6")}
                        content=""
                        value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(_styles, "navbar08_dropdown-link")}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(
                            _styles,
                            "navbar08_icon-wrapper"
                          )}
                          tag="div"
                        >
                          <HtmlEmbed
                            className={_utils.cx(_styles, "icon-1x1-xsmall")}
                            content=""
                            value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cpath%20d%3D%22M15.75%2013.75H15.25L14.5%2015.25L13.5%2012.25L12.75%2013.75H12.25M13.9966%2010.5679C12.9969%209.3992%2011.3299%209.08482%2010.0773%2010.155C8.82482%2011.2252%208.64848%2013.0145%209.6321%2014.2802C10.375%2015.2362%2012.4856%2017.1555%2013.474%2018.0374C13.6557%2018.1996%2013.7465%2018.2806%2013.8529%2018.3125C13.9453%2018.3403%2014.0479%2018.3403%2014.1402%2018.3125C14.2466%2018.2806%2014.3375%2018.1996%2014.5191%2018.0374C15.5075%2017.1555%2017.6181%2015.2362%2018.3611%2014.2802C19.3447%2013.0145%2019.1899%2011.2139%2017.9158%2010.155C16.6417%209.09608%2014.9963%209.3992%2013.9966%2010.5679Z%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        </Block>
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Benefits"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                    </DropdownToggle>
                    <DropdownList
                      className={_utils.cx(_styles, "saprate-dropdown-list")}
                      tag="nav"
                    >
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Total Benefits Solution"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Employee Benefits Compliance"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                      <Link
                        block="inline"
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "navbar08_dropdown-link",
                          "sub-menu"
                        )}
                        options={{
                          href: "#",
                        }}
                      >
                        <Block
                          className={_utils.cx(_styles, "navbar08_item-right")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-tiny"
                            )}
                            tag="div"
                          >
                            <Block
                              className={_utils.cx(
                                _styles,
                                "text-weight-semibold",
                                "text-color-gray900"
                              )}
                              tag="div"
                            >
                              {"Expert Administrative Services"}
                            </Block>
                          </Block>
                        </Block>
                      </Link>
                    </DropdownList>
                  </DropdownWrapper>
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "nav-big-link")}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(_styles, "navbar_item-big")}
                      tag="div"
                    >
                      <Block tag="div">
                        <Block
                          className={_utils.cx(_styles, "text-size-18-nav")}
                          tag="div"
                        >
                          {"Seamlessly connect your existing stack"}
                        </Block>
                      </Block>
                      <Block
                        className={_utils.cx(
                          _styles,
                          "margin-bottom",
                          "margin-tiny"
                        )}
                        tag="div"
                      >
                        <Block tag="div">
                          {"Lumber integrates with 20+ applications"}
                        </Block>
                      </Block>
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "nav-view-more")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_82fb0296-7c5b-8557-d527-e0c129c548b7-29c547b7"
                      )}
                      tag="div"
                    >
                      <Block tag="div">{"View more"}</Block>
                      <HtmlEmbed
                        className={_utils.cx(_styles, "icon-1x1-xsmall")}
                        content=""
                        value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.5%2012H20.5M20.5%2012L14.5%206M20.5%2012L14.5%2018%22%20stroke%3D%22black%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </Block>
                  </Link>
                </DropdownList>
              </DropdownWrapper>
              <DropdownWrapper
                className={_utils.cx(_styles, "desktop_menu-dropdown")}
                data-w-id="82fb0296-7c5b-8557-d527-e0c129c548bb"
                delay={300}
                hover={false}
                tag="div"
              >
                <DropdownToggle
                  className={_utils.cx(_styles, "desktop_dropdown-toggle")}
                  tag="div"
                >
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown-icon-6")}
                    content=""
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <Block tag="div">{"Resources"}</Block>
                </DropdownToggle>
                <DropdownList
                  className={_utils.cx(_styles, "toolkit-menu-list")}
                  tag="nav"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "toolkit-menu-link")}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(_styles, "navbar08_icon-wrapper")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "icon-1x1-xsmall")}
                        content=""
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cpath%20d%3D%22M15%2013.5H12M13%2015.5H12M16%2011.5H12M18%2013.25V11.4C18%2010.5599%2018%2010.1399%2017.8365%209.81901C17.6927%209.53677%2017.4632%209.3073%2017.181%209.16349C16.8601%209%2016.4401%209%2015.6%209H12.4C11.5599%209%2011.1399%209%2010.819%209.16349C10.5368%209.3073%2010.3073%209.53677%2010.1635%209.81901C10%2010.1399%2010%2010.5599%2010%2011.4V16.6C10%2017.4401%2010%2017.8601%2010.1635%2018.181C10.3073%2018.4632%2010.5368%2018.6927%2010.819%2018.8365C11.1399%2019%2011.5599%2019%2012.4%2019H13.75M19%2019L18.25%2018.25M18.75%2017C18.75%2017.9665%2017.9665%2018.75%2017%2018.75C16.0335%2018.75%2015.25%2017.9665%2015.25%2017C15.25%2016.0335%2016.0335%2015.25%2017%2015.25C17.9665%2015.25%2018.75%2016.0335%2018.75%2017Z%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "nav-item-holder")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(
                          _styles,
                          "text-weight-semibold",
                          "text-color-gray900"
                        )}
                        tag="div"
                      >
                        {"Blogs"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "menu-sub-text")}
                        tag="div"
                      >
                        {"Dive into latest insights and industry trends"}
                      </Block>
                    </Block>
                  </Link>
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "toolkit-menu-link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_82fb0296-7c5b-8557-d527-e0c129c548c9-29c547b7"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(_styles, "navbar08_icon-wrapper")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "icon-1x1-xsmall")}
                        content=""
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cpath%20d%3D%22M10.5%2010.4938C10.5%2010.0082%2010.5%209.76541%2010.6012%209.63157C10.6894%209.51498%2010.8243%209.44283%2010.9702%209.43411C11.1377%209.42411%2011.3397%209.55879%2011.7438%209.82814L17.0015%2013.3333C17.3354%2013.5559%2017.5023%2013.6672%2017.5605%2013.8074C17.6113%2013.9301%2017.6113%2014.0679%2017.5605%2014.1905C17.5023%2014.3308%2017.3354%2014.442%2017.0015%2014.6646L11.7438%2018.1698C11.3397%2018.4391%2011.1377%2018.5738%2010.9702%2018.5638C10.8243%2018.5551%2010.6894%2018.483%2010.6012%2018.3664C10.5%2018.2325%2010.5%2017.9897%2010.5%2017.5042V10.4938Z%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "nav-item-holder")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(
                          _styles,
                          "text-weight-semibold",
                          "text-color-gray900"
                        )}
                        tag="div"
                      >
                        {"Webinars"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "menu-sub-text")}
                        tag="div"
                      >
                        {"Live and on-demand learning from industry pros"}
                      </Block>
                    </Block>
                  </Link>
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "toolkit-menu-link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_82fb0296-7c5b-8557-d527-e0c129c548d1-29c547b7"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(_styles, "navbar08_icon-wrapper")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "icon-1x1-xsmall")}
                        content=""
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cpath%20d%3D%22M18.5%2018.5L16.325%2016.325M13.5%2011C14.8807%2011%2016%2012.1193%2016%2013.5M17.5%2013.5C17.5%2015.7091%2015.7091%2017.5%2013.5%2017.5C11.2909%2017.5%209.5%2015.7091%209.5%2013.5C9.5%2011.2909%2011.2909%209.5%2013.5%209.5C15.7091%209.5%2017.5%2011.2909%2017.5%2013.5Z%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "nav-item-holder")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(
                          _styles,
                          "text-weight-semibold",
                          "text-color-gray900"
                        )}
                        tag="div"
                      >
                        {"Wiki"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "menu-sub-text")}
                        tag="div"
                      >
                        {"Your go-to hub for construction compliance knowledge"}
                      </Block>
                    </Block>
                  </Link>
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "toolkit-menu-link")}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(_styles, "navbar08_icon-wrapper")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "icon-1x1-xsmall")}
                        content=""
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cpath%20d%3D%22M14%2018.5L13.95%2018.425C13.6027%2017.904%2013.429%2017.6435%2013.1996%2017.4549C12.9964%2017.288%2012.7624%2017.1627%2012.5108%2017.0863C12.2266%2017%2011.9136%2017%2011.2874%2017H10.6C10.0399%2017%209.75992%2017%209.54601%2016.891C9.35785%2016.7951%209.20487%2016.6422%209.10899%2016.454C9%2016.2401%209%2015.9601%209%2015.4V11.1C9%2010.5399%209%2010.2599%209.10899%2010.046C9.20487%209.85785%209.35785%209.70487%209.54601%209.60899C9.75992%209.5%2010.0399%209.5%2010.6%209.5H10.8C11.9201%209.5%2012.4802%209.5%2012.908%209.71799C13.2843%209.90973%2013.5903%2010.2157%2013.782%2010.592C14%2011.0198%2014%2011.5799%2014%2012.7M14%2018.5V12.7M14%2018.5L14.05%2018.425C14.3973%2017.904%2014.571%2017.6435%2014.8004%2017.4549C15.0036%2017.288%2015.2376%2017.1627%2015.4892%2017.0863C15.7734%2017%2016.0864%2017%2016.7126%2017H17.4C17.9601%2017%2018.2401%2017%2018.454%2016.891C18.6422%2016.7951%2018.7951%2016.6422%2018.891%2016.454C19%2016.2401%2019%2015.9601%2019%2015.4V11.1C19%2010.5399%2019%2010.2599%2018.891%2010.046C18.7951%209.85785%2018.6422%209.70487%2018.454%209.60899C18.2401%209.5%2017.9601%209.5%2017.4%209.5H17.2C16.0799%209.5%2015.5198%209.5%2015.092%209.71799C14.7157%209.90973%2014.4097%2010.2157%2014.218%2010.592C14%2011.0198%2014%2011.5799%2014%2012.7%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "nav-item-holder")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(
                          _styles,
                          "text-weight-semibold",
                          "text-color-gray900"
                        )}
                        tag="div"
                      >
                        {"Reports & Guides"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "menu-sub-text")}
                        tag="div"
                      >
                        {
                          "In-depth resources to power your construction success"
                        }
                      </Block>
                    </Block>
                  </Link>
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "toolkit-menu-link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_82fb0296-7c5b-8557-d527-e0c129c548e1-29c547b7"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(_styles, "navbar08_icon-wrapper")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "icon-1x1-xsmall")}
                        content=""
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cpath%20d%3D%22M18.5%2017V14C18.5%2011.5147%2016.4853%209.5%2014%209.5C11.5147%209.5%209.5%2011.5147%209.5%2014V17M10.75%2018.5C10.0596%2018.5%209.5%2017.9404%209.5%2017.25V16.25C9.5%2015.5596%2010.0596%2015%2010.75%2015C11.4404%2015%2012%2015.5596%2012%2016.25V17.25C12%2017.9404%2011.4404%2018.5%2010.75%2018.5ZM17.25%2018.5C16.5596%2018.5%2016%2017.9404%2016%2017.25V16.25C16%2015.5596%2016.5596%2015%2017.25%2015C17.9404%2015%2018.5%2015.5596%2018.5%2016.25V17.25C18.5%2017.9404%2017.9404%2018.5%2017.25%2018.5Z%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "nav-item-holder")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(
                          _styles,
                          "text-weight-semibold",
                          "text-color-gray900"
                        )}
                        tag="div"
                      >
                        {"Podcasts"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "menu-sub-text")}
                        tag="div"
                      >
                        {"Tune in to construction conversations that matter"}
                      </Block>
                    </Block>
                  </Link>
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "toolkit-menu-link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_82fb0296-7c5b-8557-d527-e0c129c548e9-29c547b7"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(_styles, "navbar08_icon-wrapper")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "icon-1x1-xsmall")}
                        content=""
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cpath%20d%3D%22M10.5%2011.9C10.5%2011.0599%2010.5%2010.6399%2010.6635%2010.319C10.8073%2010.0368%2011.0368%209.8073%2011.319%209.66349C11.6399%209.5%2012.0599%209.5%2012.9%209.5H15.1C15.9401%209.5%2016.3601%209.5%2016.681%209.66349C16.9632%209.8073%2017.1927%2010.0368%2017.3365%2010.319C17.5%2010.6399%2017.5%2011.0599%2017.5%2011.9V18.5L14%2016.5L10.5%2018.5V11.9Z%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "nav-item-holder")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(
                          _styles,
                          "text-weight-semibold",
                          "text-color-gray900"
                        )}
                        tag="div"
                      >
                        {"Glossary"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "menu-sub-text")}
                        tag="div"
                      >
                        {
                          "Clear, concise definitions of 100+ construction terms"
                        }
                      </Block>
                    </Block>
                  </Link>
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "nav-side-link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_82fb0296-7c5b-8557-d527-e0c129c548f1-29c547b7"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    <Image
                      alt=""
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66de000cfa9ffe6669635b8d_Image%20wrap.webp"
                      width="240"
                    />
                    <Block
                      className={_utils.cx(_styles, "v-flex-12")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(_styles, "navbar_item-big")}
                        tag="div"
                      >
                        <Block
                          className={_utils.cx(_styles, "v-flex-4")}
                          tag="div"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "text-weight-semibold"
                            )}
                            tag="div"
                          >
                            {"Free AI Audit Tool"}
                          </Block>
                          <Block
                            className={_utils.cx(_styles, "menu-sub-text")}
                            tag="div"
                          >
                            {
                              "Get your certified payroll report scanned for any compliance issues."
                            }
                          </Block>
                        </Block>
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "nav-side-link-btn")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_82fb0296-7c5b-8557-d527-e0c129c548fa-29c547b7"
                        )}
                        tag="div"
                      >
                        <Block tag="div">{"View more"}</Block>
                        <HtmlEmbed
                          className={_utils.cx(_styles, "icon-1x1-xsmall")}
                          content=""
                          value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22inherit%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.5%2012H20.5M20.5%2012L14.5%206M20.5%2012L14.5%2018%22%20stroke%3D%22%23FF6F61%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </Block>
                    </Block>
                  </Link>
                </DropdownList>
              </DropdownWrapper>
              <DropdownWrapper
                className={_utils.cx(_styles, "desktop_menu-dropdown")}
                data-w-id="82fb0296-7c5b-8557-d527-e0c129c548fe"
                delay={300}
                hover={false}
                tag="div"
              >
                <DropdownToggle
                  className={_utils.cx(_styles, "desktop_dropdown-toggle")}
                  tag="div"
                >
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown-icon-6")}
                    content=""
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <Block tag="div">{"Company"}</Block>
                </DropdownToggle>
                <DropdownList
                  className={_utils.cx(_styles, "company-menu-list")}
                  tag="nav"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "toolkit-menu-link")}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(_styles, "navbar08_icon-wrapper")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "icon-1x1-xsmall")}
                        content=""
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cpath%20d%3D%22M11.75%2013.5H10.3C10.02%2013.5%209.87996%2013.5%209.773%2013.5545C9.67892%2013.6024%209.60243%2013.6789%209.5545%2013.773C9.5%2013.88%209.5%2014.02%209.5%2014.3V18.5M16.25%2013.5H17.7C17.98%2013.5%2018.12%2013.5%2018.227%2013.5545C18.3211%2013.6024%2018.3976%2013.6789%2018.4455%2013.773C18.5%2013.88%2018.5%2014.02%2018.5%2014.3V18.5M16.25%2018.5V11.1C16.25%2010.5399%2016.25%2010.2599%2016.141%2010.046C16.0451%209.85785%2015.8922%209.70487%2015.704%209.60899C15.4901%209.5%2015.2101%209.5%2014.65%209.5H13.35C12.7899%209.5%2012.5099%209.5%2012.296%209.60899C12.1078%209.70487%2011.9549%209.85785%2011.859%2010.046C11.75%2010.2599%2011.75%2010.5399%2011.75%2011.1V18.5M19%2018.5H9M13.5%2011.5H14.5M13.5%2013.5H14.5M13.5%2015.5H14.5%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "nav-item-holder")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(
                          _styles,
                          "text-weight-semibold",
                          "text-color-gray900"
                        )}
                        tag="div"
                      >
                        {"About Lumber"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "menu-sub-text")}
                        tag="div"
                      >
                        {"Discover the team and vision behind Lumber"}
                      </Block>
                    </Block>
                  </Link>
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "toolkit-menu-link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_82fb0296-7c5b-8557-d527-e0c129c5490e-29c547b7"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(_styles, "navbar08_icon-wrapper")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "icon-1x1-xsmall")}
                        content=""
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_9200_89851)%22%3E%0A%3Cpath%20d%3D%22M10%2015L10.7873%2018.1492C10.8095%2018.2378%2010.8205%2018.2821%2010.8336%2018.3208C10.9616%2018.6985%2011.3018%2018.9641%2011.6993%2018.9966C11.74%2019%2011.7856%2019%2011.8769%2019C11.9912%2019%2012.0484%2019%2012.0965%2018.9953C12.5725%2018.9491%2012.9492%2018.5725%2012.9953%2018.0965C13%2018.0483%2013%2017.9912%2013%2017.8769V10.75M17.25%2014.75C18.2165%2014.75%2019%2013.9665%2019%2013C19%2012.0335%2018.2165%2011.25%2017.25%2011.25M13.125%2010.75H11.25C10.0074%2010.75%209%2011.7573%209%2013C9%2014.2426%2010.0074%2015.25%2011.25%2015.25H13.125C14.0082%2015.25%2015.0886%2015.7234%2015.9221%2016.1778C16.4084%2016.4429%2016.6515%2016.5754%2016.8108%2016.5559C16.9584%2016.5378%2017.0701%2016.4715%2017.1567%2016.3505C17.25%2016.22%2017.25%2015.959%2017.25%2015.4368V10.5631C17.25%2010.041%2017.25%209.77988%2017.1567%209.6494C17.0701%209.52841%2016.9584%209.46211%2016.8108%209.44402C16.6515%209.42452%2016.4084%209.55706%2015.9221%209.82213C15.0886%2010.2765%2014.0082%2010.75%2013.125%2010.75Z%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_9200_89851%22%3E%0A%3Crect%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22white%22%20transform%3D%22translate(8%208)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "nav-item-holder")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(
                          _styles,
                          "text-weight-semibold",
                          "text-color-gray900"
                        )}
                        tag="div"
                      >
                        {"Newsroom"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "menu-sub-text")}
                        tag="div"
                      >
                        {"Catch the latest buzz and breakthroughs from Lumber"}
                      </Block>
                    </Block>
                  </Link>
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "toolkit-menu-link")}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(_styles, "navbar08_icon-wrapper")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "icon-1x1-xsmall")}
                        content=""
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_9200_89863)%22%3E%0A%3Cpath%20d%3D%22M20%2012C20%2012.532%2019.872%2013.1025%2019.619%2013.696C19.538%2013.886%2019.3535%2014.0005%2019.159%2014.0005C19.0935%2014.0005%2019.027%2013.9875%2018.963%2013.96C18.7085%2013.852%2018.5905%2013.558%2018.699%2013.304C18.8985%2012.835%2019%2012.3965%2019%2012C19%2010.645%2017.9695%209.50001%2016.75%209.50001C15.6325%209.50001%2014.996%209.95251%2014.567%2010.347L12.655%2012.1215C12.4785%2012.2985%2012.4365%2012.596%2012.5735%2012.7865C12.663%2012.911%2012.7945%2012.986%2012.943%2012.998C13.0905%2013.0115%2013.2335%2012.9575%2013.337%2012.853L15.4235%2010.8555C15.6215%2010.665%2015.939%2010.6715%2016.1305%2010.871C16.3215%2011.0705%2016.3145%2011.387%2016.115%2011.578L15.496%2012.1705L17.8695%2014.2535C18.4255%2014.7415%2018.5625%2015.561%2018.188%2016.1595C17.9575%2016.5275%2017.581%2016.775%2017.1555%2016.8375C17.1265%2016.8415%2017.098%2016.845%2017.069%2016.8475C17.067%2017.105%2016.9985%2017.36%2016.858%2017.585C16.6275%2017.953%2016.251%2018.2005%2015.8255%2018.263C15.733%2018.276%2015.641%2018.2815%2015.549%2018.277C15.522%2018.468%2015.457%2018.654%2015.3515%2018.8225C15.121%2019.1905%2014.7495%2019.516%2014.1055%2019.516C13.752%2019.516%2013.409%2019.3885%2013.14%2019.152L11.588%2017.76C9.9505%2016.28%208%2014.0805%208%2012C8%2010.07%209.458%208.50001%2011.25%208.50001C11.663%208.50001%2012.0665%208.58401%2012.4485%208.75001C12.702%208.86001%2012.8185%209.15451%2012.7085%209.40751C12.5985%209.66051%2012.304%209.77651%2012.051%209.66751C11.795%209.55651%2011.5255%209.50051%2011.2495%209.50051C10.03%209.50051%208.9995%2010.6455%208.9995%2012.0005C8.9995%2013.3375%2010.156%2015.119%2012.257%2017.0175L13.804%2018.4045C13.9025%2018.491%2014.039%2018.531%2014.174%2018.5115C14.311%2018.4915%2014.4285%2018.414%2014.504%2018.2925C14.619%2018.108%2014.562%2017.834%2014.3735%2017.669L12.77%2016.1445C12.5705%2015.9545%2012.562%2015.6385%2012.7515%2015.438C12.9415%2015.238%2013.2575%2015.2295%2013.458%2015.4185L15.319%2017.1755C15.4085%2017.2535%2015.547%2017.2945%2015.68%2017.2735C15.817%2017.2535%2015.9345%2017.1755%2016.01%2017.0545C16.125%2016.87%2016.068%2016.596%2015.8795%2016.4305L14.0995%2014.819C13.8955%2014.6345%2013.879%2014.319%2014.063%2014.1145C14.2465%2013.91%2014.562%2013.892%2014.7675%2014.075L16.6385%2015.74C16.7385%2015.828%2016.8755%2015.869%2017.01%2015.848C17.147%2015.828%2017.2645%2015.75%2017.34%2015.629C17.455%2015.4445%2017.398%2015.1705%2017.2095%2015.005L14.7705%2012.8645L14.0355%2013.568C13.732%2013.872%2013.3035%2014.03%2012.8615%2013.995C12.4225%2013.9595%2012.021%2013.732%2011.761%2013.3705C11.3385%2012.7835%2011.424%2011.937%2011.96%2011.401L13.8875%209.61201C14.4085%209.13351%2015.2695%208.49951%2016.749%208.49951C18.541%208.49951%2019.999%2010.0695%2019.999%2011.9995L20%2012Z%22%20fill%3D%22%2340956B%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_9200_89863%22%3E%0A%3Crect%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22white%22%20transform%3D%22translate(8%208)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "nav-item-holder")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(
                          _styles,
                          "text-weight-semibold",
                          "text-color-gray900"
                        )}
                        tag="div"
                      >
                        {"Partners"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "menu-sub-text")}
                        tag="div"
                      >
                        {
                          "Collaborating with the best to drive industry excellence"
                        }
                      </Block>
                    </Block>
                  </Link>
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "toolkit-menu-link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_82fb0296-7c5b-8557-d527-e0c129c5491f-29c547b7"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(_styles, "navbar08_icon-wrapper")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "icon-1x1-xsmall")}
                        content=""
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23AEFFD7%22%2F%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20stroke%3D%22%23D0FFE8%22%20stroke-width%3D%224%22%2F%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_9200_89873)%22%3E%0A%3Cpath%20d%3D%22M13.0001%2014.5C13.2148%2014.787%2013.4888%2015.0246%2013.8034%2015.1965C14.118%2015.3683%2014.4659%2015.4705%2014.8234%2015.4961C15.181%2015.5218%2015.5399%2015.4702%2015.8758%2015.3449C16.2117%2015.2196%2016.5167%2015.0235%2016.7701%2014.77L18.2701%2013.27C18.7255%2012.7985%2018.9775%2012.167%2018.9718%2011.5115C18.9661%2010.856%2018.7032%2010.229%2018.2396%209.76544C17.7761%209.30192%2017.1491%209.03899%2016.4936%209.0333C15.8381%209.0276%2015.2066%209.27959%2014.7351%209.73498L13.8751%2010.59M15.0001%2013.5C14.7854%2013.2129%2014.5114%2012.9754%2014.1968%2012.8035C13.8822%2012.6316%2013.5343%2012.5294%2013.1768%2012.5038C12.8192%2012.4782%2012.4603%2012.5298%2012.1244%2012.6551C11.7885%2012.7804%2011.4835%2012.9764%2011.2301%2013.23L9.7301%2014.73C9.2747%2015.2015%209.02272%2015.833%209.02841%2016.4885C9.03411%2017.144%209.29703%2017.771%209.76055%2018.2345C10.2241%2018.698%2010.8511%2018.961%2011.5066%2018.9667C12.1621%2018.9724%2012.7936%2018.7204%2013.2651%2018.265L14.1201%2017.41%22%20stroke%3D%22%2340956B%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_9200_89873%22%3E%0A%3Crect%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22white%22%20transform%3D%22translate(8%208)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "nav-item-holder")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(
                          _styles,
                          "text-weight-semibold",
                          "text-color-gray900"
                        )}
                        tag="div"
                      >
                        {"Associations"}
                      </Block>
                      <Block
                        className={_utils.cx(_styles, "menu-sub-text")}
                        tag="div"
                      >
                        {"Proudly connected to leading industry associations"}
                      </Block>
                    </Block>
                  </Link>
                </DropdownList>
              </DropdownWrapper>
              <Link
                block=""
                button={false}
                className={_utils.cx(_styles, "nav-contact", "new-mobile")}
                options={{
                  href: "#",
                }}
              >
                {"Contact"}
              </Link>
            </Block>
            <Block className={_utils.cx(_styles, "nav-cta-wrapper")} tag="div">
              <Link
                block=""
                button={false}
                className={_utils.cx(_styles, "nav-contact", "mobile")}
                options={{
                  href: "#",
                }}
              >
                {"Book a demo"}
              </Link>
              <Block
                className={_utils.cx(_styles, "navbar11_menu-buttons")}
                tag="div"
              >
                <Link
                  block=""
                  button={true}
                  className={_utils.cx(
                    _styles,
                    "button",
                    "is-primary",
                    "no-px",
                    "n",
                    "mobile"
                  )}
                  id={_utils.cx(_styles, "nav-btn")}
                  options={{
                    href: "#",
                  }}
                >
                  {"Talk to us"}
                </Link>
                <Link
                  block=""
                  button={true}
                  className={_utils.cx(
                    _styles,
                    "button",
                    "is-primary",
                    "no-px",
                    "n"
                  )}
                  id={_utils.cx(_styles, "nav-btn")}
                  options={{
                    href: "#",
                  }}
                >
                  {"Book a demo"}
                </Link>
              </Block>
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
