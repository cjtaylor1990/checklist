let addButton = document.getElementById('todayAdd');
let todayList = document.getElementById('todayList');
let backlogList = document.getElementById('backlogList');

const Row = {
    //Style of row
    style: "margin: 1em; display: flex; justify-content: space-between; align-items: center; width: 100%; height: 2em;",
    class: "row",
    
    //Different row components, their styles, innerHTML contents, and corresponding functions.
    components: {
        
        //Entry (where you actually have the task description)
        entry: {
            style: "font-size: 1.2em; cursor: pointer; margin: 0.5em 1em 0.5em 1em;",
            crossOutClick: function(event) {
                event.target.style = Row.components.entry.style + "text-decoration: line-through;"
            }
        },

        //Remove button (deletes the row)
        remove: {
            style: "font-size: 1.2em; cursor: pointer; margin: 0.5em 1em 0.5em 1em;",
            content: "Remove",
            removeClick: function(event) {
                document.getElementById(event.target.parentNode.id).remove();
            }
        },
        
        //Backlog button (moves the row to the backlog to-do list and reformats so that it no longer has backlog button)
        backlog: {
            style: "font-size: 1.2em; cursor: pointer; margin: 0.5em 1em 0.5em 1em;",
            content: "Backlog",
            backlogClick: function(event) {
                let cloneRow = document.getElementById(event.target.parentElement.id).cloneNode(true)
                cloneRow.childNodes[2].style = "display: none;"
                cloneRow.childNodes[1].onclick = Row.components.remove.removeClick;
                backlogList.appendChild(cloneRow);
                document.getElementById(event.target.parentNode.id).remove();

            }
        },
    },

    //Function to randomly generate row ID number
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
    newRow.id = Row.rowID();

    /*Inserting four cells in that row*/
    let entry = newRow.insertCell(0);
    let remove = newRow.insertCell(1);
    let backlog = newRow.insertCell(2);

    /*Adding text to cells in new row (placeholder for when I take in content)*/
    entry.innerHTML = entryContent;
    remove.innerHTML = Row.components.remove.content;
    backlog.innerHTML = Row.components.backlog.content;

    /*Adding styling to content, as well as remove and backlog buttons*/
    entry.style = Row.components.entry.style;
    remove.style = Row.components.remove.style;
    backlog.style = Row.components.backlog.style;

    /*Adding functionality to remove and backlog button*/
    entry.onclick = Row.components.entry.crossOutClick;
    remove.onclick = Row.components.remove.removeClick;
    backlog.onclick = Row.components.backlog.backlogClick;

}

addButton.onclick = createEntry;
