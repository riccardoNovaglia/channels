import React, { useState } from "react";
import { ChannelContext } from "./App";

export function QA(props) {
  return (
    <ChannelContext.Consumer>
      {channel =>
        channel === "qa" || channel === "dev"
          ? props.children.on
          : props.children.off
      }
    </ChannelContext.Consumer>
  );
}

export function Dev(props) {
  return (
    <ChannelContext.Consumer>
      {context => (context === "dev" ? props.children.on : props.children.off)}
    </ChannelContext.Consumer>
  );
}

export function Auth(props) {
  const [checked, setChecked] = useState(false);
  const [allowed, setAllowed] = useState(false);

  if (!checked) {
    return (
      <>
        <p>Are you definitely a dev?</p>
        <button
          onClick={() => {
            setChecked(true);
            setAllowed(true);
          }}
        >
          yes
        </button>
        <button
          onClick={() => {
            setChecked(true);
            setAllowed(false);
          }}
        >
          no
        </button>
      </>
    );
  } else {
    if (allowed) {
      return props.children;
    } else {
      return <></>;
    }
  }
}
