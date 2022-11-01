import { CANVAS_DIMENSION, MAX_LINES, DIALOG } from "./constants.js";

export default class TextDialog {
  constructor(canvas, context) {
    this.context = context;
    this.context.font = "15px serif";
    this.complete = false;
    this.next = false;

    const that = this;
    canvas.addEventListener("click", (e) => {
      e.preventDefault();

      //responsible continuing dialog
      that.next = true;
    });
  }

  #drawBox() {
    this.context.fillStyle = "lightgreen";
    this.context.strokeStyle = "green";

    this.context.fillRect(50, 600, CANVAS_DIMENSION - 100, 150);
    this.context.strokeRect(50, 600, CANVAS_DIMENSION - 100, 150);
  }

  #drawText(scene, i) {
    this.next = false;
    const dialog = DIALOG[scene][i];
    if (!dialog) this.complete = true;
    else
      for (let line = 1; line <= MAX_LINES; line++) {
        this.context.fillStyle = "black";
        this.context.fillText(dialog[line - 1], 65, 600 + line * 15);
      }

    const that = this;
    return new Promise((r) => {
      const awaitingClickInterval = setInterval(() => {
        if (that.next) {
          clearInterval(awaitingClickInterval);
          r();
        }
      }, 5);
    });
  }

  drawText(scene) {
    const that = this;
    let i = 0;
    let begin = true;
    return new Promise((r) => {
      const drawingTextInterval = setInterval(() => {
        if (begin || that.next) {
          begin = false;
          that.#drawBox();
          that.#drawText(scene, i++).then((_) => (that.next = false));
        }
        if (that.complete) {
          that.complete = false;
          clearInterval(drawingTextInterval);
          r();
        }
      }, 5);
    });
  }
}
