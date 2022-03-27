import data from "./data.js";

const detailID = localStorage.getItem("detail");
const app = document.querySelector("#app");
for (let index = 0; index < data.length; index++) {
  const element = data[index];
  if (element["Product_ID"] == detailID) {
    app.innerHTML = ` <div class="card m-3" style="width: 500px">
          <img class="card-img-top" src="${element["Product_Photo"]}" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">${element["Product_Name_VN"]}</h5>
            <p class="card-text">
              ${element["Product_Description_VN"]}
            </p>
            <p class="card-text">
              <small class="text-muted">${element["category"]}</small>
            </p>
          </div>
        </div>`;
  }
}
