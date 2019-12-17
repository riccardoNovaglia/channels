import React from "react";
import { ChannelsContext } from "./Channels";

export function Banner(props) {
  function hasBannerForChannel(channel) {
    return !!props.children[channel];
  }

  return (
    <>
      <ChannelsContext.Consumer>
        {channel => hasBannerForChannel(channel) && props.children[channel]}
      </ChannelsContext.Consumer>
    </>
  );
}
