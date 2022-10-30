// // get current values
// const animationValues = [];
// for (let i = 1; i <= 5; i++) {
//   const variable = "--animationValue" + i;
//   const initialValue = getComputedStyle(document.documentElement)
//     .getPropertyValue(variable)
//     .replace("px", "");
//   animationValues.push(initialValue);
// }

// // randomize border animation

// window.addEventListener("load", () => {
//   setInterval(() => {
//     for (let i = 1; i <= 5; i++) {
//       const variable = "--animationValue" + i;
//       const value = animationValues[i - 1];

//       document.documentElement.style.setProperty(
//         variable,
//         Number(value) * Math.random() + "px"
//       );
//     }
//   }, 600);
// });
