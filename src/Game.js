import Inventory from "./Inventory.js";
import Cursor from "./Cursor.js";
import { CANVAS_DIMENSION } from "./constants.js";
import TextDialog from "./TextDialog.js";

// actual game window
export default class Game {
  constructor(canvas, context, width, height) {
    this.canvas = canvas;
    this.context = context;
    this.width = width;
    this.height = height;
    this.userCursor = new Cursor(canvas);
    this.playerInventory = new Inventory();
    this.textDialogs = new TextDialog(canvas, context);

    this.setBackground("scene1");

    // testing
    this.drawText("scene1");
  }

  drawText(scene) {
    const that = this;
    this.textDialogs.drawText(scene).then((_) => that.setBackground("scene1"));
  }

  setBackground(path) {
    const background = document.getElementById(path);

    this.context.drawImage(background, 0, 0);
  }
}
