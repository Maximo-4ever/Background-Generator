const bgColor = document.querySelector(".app");
const hexCode = document.querySelector(".card__hexcode");
const btnGenerator = document.querySelector(".btn-generator");
const btnCopy = document.querySelector(".btn-copy");

const changeHexcolor = () => {
  newHexcode = `rgb(
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)}
  )`;
  bgColor.style.background = newHexcode;
  hexCode.style.background = newHexcode;
};

btnGenerator.addEventListener("click", () => {
  changeHexcolor();
});
