//Get dada from server
function getServerData(url) {
    let fetchOptions = {
        method: "GET",
        mode: "cors",
        Cache: "no-cache"
    }

    return fetch(url, fetchOptions).then(
        Response => Response.json(),
        err => console.error(err)
    );
}

function startGetUsers() {
    getServerData("http://localhost:3000/users").then(
        data => fillDataTable(data, "userTable")
    );
}

document.querySelector("#getDataBtn").addEventListener("click", startGetUsers);

//Fill table with server data.
function fillDataTable(data, tableID) {
    let table = document.querySelector(`#${tableID}`);
    if (!table) {
        console.error(`Table "${tableID}" is not found`);
        return;
    }

    //addnew user row
    let newRow = newUserRow(data[0]);
    table.appendChild(newRow);

    let tBody = table.querySelector("tbody");
    for (let row of data) {
        let tr = createAnyElement("tr");
        for (let k in row) {
            let td = createAnyElement("td");
            td.innerHTML = row[k];
            tr.appendChild(td);
        }
        let btnGroup = createBtnGroup();
        tr.appendChild(btnGroup);
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

function createBtnGroup() {
    let group = createAnyElement("div", { class: "btn btn-group" });
    let infoBtn = createAnyElement("button", { class: "btn btn-info", onclick: "getInfo(this)" });
    infoBtn.innerHTML = '<i class="fas fa-edit"></i>';
    let delBtn = createAnyElement("button", { class: "btn btn-danger", onclick: "delRow(this)" });
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';

    group.appendChild(infoBtn);
    group.appendChild(delBtn);

    let td = createAnyElement("td");
    td.appendChild(group)
    return td;
}

function delRow(btn) {
    let tr = btn.parentElement.parentElement.parentElement;
    let id = tr.querySelector("td:first-child").innerHTML;
    let fetchOptions = {
        method: "DELETE",
        mode: "cors",
        Cache: "no-cache"
    };

    fetch(`http://localhost:3000/users/${id}`, fetchOptions).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => {
            startGetUsers();
        }
    );

}

//create new user
function newUserRow(row) {
    let tr = createAnyElement("tr");
    for (let k in { id: "", name: "", email: "" }) {
        let td = createAnyElement("td");
        let input = createAnyElement("input", {
            class: "form-control",
            name: k
        });
        td.appendChild(input);
        tr.appendChild(td);
    }

    let newBtn = createAnyElement("button", {
        class: "btn btn-success",
        onclick: "createUser(this)"
    });
    newBtn.innerHTML = '<i class="fas fa-plus"></i>'
    let td = createAnyElement("td");
    td.appendChild(newBtn)
    tr.appendChild(td);

    return tr;
}

function createUser(btn) {
    let tr = btn.parentElement.parentElement;
    let inputs = tr.querySelectorAll("input.form-control");
    let data = {id: "6", name: "hh", email: "k"};
    for (let i = 0; i < inputs.lenght; i++) {
        data[inputs[i].name] = inputs[i].value
    }
    console.log(data);
}