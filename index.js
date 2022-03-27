let booking = localStorage.getItem("booking");
if (!booking) {
  localStorage.setItem("booking", JSON.stringify([]));
}

const onClickEvent = (e) => {
  e.preventDefault();
  let booking = localStorage.getItem("booking");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phoneNumber = document.getElementById("phoneNumber");
  const date = document.getElementById("date");
  const time = document.getElementById("time");
  const selectPerson = document.getElementById("selectPerson");
  const message = document.getElementById("message");

  const formData = {
    name: name.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    date: date.value,
    time: time.value,
    selectPerson: selectPerson.value,
    message: message.value,
    accept: undefined,
  };

  booking = JSON.parse(booking);
  booking.push(formData);
  localStorage.setItem("booking", JSON.stringify(booking));
  alert("Reservation successful");
};

const btnSendMessage = document.getElementById("send");
btnSendMessage.addEventListener("click", onClickEvent);
