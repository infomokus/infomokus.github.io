function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);
}

function showSumPrice(price = 1000, amountNumber = 1) {
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");

    if (amountNumber > 10) {
        amountInput.value = 10;
        showAmount.innerHTML = amountInput.value * price;
        alert("Nem vásárolhatsz többet mint 10 hambi.");
    } else if
        (amountNumber < 1) {
        amountInput.value = 1;
        showAmount.innerHTML = amountInput.value * price;
        alert("Legalább egy hambit kell vásárolni.");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }

}