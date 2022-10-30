import { CANVAS_DIMENSION } from "./constants.js";

export default class Cursor {
  constructor(canvas) {
    this.currentCursor = "default";
    this.cursorCSSVariableName = "--cursor-style";

    // test

    const that = this;
    document.addEventListener("mousemove", (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      that.x = e.clientX - rect.left;
      that.y = e.clientY - rect.top;
      that.statusTest();

      // todo: map events to locations for cursor to change, this should be something like "if in event area" or something
      //   if (
      //     that.x >= 0 &&
      //     that.x <= CANVAS_DIMENSION &&
      //     that.y >= 0 &&
      //     that.y <= CANVAS_DIMENSION
      //   )
      //     document.documentElement.style.setProperty(
      //       this.cursorCSSVariableName,
      //       "pointer"
      //     );
      //   else
      //     document.documentElement.style.setProperty(
      //       this.cursorCSSVariableName,
      //       "default"
      //     );
    });
  }

  statusTest() {
    console.log({ x: this.x, y: this.y });
  }
}
