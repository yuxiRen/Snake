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
    this.moveBody();
    this.head.style.left = value + "px";
  }
  set Y(value: number) {
    if (value === this.Y) {
      return;
    }
    if (value < 0 || value > 290) {
      throw new Error();
    }
    this.moveBody();
    this.head.style.top = value + "px";
  }
  increaseBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let prevX = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let prevY = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = prevX + "px";
      (this.bodies[i] as HTMLElement).style.top = prevY + "px";
    }
  }
}
export default Snake;
