import React from "react";
import { QA, Dev } from "../channels/OnOff";

export function OnOff() {
  return (
    <>
      <hr />

      <p>
        this is always here - this is <strong>stable</strong>
      </p>
      <hr />

      <p>
        This feature is in <strong>QA</strong>, available to DEV, QA, not
        customer
      </p>
      <QA>
        <p>This feature is on</p>
      </QA>
      <hr />

      <p>
        This feature is in <strong>DEV</strong>, available to DEV only
      </p>
      <Dev>
        <p>This feature is on</p>
      </Dev>
      <hr />
    </>
  );
}
