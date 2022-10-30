import Game from "./Game.js";

const canvas = document.getElementById("main-screen");
const context = canvas.getContext("2d");

let gameWindow;

if (!context) alert("ERROR: Canvas 2D context not found!?");
else gameWindow = new Game(canvas, context, canvas.width, canvas.height);
