"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import Link from "./_Builtin/Link";
import NavbarBrand from "./_Builtin/NavbarBrand";
import NavbarButton from "./_Builtin/NavbarButton";
import NavbarMenu from "./_Builtin/NavbarMenu";
import NavbarWrapper from "./_Builtin/NavbarWrapper";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-490":{"id":"e-490","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-407"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e13670","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e13670","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-491":{"id":"e-491","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-590"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e13670","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64dd6d7c-fe7f-f0f1-c45a-27e587e13670","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-582":{"id":"e-582","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-119","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-583"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6628d79054b6e013ddab6d08|090877a6-4f83-2308-9692-ad17afd4a2d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6628d79054b6e013ddab6d08|090877a6-4f83-2308-9692-ad17afd4a2d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714124323191},"e-583":{"id":"e-583","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-120","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-582"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6628d79054b6e013ddab6d08|090877a6-4f83-2308-9692-ad17afd4a2d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6628d79054b6e013ddab6d08|090877a6-4f83-2308-9692-ad17afd4a2d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714124323191},"e-704":{"id":"e-704","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-119","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-705"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66605adf2ae25c24a37ca03f|31cfc87a-3ebe-fdae-3688-6764755356e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66605adf2ae25c24a37ca03f|31cfc87a-3ebe-fdae-3688-6764755356e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717591813642},"e-705":{"id":"e-705","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-120","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-704"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66605adf2ae25c24a37ca03f|31cfc87a-3ebe-fdae-3688-6764755356e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66605adf2ae25c24a37ca03f|31cfc87a-3ebe-fdae-3688-6764755356e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717591813642},"e-1899":{"id":"e-1899","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-260","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1900"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c547c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c547c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-1900":{"id":"e-1900","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-261","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1899"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82fb0296-7c5b-8557-d527-e0c129c547c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82fb0296-7c5b-8557-d527-e0c129c547c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725989127205},"e-2216":{"id":"e-2216","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2569"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef134637a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef134637a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727287016799},"e-2217":{"id":"e-2217","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2568"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3b223fad-c087-8cb2-1c8a-2f4ef134637a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b223fad-c087-8cb2-1c8a-2f4ef134637a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727287016805},"e-2568":{"id":"e-2568","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2569"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"a872b31d-8eed-3003-b021-4d98ab561022","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a872b31d-8eed-3003-b021-4d98ab561022","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727287016799},"e-2569":{"id":"e-2569","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2568"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"a872b31d-8eed-3003-b021-4d98ab561022","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a872b31d-8eed-3003-b021-4d98ab561022","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727287016805},"e-5389":{"id":"e-5389","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-518","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5390"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761548565416},"e-5390":{"id":"e-5390","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-519","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5389"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68e69d5040463cf035150067|069e5427-d318-846e-4dbe-295853bdd4e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761548565416}},"actionLists":{"a-101":{"id":"a-101","title":"Navbar 1 menu [Close] 3","actionItemGroups":[{"actionItems":[{"id":"a-101-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-101-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-101-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-101-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-101-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-102":{"id":"a-102","title":"Navbar 1 menu [Open] 3","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-102-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-102-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-102-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-102-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-119":{"id":"a-119","title":"Navbar 1 menu [Close] 4","actionItemGroups":[{"actionItems":[{"id":"a-119-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-119-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-119-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-119-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-119-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-120":{"id":"a-120","title":"Navbar 1 menu [Open] 4","actionItemGroups":[{"actionItems":[{"id":"a-120-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-120-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-120-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-120-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-120-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-260":{"id":"a-260","title":"Navbar 1 menu [Close] 12","actionItemGroups":[{"actionItems":[{"id":"a-260-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-260-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-260-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-260-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-260-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-261":{"id":"a-261","title":"Navbar 1 menu [Open] 12","actionItemGroups":[{"actionItems":[{"id":"a-261-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-261-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-261-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-261-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-261-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-518":{"id":"a-518","title":"Navbar 1 menu [Close] 13","actionItemGroups":[{"actionItems":[{"id":"a-518-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-518-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-518-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-518-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-518-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-519":{"id":"a-519","title":"Navbar 1 menu [Open] 13","actionItemGroups":[{"actionItems":[{"id":"a-519-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-519-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-519-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e97"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-519-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top-4","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e94"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-519-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle-3","selectorGuids":["48bec88e-2e22-0a12-5277-acf7b9668e9b"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavLumbercare({ as: _Component = Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "nav-wrap")} tag="header">
      <Block className={_utils.cx(_styles, "nav-wrap-desktop")} tag="div">
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
          data-w-id="a872b31d-8eed-3003-b021-4d98ab561022"
          fs-scrolldisable-element="smart-nav"
          tag="div"
        >
          <Block
            className={_utils.cx(_styles, "new-navbar11_container")}
            tag="div"
          >
            <NavbarBrand
              className={_utils.cx(
                _styles,
                "new-navbar11_logo-link",
                "lumber-care"
              )}
              options={{
                href: "#",
              }}
            >
              <Image
                alt=""
                className={_utils.cx(_styles, "navbar11_logo")}
                height="auto"
                loading="lazy"
                src="https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/67598abb028c69e412bd9817_Lumbercare-logo.webp"
                width="242.5"
              />
            </NavbarBrand>
            <NavbarMenu
              className={_utils.cx(
                _styles,
                "navbar1_menu-2",
                "is-page-height-tablet",
                "new-nav",
                "lumber-care"
              )}
              role="navigation"
              tag="nav"
            >
              <Block
                className={_utils.cx(_styles, "nav-cta-wrapper")}
                tag="div"
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "navbar11_menu-buttons",
                    "change-in-mob"
                  )}
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
                      "n"
                    )}
                    id={_utils.cx(_styles, "nav-btn")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Get started for free"}
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "navbar11_menu-mobil")}
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
                      "_100--in-mobile"
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
                    className={_utils.cx(
                      _styles,
                      "menu-icon_line-middle-inner"
                    )}
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
      </Block>
    </_Component>
  );
}
