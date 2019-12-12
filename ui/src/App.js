import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { OnOff } from "./OnOff";
import { Alternatives } from "./Alternatives";
import { Auth } from "./Auth";

export const ChannelContext = React.createContext("stable");

function App() {
  const [tab, setTab] = useState("on-off");

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">customer</Link>
              </li>
              <li>
                <Link to="/qa">qa</Link>
              </li>
              <li>
                <Link to="/dev">dev</Link>
              </li>
            </ul>
          </nav>
        </div>

        <button onClick={() => setTab("on-off")}>ON/OFF</button>
        <button onClick={() => setTab("alternatives")}>ALTERNATIVES</button>

        <Switch>
          <Route path="/dev">
            <ChannelContext.Provider value="dev">
              <Auth>
                <Contents tab={tab} />
              </Auth>
            </ChannelContext.Provider>
          </Route>
          <Route path="/qa">
            <ChannelContext.Provider value="qa">
              <Contents tab={tab} />
            </ChannelContext.Provider>
          </Route>
          <Route path="/">
            <Contents tab={tab} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Contents({ tab }) {
  return (
    <>
      {tab === "on-off" && <OnOff />}
      {tab === "alternatives" && <Alternatives />}
    </>
  );
}

export default App;
