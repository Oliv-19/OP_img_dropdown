import "./index.css";
import Dropdown from "./dropdown";
import ImageCarousel from "./imageCarousel";


function changeBackground(option) {
  this.section.className = option;
}
new Dropdown(changeBackground);

new ImageCarousel()