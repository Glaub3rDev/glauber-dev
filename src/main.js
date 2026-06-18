import "./style.css";

import { navbar } from "./sections/navbar.js";
import { hero } from "./sections/hero.js";

document.querySelector("#app").innerHTML = `
  ${navbar()}
  ${hero()}
`;