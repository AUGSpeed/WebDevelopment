// index.js file
import React from "react";
import ReactDOM from "react-dom";
import events from "./eventData.json"
import Menu from "./menu"; // my new menu component in menu.js
import Home from "./home";
import Activities from "./activities";
import Membership from "./membership";

let contents = <><Menu /> <Membership /></>; 

ReactDOM.render(contents, document.getElementById("root"));