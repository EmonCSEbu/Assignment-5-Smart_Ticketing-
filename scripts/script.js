// function hello() {
//   console.log("hello");
// }
// document.getElementsByClassName("seat").addEventListener("click", handleSeat);
let total = 0;
// document.getElementById("seat-design").innerHTML = "";

for (i = 65; i < 75; i++) {
  for (j = 0; j < 5; j++) {
    if (j == 0) {
      // console.log("hell");
      document.getElementById(
        "seat-design"
      ).innerHTML += `<div id="B" class="bold flex justify-center items-center font-bold">
                                                      ${String.fromCharCode(i)}
  </div>
  `;
    } else {
      if (j == 2) {
        document.getElementById("seat-design").innerHTML += `
        <button
          id='${String.fromCharCode(i) + j}'
          onClick="handleSeat('${String.fromCharCode(i) + j}')"
          class="seat grid-cols-1 me-4"
        >
        ${String.fromCharCode(i) + j}
        </button>
        `;
      } else {
        document.getElementById("seat-design").innerHTML += `
        <button
          id=${String.fromCharCode(i) + j}
          onClick="handleSeat('${String.fromCharCode(i) + j}')"
          class="seat grid-cols-1"
        >
        ${String.fromCharCode(i) + j}
        </button>
        `;
      }
    }
  }
}
// document.getElementById("seats").innerHTML =
function handleSeat(seatNo) {
  element = document.getElementById("price-section");
  if (element.children.length - 1 < 4) {
    element.innerHTML += `<div class='flex border justify-between p-3 w-full'>
     <div>${seatNo}</div>
   <div>Economoy</div>
     <div>550</div>
    </div>`;
    seat = document.getElementById(seatNo);
    seat.style.backgroundColor = "#3cd722";
    seat.style.color = "white";
    seat.disabled = true;
    totalPrice = document.getElementById("total-price");
    total = (element.children.length - 1) * 550;
    document.getElementById("count-seat").innerText =
      element.children.length - 1;
    totalPrice.innerHTML = total;
    document.getElementById("grand-price").innerHTML = total;
    document.getElementById("available-seat").innerHTML =
      40 - (element.children.length - 1) + " seats left";

    if (element.children.length - 1 == 4) {
      document.getElementById("coupon-btn").disabled = false;
    }
  } else {
    window.alert("You can't select more than 4 tickets!");
  }
}
function handleDiscount() {
  text = document.getElementById("coupon").value;
  console.log(total, text);
  if (text === "NEW15") {
    document.getElementById("grand-price").innerHTML =
      total - (total * 15) / 100;
    document.getElementById("coupon-btn").style.display = "none";
  } else if (text === "Couple 20") {
    document.getElementById("grand-price").innerHTML =
      total - (total * 20) / 100;
  } else {
    window.alert("Warning!You can be blocked for wrong coupon code");
  }
}

function Confirmation() {
  // form.addEventListener("onsubmit", submitForm(form));
  if (document.getElementById("phone").value == "") {
    document.getElementById("phone-required").innerText =
      "Please enter a phone number";
  } else if (total > 0) {
    form = document.getElementById("formId");
    console.log(form);
    document.getElementById("my_modal_1").showModal();
  } else {
    window.alert("You have to  select at least one seat");
  }
}


function scrollToTicketSection(){
  document.getElementById('emon').scrollIntoView({behavior: 'smooth'});
}