import React from "react";
import ReactDOM from "react-dom";
import SearchField from "./searchField";

test("Searchfield component should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchField />, div);
  ReactDOM.unmountComponentAtNode(div);
});
