const sliders = document.querySelectorAll("input[type='range']");

// console.log(sliders);

sliders.forEach(function(silder){
    silder.addEventListener("input", calculateTip);
});

const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);
console.log(billInput);


function calculateTip() {

}