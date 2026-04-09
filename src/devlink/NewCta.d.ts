import * as React from "react";
import * as Types from "./types";

declare function NewCta(props: {
  as?: React.ElementType;
  buttonLabel?: React.ReactNode;
  cta30PxHeader?: React.ReactNode;
  link?: Types.Basic.Link;
  textIs20Content?: React.ReactNode;
}): React.JSX.Element;
