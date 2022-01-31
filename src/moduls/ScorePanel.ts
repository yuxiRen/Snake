class ScorePanel {
  score = 0;
  level = 1;
  scoreElement: HTMLElement;
  levelElement: HTMLElement;
  maxLevel: number;
  levelThreshold: number;
  constructor(maxLevel: number = 10, levelThreshold: number = 10) {
    this.scoreElement = document.getElementById("score")!;
    this.levelElement = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.levelThreshold = levelThreshold;
  }
  addScore() {
    this.score++;
    this.scoreElement.innerHTML = this.score + "";
    if (this.score % this.levelThreshold === 0) {
      this.upLevel();
    }
  }
  upLevel() {
    if (this.level < this.maxLevel) {
      this.level++;
      this.levelElement.innerHTML = this.level + "";
    }
  }
}
export default ScorePanel;
