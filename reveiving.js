const table = document.querySelector("table");
let data = localStorage.getItem("booking");
data = JSON.parse(data);
let count = 1;
data.forEach((booking, index) => {
  table.innerHTML += `<tr>
    <td>${count}</td>  
    <td>${booking.name}</td>
    <td>${booking.email}</td>
    <td>${booking.phoneNumber}</td>
    <td>${booking.date}</td>
    <td>${booking.time}</td>
    <td>${booking.selectPerson}</td>
    <td>${booking.message}</td>
    <th><button 
    ${booking.accept === false && "disabled"} 
    class="btn btn btn-yes 
    ${booking.accept === true ? "btn-success" : ""}" 
    id="yes-${index}">Yes</button></th>
    <th><button 
    ${booking.accept && booking.accept === true && "disabled"} 
    class="btn btn1 btn-no 
    ${
      booking.accept === false ? "btn-danger" : ""
    }" id="no-${index}">No</button></th>
  </tr>`;
  count = count + 1;
});

let yesBtn = document.querySelectorAll(".btn-yes");
let noBtn = document.querySelectorAll(".btn-no");

yesBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    let data = localStorage.getItem("booking");
    data = JSON.parse(data);
    let id = item.id;
    id = id.split("-");
    id = id[id.length - 1];
    booking = data[id];
    if (booking && !booking?.accept) {
      booking.accept = true;
      console.log(booking.accept);
      data[id] = booking;
      localStorage.setItem("booking", JSON.stringify(data));
      alert("Accept!!");
      location.reload();
    }
  });
});

noBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    let data = localStorage.getItem("booking");
    data = JSON.parse(data);
    let id = item.id;
    id = id.split("-");
    id = id[id.length - 1];
    booking = data[id];
    if (booking && !booking?.accept) {
      booking.accept = false;
      console.log(booking.accept);
      data[id] = booking;
      localStorage.setItem("booking", JSON.stringify(data));
      alert("Decline!!");
      location.reload();
    }
  });
});

console.log(data);
