let addButton = document.getElementById('todayAdd');
let todayList = document.getElementById('todayList');

const rowStyle = "margin: 1em; display: flex; justify-content: space-between; align-items: center; width: 100%; height: 2em;";

let numRows = 0;

const RemoveButton = {
    style: "background-color: red;",
    content: "Remove",
}

const BacklogButton = {
    style: "background-color: yellow;",
    content: "Backlog",
}

function createEntry() {
    /*Creating new row at last position of table*/
    let newRow = todayList.insertRow(-1);

    /*Styling new row*/
    newRow.style = rowStyle;
    newRow.class = "entry";

    /*Inserting four cells in that row*/
    let checkbox = newRow.insertCell(0);
    let content = newRow.insertCell(1);
    let remove = newRow.insertCell(2);
    let backlog = newRow.insertCell(3);

    /*Adding text to cells in new row (placeholder for when I take in content)*/
    checkbox.innerHTML = '<input type="checkbox">';
    content.innerHTML = toString(numRows);
    remove.innerHTML = RemoveButton.content;
    backlog.innerHTML = BacklogButton.content;

    /*Adding styling to content, as well as remove and backlog buttons*/
    remove.style = RemoveButton.style;
    backlog.style = BacklogButton.style;

    /*Adding ID to remove button to be used later*/
    remove.id = numRows;

    /*Adding functionality to buttons*/
    remove.onclick = document.todayList.deleteRow(newRow.id);
    backlog.onclick = BacklogButton.moveRow;

    /*Incrementing the number of rows by 1*/
    numRows += 1;
}

addButton.onclick = createEntry;
