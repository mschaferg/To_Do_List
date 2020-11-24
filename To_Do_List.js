showList = () => {
    var x = document.getElementById("listParent");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "visible";
    };
};

addTask = () => {
    showList();

    var newTask = document.getElementById("newTask").value;
    var node = document.createElement("p");
    var textnode = document.createTextNode(newTask);
    node.appendChild(textnode);
    document.getElementById("toDoList").appendChild(node);

    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "❌");
    removeTask.setAttribute("id", "removeButton");
    removeTask.addEventListener('click', function (e) {
        node.parentNode.removeChild(node);
    }, false);
    node.appendChild(removeTask);
};
