import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/index";
import Main from "./components/main/index";
import Soccer from "./components/soccer/index";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <NavBar></NavBar>
      {/* <div className="container"></div> */}
      {/* <div id="content-wrapper-app">
        <Main></Main>
      </div> */}
      {/* <div style={{ height: "100vh" }}> */}
      <div id="content-wrapper-app">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/test" exact component={Soccer} />
        </Switch>
      </div>
      {/* </div> */}
    </HashRouter>
  );
}

export default App;
