//Get dada from server
function getServerData(url) {
    let fetchOptions = {
        methon: "GET",
        mode: "cors",
        Cache: "no-cache"
    }

    return fetch(url, fetchOptions).then(
        Response => Response.json(),
        err => console.error(err)
    );
}

document.querySelector("#getDataBtn").addEventListener("click", function () {
    getServerData("http://localhost:3000/users").then(
        data =>  fillDataTable(data, "userTable") 
    );
});

//Fill table with server data.
function fillDataTable(data, tableID) {
    let table = document.querySelector(`#${tableID}`);
    if (!table) {
        console.error(`Table "${tableID}" is not found`);
        return;
    }

    let tBody = table.querySelector("tbody");
    for (let row of data) {
        let tr = createAnyElement("tr");
        for (let k in row) {
            let td = createAnyElement("td");
            td.innerHTML = row[k];
            tr.appendChild(td);
        }
        tBody.appendChild(tr);
    }
}

function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}
