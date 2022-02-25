const newHeader = function () {
  const newHeader = document.getElementById(`main-header`);
  newHeader.textContent = `OBI'S GADGET STORE`;
};
newHeader();
const newBackgroundColor = function () {
  document.querySelector(`body`).style.backgroundColor = `orange`;
};
newBackgroundColor();
const addCssClassToEveryLink = function () {
  const links = document.querySelectorAll(`a`);
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add(`amazon-links`);
  }
};
addCssClassToEveryLink();
const changeFooterAddress = function () {
  document.querySelector(`address`).textContent = `unnastr, 9 Hamburg. Germany`;
};
changeFooterAddress();
const toggleClassForImage = function () {
  const phoneImgs = document.querySelectorAll(`.phone-img`);
  for (let i = 0; i < phoneImgs.length; i++) {
    phoneImgs[i].classList.toggle(`img-visibility`);
  }
  console.log(phoneImgs);
};
toggleClassForImage();
const randomColor = Math.floor(Math.random() * 16777215).toString(16);
console.log(randomColor);
const colorPrice = function () {
  prices = document.querySelectorAll(`.price`);
  console.log(prices);
  for (let i = 0; i < prices.length; i++) {
    prices[i].style.color = `#${randomColor}`;
  }
};
colorPrice();
