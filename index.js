const singleSeat = Array.from(document.getElementsByClassName("seat"))


for (let seat of singleSeat){
    seat.addEventListener('click', (e)=>{
  const cartContainer = document.querySelector(".cart-selected-seat-container").childElementCount


        if(!seat.classList.contains('selected') && cartContainer < 4){
            seat.classList.add('selected')
            updatingSeatNumber(seat, 'minus')
            makingTotal()
        } 
        else if(seat.classList.contains('selected') ){
            seat.classList.remove('selected')
            updatingSeatNumber(seat, "plus")
            makingTotal()
        }

    })
}




const applyButton = document.querySelector(".discount-apply-btn");
const discountInput = document.querySelector(".discounted-rate")

discountInput.addEventListener('change', (e)=>{
    
    if(e.target.value){
        applyButton.removeAttribute('disabled')
        applyDiscount()

    } else{
        applyButton.setAttribute('disabled')

    }

})

// formSubmit.addEventListener('click', showSection('.success-modal'))


const nameInput = document.querySelector(".passenger-name");
const phoneInput = document.querySelector(".phone-number");
const submitButton = document.getElementById("form-submit");

nameInput.addEventListener("change", () => {
  if (nameInput.value && phoneInput.value ) {
    submitButton.removeAttribute("disabled");
  }
});

phoneInput.addEventListener("change", () => {
  if (nameInput.value && phoneInput.value) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "");
  }
});
