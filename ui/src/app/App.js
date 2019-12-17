import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import { OnOff } from "./OnOff";
import { Alternatives } from "./Alternatives";
import { ChannelsRouter, Banner } from "../channels/Channels";

function App() {
  return (
    <div className="App">
      <ChannelsRouter>
        <Banner>
          {{
            dev: (
              <>
                <p>DEV MODE!</p>
                <NavLink to="/">Back to stable</NavLink>
              </>
            ),
            qa: (
              <>
                <p>QA MODE!</p>
                <NavLink to="/">Back to stable</NavLink>
              </>
            ),
            stable: (
              <p>Stable channel. Navigate to /dev or /qa to see what changes</p>
            )
          }}
        </Banner>

        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/on-off">on-off</NavLink>
                </li>
                <li>
                  <NavLink to="/alternatives">alt</NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <Switch>
            <Route path="/on-off">
              <OnOff />
            </Route>
            <Route path="/alternatives">
              <Alternatives />
            </Route>
            <Route>
              <Redirect to="/on-off" />
            </Route>
          </Switch>
        </Router>
      </ChannelsRouter>
    </div>
  );
}

export default App;
