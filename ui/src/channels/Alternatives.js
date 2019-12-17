import React from "react";

import { ChannelsContext } from "./Channels";

export function QA(props) {
  return (
    <ChannelsContext.Consumer>
      {channel =>
        channel === "qa" || channel === "dev"
          ? props.children.on
          : props.children.off
      }
    </ChannelsContext.Consumer>
  );
}

export function Dev(props) {
  return (
    <ChannelsContext.Consumer>
      {context => (context === "dev" ? props.children.on : props.children.off)}
    </ChannelsContext.Consumer>
  );
}
