export default class Dropdown {
  constructor(callback) {
    this.callback = callback;
    this.section = document.querySelector("#dropdown");
    this.dd = document.querySelector("#btn_toggle");
    this.optionsContainer = document.querySelector(".optionsContainer");
    this.eventListeners();
  }
  eventListeners() {
    this.dd.addEventListener("click", this.showUnshow);
    this.optionsContainer.addEventListener("click", this.onClick);
    
  }
  showUnshow = () => {
    if (this.optionsContainer.classList.contains("visible")) {
      this.optionsContainer.classList.remove("visible");
    } else {
        this.optionsContainer.classList.add("visible");
    }
  };
  onClick = (e) => {
    this.optionsContainer.classList.remove("visible");
    this.callback(e.target.id);
  };
  
}
