import { Breakfast, lunch, dinner } from "./data.js"; //lay data tu data.js

let sectionContent = document.querySelector(".menu-fill");

const createElement = (array, text) => {
  sectionContent.innerHTML += `<div class="menus d-flex align-items-center menu-title">
        <h3 class="text-center mb-5">${text}</h3>
    </div>`;

  array.forEach((item) => {
    sectionContent.innerHTML += `
        <div class="menus d-flex alin-items-center">
            <div class="menu-img rounded-circle">
                <img class="img-fluid" src="./foofd/${text}/${item.Image}" alt="">
            </div>
            <div class="text-wrap">
                <div class="row align-items-start">
                    <div class="col-8">
                        <h4>${item.Name}</h4>
                    </div>
                    <div class="col-4">
                        <h4 class="text-muted menu-price">$${item.Price}</h4>
                    </div>
                </div>
                <p>${item.Description}</p>
            </div>
        </div>`;
  });
  sectionContent.innerHTML += `<div class="heading-menu">
        <h3 class="text-center mb-5"></h3>
    </div>`;
};

createElement(Breakfast, "breakfast");
createElement(lunch, "lunch");
createElement(dinner, "dinner");
