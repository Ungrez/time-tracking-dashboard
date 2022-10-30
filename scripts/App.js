class App {
  constructor() {
    this.boxes = document.querySelectorAll(".main_box");
    this.counter = 0;
  }
  init() {
    if (this.counter < this.boxes.length) {
      this.boxes[this.counter].classList.add("loaded");
      setTimeout(() => {
        this.counter++;
        this.init();
      }, 300);
    }
  }
}
export const app = new App();
window.onload = () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
    app.init();
  }, 1000);
};
