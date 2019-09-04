let addButton = document.getElementById('todayAdd');
let todayList = document.getElementById('todayList');

const Row = {
    style: "margin: 1em; display: flex; justify-content: space-between; align-items: center; width: 100%; height: 2em;",
}

const RemoveButton = {
    style: "background-color: red;",
    content: "Remove",
}

const BacklogButton = {
    style: "background-color: yellow;",
    content: "Backlog",
}

function removeClick(event) {
    document.getElementById(event.target.parentElement.id).remove();
}

let currentRowNum = 0;


function createEntry() {
    /*Creating new row at last position of table*/
    let newRow = todayList.insertRow(-1);

    /*Styling new row*/
    newRow.style = Row.style;
    newRow.class = "entry";

    /*Adding random ID that can be called later*/
    newRow.id = String(Math.floor(Math.random()*100000));

    /*Inserting four cells in that row*/
    let checkbox = newRow.insertCell(0);
    let content = newRow.insertCell(1);
    let remove = newRow.insertCell(2);
    let backlog = newRow.insertCell(3);

    /*Adding text to cells in new row (placeholder for when I take in content)*/
    checkbox.innerHTML = '<input type="checkbox">';
    content.innerHTML = String(currentRowNum);
    remove.innerHTML = RemoveButton.content;
    backlog.innerHTML = BacklogButton.content;

    /*Adding styling to content, as well as remove and backlog buttons*/
    remove.style = RemoveButton.style;
    backlog.style = BacklogButton.style;

    /*Adding functionality to remove button*/
    remove.onclick = removeClick;

    currentRowNum += 1;

}

addButton.onclick = createEntry;
