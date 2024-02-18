function makingTotal() {
  let sum = 0;
  const totalTicketPrice = document.querySelector(".total-ticket-price");
  const prices = Array.from(
    document.querySelectorAll(".selected-ticket-price")
  ).map((e) => {
    return parseInt(e.textContent);
  });
  for (let num of prices) {
    sum += num;
  }
  totalTicketPrice.innerHTML = sum;

  document.querySelector(".grand-total-price").innerHTML = sum || 0;
}

function applyDiscount() {
  const cartContainer = document.querySelector(".cart-selected-seat-container").childElementCount;
  console.log(cartContainer);

  const discountRate = discountRateCalculator() / 100
  const totalTicketPrice = parseInt(
    document.querySelector(".total-ticket-price").innerHTML
  );
  const discountedPriceContainer = document.querySelector(".discount-price");

  let discount = discountRate * totalTicketPrice;
  discountedPriceContainer.innerHTML = `
    <p>Discounted Amount</p>
    <p>BDT <span class="discounted-price">${discount || 0}</span></p>
    `;

  document.querySelector(".discount-box").innerHTML = "";
  document.querySelector(".grand-total-price").innerHTML =
    totalTicketPrice - discount || 0;
}

function discountRateCalculator(){
  const inputValue = document.querySelector(".discounted-rate").value.toLowerCase();
  if(inputValue === "new15"){
    return 15
  } else if(inputValue === 'couple20'){
    return 20
  }
   else{
    alert('you have given the wrong coupon')
    document.querySelector(".discount-box").innerHTML = `
    <input
    type="text"
    placeholder="Have any Coupon?"
    class="w-full outline-none discounted-rate"
  />
  <button class="btn btn-success discount-apply-btn" disabled>
    Apply
  </button>
    `;

  }
  
}

function updatingSeatNumber(seat, status) {
  let selectedSeat = document.getElementById("selected-seats-number");
  let seatLeft = document.getElementById("number-of-seats");
  const cartContainer = document.querySelector(".cart-selected-seat-container");
  let ticketNumber = seat.innerHTML;
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div class= "selected-seat py-2 flex gap-4 justify-between">
    <p class = "seat-number-name">${ticketNumber || 0}</p>
    <p>Economy</p>
    <p class="selected-ticket-price">550</p>
    </div>
    `;

  let totalSeat = parseInt(seatLeft.innerText);
  let selected = parseInt(selectedSeat.innerText);

  if (status === "plus") {
    seatLeft.innerHTML = totalSeat + 1;
    selectedSeat.innerText = selected - 1;
    cartContainer.lastChild.remove();
  } else if (status === "minus" && cartContainer.children.length <= 4) {
    seatLeft.innerHTML = totalSeat - 1;
    selectedSeat.innerText = selected + 1;
    cartContainer.appendChild(newDiv);
    
  }
}

