const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-amount");
const checkButton = document.querySelector("#btn");
const errorMessage =  document.querySelector("#error");
const noOfNotes = document.querySelectorAll(".no-of-notes");

availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", validateBillAndCashAmount);

function validateBillAndCashAmount(){
  errorMessage.style.display = "block";
  errorMessage.innerHTML = '';
  if (billAmount.value > 0){
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showError("The cash provided should atleast be equal to bill amount");
    }

  }else{
    showError("Bill Amount entered should be greater than 0");
  }
}

function calculateChange(amountToBeReturned){
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(
      amountToBeReturned / availableNotes[i]
      
    );
    
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerHTML = numberOfNotes;

  }

}

function showError(message){
  errorMessage.style.display = "block";
  errorMessage.innerHTML = message;
}

