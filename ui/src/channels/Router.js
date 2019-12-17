import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChannelsContext } from "./Context";

export function ChannelsRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dev">
            <ChannelsContext.Provider value="dev">
              {props.children}
            </ChannelsContext.Provider>
          </Route>
          <Route path="/qa">
            <ChannelsContext.Provider value="qa">
              {props.children}
            </ChannelsContext.Provider>
          </Route>
          <Route>{props.children}</Route>
        </Switch>
      </Router>
    </>
  );
}
