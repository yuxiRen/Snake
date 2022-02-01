class Snake {
  head: HTMLElement;
  bodies: HTMLCollection;
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div") as HTMLElement;
    this.bodies = this.element.getElementsByTagName("div");
  }
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  set X(value: number) {
    if (value === this.X) {
      return;
    }
    if (value < 0 || value > 290) {
      throw new Error();
    }
    this.head.style.left = value + "px";
  }
  set Y(value: number) {
    if (value === this.Y) {
      return;
    }
    if (value < 0 || value > 290) {
      throw new Error();
    }
    this.head.style.top = value + "px";
  }
  increaseBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
}
export default Snake;
