let addButton = document.getElementById('todayAdd');
let todayList = document.getElementById('todayList');
let backlogList = document.getElementById('backlogList');

const Checkbox = {
    style: "",
    content: '<input type="checkbox">',
}

const Entry = {
    style: "",
}

const RemoveButton = {
    style: "background-color: red;",
    content: "Remove",
    removeClick: function(event) {
        document.getElementById(event.target.parentElement.id).remove();
    }
}

const BacklogButton = {
    style: "background-color: yellow;",
    content: "Backlog",
    backlogClick: function(event) {
        let cloneRow = document.getElementById(event.target.parentElement.id).cloneNode(true)
        cloneRow.childNodes[3].style = "display: none;"
        cloneRow.childNodes[2].onclick = Row.remove.removeClick;
        backlogList.appendChild(cloneRow);
        document.getElementById(event.target.parentElement.id).remove();

    }
}

const Row = {
    style: "margin: 1em; display: flex; justify-content: space-between; align-items: center; width: 100%; height: 2em;",
    class: "entry",
    checkbox: Checkbox,
    entry: Entry,
    remove: RemoveButton,
    backlog: BacklogButton,
    rowID: function(){
        return String(Math.floor(Math.random()*10000));
    }

}

function createEntry() {
    /*Prompting user for the entry content*/
    let entryContent = prompt("What task do you want to get done?");

    /*Creating new row at last position of table*/
    let newRow = todayList.insertRow(-1);

    /*Styling new row*/
    newRow.style = Row.style;
    newRow.class = Row.class;

    /*Adding random ID that can be called later*/
    newRow.id = Row.rowID;

    /*Inserting four cells in that row*/
    let checkbox = newRow.insertCell(0);
    let entry = newRow.insertCell(1);
    let remove = newRow.insertCell(2);
    let backlog = newRow.insertCell(3);

    /*Adding text to cells in new row (placeholder for when I take in content)*/
    checkbox.innerHTML = Row.checkbox.content;
    entry.innerHTML = entryContent;
    remove.innerHTML = Row.remove.content;
    backlog.innerHTML = Row.backlog.content;

    /*Adding styling to content, as well as remove and backlog buttons*/
    remove.style = Row.remove.style;
    backlog.style = Row.backlog.style;

    /*Adding functionality to remove and backlog button*/
    remove.onclick = Row.remove.removeClick;
    backlog.onclick = Row.backlog.backlogClick;

}

addButton.onclick = createEntry;
