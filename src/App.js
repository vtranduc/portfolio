import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/index";
import Main from "./components/main/index";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <div className="container"></div> */}
      <div id="content-wrapper-app">
        <Main></Main>
      </div>
    </>
  );
}

export default App;
