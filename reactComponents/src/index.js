import React from "react";
import ReactDom from "react-dom";

import Cards from "./components/card";
import Header from "./components/header";

const App = () => {
  return (
    <>
      {Header}
      {Cards}
    </>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
