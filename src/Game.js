import Inventory from "./Inventory.js";
import Cursor from "./Cursor.js";
import { CANVAS_DIMENSION } from "./constants.js";

// actual game window
export default class Game {
  constructor(canvas, context, width, height) {
    this.canvas = canvas;
    this.context = context;
    this.width = width;
    this.height = height;
    this.userCursor = new Cursor(canvas);
    this.playerInventory = new Inventory();

    this.setBackground("scene1");
  }

  setBackground(path) {
    const background = document.getElementById(path);

    this.context.drawImage(background, 0, 0);
  }

  update() {}

  draw(context) {}
}
