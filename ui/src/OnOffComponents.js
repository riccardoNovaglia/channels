import React from "react";
import { ChannelContext } from "./App";

export function QA(props) {
  return (
    <ChannelContext.Consumer>
      {channel => (channel === "qa" || channel === "dev") && props.children}
    </ChannelContext.Consumer>
  );
}

export function Dev(props) {
  return (
    <ChannelContext.Consumer>
      {context => context === "dev" && props.children}
    </ChannelContext.Consumer>
  );
}
