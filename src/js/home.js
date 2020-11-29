import "../css/home.css";
import refs from "./refs.js";

// Destructure object access
const { homeSection } = refs;

const homeTitle = `<h2 class="homeTitle">HOME</h2>`;

homeSection.insertAdjacentHTML("afterbegin", homeTitle);
console.log(homeSection);
const homeContent = document.createElement("p");
const content = "gettin some exp workin with webpack";
homeContent.textContent = content;

const title = document.querySelector(".homeTitle");
title.append(homeContent);
