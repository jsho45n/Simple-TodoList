const toDos = [];

function createtoDo() {
    var input = document.getElementById("todo").value;
    var listplus = document.createElement("li");
    var btnplus = document.createElement("button");
    var btnplus2 = document.createElement("button");
    var hr = document.createElement("hr");
    var newId = toDos.length + 1;
    btnplus.innerHTML = "삭제";
    listplus.innerHTML = input;
    btnplus2.innerHTML = "완료";
    listplus.id = newId;
    btnplus.addEventListener("click", deleteonetoDo);
    btnplus2.addEventListener("click", endtoDo);
    listplus.appendChild(btnplus);
    listplus.appendChild(btnplus2);
    listplus.appendChild(hr);
    document.getElementById("inlist").appendChild(listplus);
    document.getElementById("todo").value = "";
    const todoObj = {
        text: input,
        id: newId
    };
    toDos.push(todoObj);
}

function deletetoDo() {
    var del = document.getElementById("inlist");
    while (del.hasChildNodes()) {
        del.removeChild(del.firstChild);
    }
}

function deleteonetoDo() {
    var btn = event.target;
    var li = btn.parentNode;
    document.getElementById("inlist").removeChild(li);
}

function endtoDo() {
    var btn = event.target;
    var li = btn.parentNode;
    li.style.backgroundColor = "yellow";
}