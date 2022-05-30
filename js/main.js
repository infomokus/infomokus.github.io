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


function betoltes() {
    document.querySelector("span#mainap").innerHTML = nap;
}

 let napok = [
    [id="0", value="vasárnap"],
    [id="1", value="hétfő"],
    [id="2", value="kedd"],
    [id="3", value="szerda"],
    [id="4", value="csütörtök"],
    [id="5", value="péntek"],
    [id="6", value="szombat"],
];


// let napok = ["vasárnap","hétfő", "kedd", "szerda", "csutortok", "pentek", "szombat"]
let selectBox = document.querySelector("select");
for (let i = 0; i < napok.length; i++) {
    selectBox.options.add(new Option(napok[i][1]))
}

let d = new Date();
let nap = napok[d.getDay()][1];
let hanyadiknap = napok[d.getDay()];
let homersekletek = [11, 13, 15, 17, 19, 21, 23];

document.querySelector('span#homerseklet').innerHTML = homersekletek[d.getDay()];

function szamol(){
console.log("szamolok")
document.querySelector('span#homerseklet').innerHTML = "listelemnek megfelelő c";
};

