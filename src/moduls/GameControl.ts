import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction = "ArrowRight";
  isLive = true;
  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel();
    this.init();
  }
  init() {
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
    this.run();
  }
  keyDownHandler(event: KeyboardEvent) {
    this.direction = event.key;
  }
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case "ArrowUp":
        Y -= 10;
        break;
      case "ArrowDown":
        Y += 10;
        break;
      case "ArrowLeft":
        X -= 10;
        break;
      case "ArrowRight":
        X += 10;
        break;
    }
    this.checkGetFood(X, Y);
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error) {
      let errorMessage = "Game Over!";
      alert(errorMessage);
      this.isLive = false;
    }

    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
  checkGetFood(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.changeCoordinate();
      this.scorePanel.addScore();
      this.snake.increaseBody();
    }
  }
}
export default GameControl;
