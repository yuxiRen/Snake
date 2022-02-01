import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel();
    this.init();
  }
  init() {}
}
export default GameControl;
