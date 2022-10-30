import { itemUsages } from "./constants.js";

export default class Inventory {
  constructor() {
    this.currentItems = new Set();
  }

  getItem(item) {
    this.currentItems.add(item);
  }

  useItem(item, event) {
    if (itemUsages[item] !== event) {
      alert(item + " does not work here. What was I thinking??");
      return;
    }

    alert("I used the " + item + ". Seems like it broke.");
    this.currentItems.delete(item);
  }
}
