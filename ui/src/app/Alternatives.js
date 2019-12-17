import React from "react";
import { QA, Dev } from "../channels/Alternatives";

export function Alternatives() {
  return (
    <>
      <p>
        this is always on V1 - this is <strong>stable</strong>
      </p>
      <hr />

      <p>
        This feature is in <strong>QA</strong>, so it's V1 for customers, V2 for
        DEV and QA
      </p>
      <QA>
        {{ on: <p>New version! (V2)</p>, off: <p>Stable version! (V1)</p> }}
      </QA>
      <hr />

      <p>
        This feature is in <strong>DEV</strong>, it's V2 for DEV only, V1 for
        customers and QA
      </p>
      <Dev>
        {{ on: <p>New version! (V2)</p>, off: <p>Stable version! (V1)</p> }}
      </Dev>
      <hr />
    </>
  );
}
