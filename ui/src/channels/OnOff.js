import React from "react";
import { QA as AlternativeQa, Dev as AlternativeDev } from "./Alternatives";

export function QA(props) {
  return (
    <AlternativeQa>
      {{
        on: props.children,
        off: <></>
      }}
    </AlternativeQa>
  );
}

export function Dev(props) {
  return (
    <AlternativeDev>
      {{
        on: props.children,
        off: <></>
      }}
    </AlternativeDev>
  );
}
