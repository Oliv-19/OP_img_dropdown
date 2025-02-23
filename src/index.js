import "./index.css";
import Dropdown from "./dropdown";

function changeBackground(option) {
  this.section.className = option;
}
new Dropdown(changeBackground);
