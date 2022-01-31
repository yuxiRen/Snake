class ScorePanel {
  score = 0;
  level = 1;
  scoreElement: HTMLElement;
  levelElement: HTMLElement;
  constructor() {
    this.scoreElement = document.getElementById("score")!;
    this.levelElement = document.getElementById("level")!;
  }
  addScore() {
    this.score++;
    this.scoreElement.innerHTML = this.score + "";
  }
}
