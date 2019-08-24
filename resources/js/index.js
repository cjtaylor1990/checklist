let addButton = document.getElementById('todayAdd');
let todayList = document.getElementById('todayList');

function createEntry() {
    /*Creating new row at last position of table*/
    let newRow = todayList.insertRow(-1);

    /*Styling new row*/
    newRow.style="margin: 1em; display: flex; justify-content: space-between"

    /*Inserting four cells in that row*/
    let checkbox = newRow.insertCell(0);
    let content = newRow.insertCell(1);
    let remove = newRow.insertCell(2);
    let backlog = newRow.insertCell(3);

    /*Setting classes of new cells*/
    checkbox.class="checkbox";
    content.class="entryContent";
    remove.class="remove button";
    backlog.class="backlog button";

    /*Adding text to cells in new row (placeholder for when I take in content)*/
    checkbox.innerHTML = "New Checkbox";
    content.innerHTML = "New Entry";
    remove.innerHTML = "New Remove";
    backlog.innerHTML = "New Backlog";
}

addButton.onclick = createEntry;
