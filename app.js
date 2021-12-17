const bgColor = document.querySelector(".app");
const hexCode = document.querySelector(".card__hexcode");
const btnGenerator = document.querySelector(".btn-generator");
const btnCopy = document.querySelector(".btn-copy");

btnGenerator.addEventListener("click", () => {
  newHexcode = rgbToHex(
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255)
  );
  bgColor.style.background = newHexcode;
  hexCode.style.background = newHexcode;
  hexCode.textContent = newHexcode;
});
btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(hexCode.textContent);
});

//Tranform RGB color to Hex color
const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};
const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
