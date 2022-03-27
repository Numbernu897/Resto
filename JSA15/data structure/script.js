import data from "./data.js";

const app = document.querySelector("#app");
localStorage.clear();
data.forEach((item) => {
  app.innerHTML += `
    <div class="card m-3" style="width: 18rem">
        <img class="card-img-top" src="${item["Product_Photo"]}" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">${item["Product_Name_VN"]}</h5>
          <a href="/detail.html" class="btn btn-primary link-detail" id="${item["Product_ID"]}">Go detail</a>
        </div>
      </div>
    `;
});

const listA = document.querySelectorAll(".link-detail");

listA.forEach((a) => {
  a.addEventListener("click", () => {
    localStorage.setItem("detail", a.id);
  });
});
