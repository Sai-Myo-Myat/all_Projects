let showPrice = document.getElementById('showPrice');

function calculate() {
    let totalPrice = 0;
    let numberInput = document.getElementById('numberInput').value;
    if(numberInput === ""){
        numberInput =1;
    }
    let memberType = document.getElementById("selects").value;
    if(memberType === "silver"){
        totalPrice += 100 * 0.95 * numberInput;
    } else if (memberType === "gold") {
        totalPrice += 100 * 0.9 * numberInput;
    } else if (memberType === "dimond") {
        totalPrice += 100 * 0.8 * numberInput;
    } else {
        totalPrice = 100 * numberInput;
    }
    showPrice.innerHTML = totalPrice + "ks";
}


