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



let napok = [
    [id = "0", value = "vasárnap"],
    [id = "1", value = "hétfő"],
    [id = "2", value = "kedd"],
    [id = "3", value = "szerda"],
    [id = "4", value = "csütörtök"],
    [id = "5", value = "péntek"],
    [id = "6", value = "szombat"],
];


// let napok = ["vasárnap","hétfő", "kedd", "szerda", "csutortok", "pentek", "szombat"]
let selectBox = document.getElementById("daycombo");
for (let i = 0; i < napok.length; i++) {
    selectBox.options.add(new Option(napok[i][1], napok[i][0]))
}

let d = new Date();
let nap = napok[d.getDay()][1];
let hanyadiknap = napok[d.getDay()];
let homersekletek = [-31, 13, -15, 17, 189, 21, 50];
let homerseklet = 0;

document.querySelector('span#homerseklet').innerHTML = homersekletek[d.getDay()];

function btnSzamol() {
    document.querySelector('span#homerseklet').innerHTML = homersekletek[selectBox.value];
    homerseklet = homersekletek[selectBox.value];
    document.querySelector("span#showAjanlat").innerHTML = ajanlatMeghatarozasa(homerseklet);
};

function betoltes() {
    document.querySelector("span#mainap").innerHTML = nap;
    homerseklet = homersekletek[selectBox.value];
    document.querySelector("span#showAjanlat").innerHTML = ajanlatMeghatarozasa(homerseklet);
    document.querySelector("span#minimumHomerseklet").innerHTML = minimumMeghatarozasa();
    document.querySelector("span#atlagHomerseklet").innerHTML = atlagMeghatarozasa();
    document.querySelector("span#maximumHomerseklet").innerHTML = maximumMeghatarozasa();
}

let homersekletekFelsoHatara = [0, 15, 20, 25, 1000];
let ajanlatok = [
    "forró csoki",
    "meleg tea",
    "finom süti",
    "fagyi",
    "jéghideg limonádé"
];

function ajanlatMeghatarozasa(homerseklet) {
    for (let i = 0; i < homersekletekFelsoHatara.length; i++) {
        if (homerseklet < homersekletekFelsoHatara[i]) {
            return ajanlatok[i];
        }
    }
}

function minimumMeghatarozasa() {
    let szelsoertek = homersekletek.length > 0 ? homersekletek[0] : 0;
    for (let i = 0; i < homersekletek.length; i++) {
        szelsoertek = szelsoertek > homersekletek[i] ? homersekletek[i] : szelsoertek;
    }
    return szelsoertek;
}

function maximumMeghatarozasa() {
    let szelsoertek = homersekletek.length > 0 ? homersekletek[0] : 0;
    for (let i = 0; i < homersekletek.length; i++) {
        szelsoertek = szelsoertek < homersekletek[i] ? homersekletek[i] : szelsoertek;
    }
    return szelsoertek;
}

function atlagMeghatarozasa() {
    let akkumulator = 0;
    for (let i = 0; i < homersekletek.length; i++) {
        akkumulator += homersekletek[i];
    }
    console.log(akkumulator)
    return homersekletek.length > 0 ? (akkumulator / homersekletek.length).toFixed(0) : 0;
}