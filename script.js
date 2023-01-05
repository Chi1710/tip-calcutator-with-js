const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(silder){
    silder.addEventListener("input", calculateTip);
});

const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);

function calculateTip() {
    let bill = parseFloat(billInput.value);
    let tipPercentage = document.getElementById("tip").value;
    let numOfPeople = document.getElementById("num-of-people").value;
  
    // billInput.value = bill.toFixed(2);

    let totalTip = parseFloat((bill * (tipPercentage/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));

    let tipPerPerson = ( totalTip / numOfPeople ).toFixed(2);
    let totalPerPerson = ( total / numOfPeople ).toFixed(2);

}