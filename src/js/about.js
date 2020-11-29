import "../css/about.css";
import carListRef from "../data/items.js";

import aboutRef from "./refs.js";
const { aboutSection } = aboutRef;
console.log(aboutSection);

function createCarsList(array) {
  return array.map((car) => {
    const { name, picture, price } = car;
    const imgName = document.createElement("h3");
    imgName.textContent = name;
    const imgWrapper = document.createElement("div");

    const pics = picture.map((pic) => {
      const img = document.createElement("img");
      img.style.width = "300px";
      img.setAttribute("src", pic);
      img.setAttribute("alt", name);
      return img;
    });
    imgWrapper.append(...pics);

    const carPrice = document.createElement("p");
    carPrice.textContent = price;

    const item = document.createElement("li");
    item.append(imgName, imgWrapper, carPrice);
    return item;
  });
}
const carsItems = createCarsList(carListRef);
const carList = document.createElement("ul");
carList.append(...carsItems);
aboutSection.append(carList);
