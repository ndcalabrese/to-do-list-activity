const toDoList = document.getElementById("to-do-list");
const inputForm = document.getElementById("input-form");
const textBox = document.getElementById("text-box");

// Function to add user input as a to-do item
function addNewListItem(event) {

    // Prevent the submit event from refreshing the page
    event.preventDefault();

    // Store user input from textBox
    let userInput = document.getElementById("text-box").value;

    // Checks to see if userInput is blank
    // If it is, alert the user
    if (userInput != "") {
        
        // Clears the user input from textBox
        document.getElementById("text-box").value = "";

        // Create a new list item node in the document and assign it to
        // a variable
        const newToDoItem = document.createElement("li");   

        // Edit the innerHTML of the new list item node
        newToDoItem.innerHTML = userInput;

        newToDoItem.setAttribute("class", "to-do-list-item");

        // Append the new list item node as a child of toDoList
        toDoList.appendChild(newToDoItem);
    
    } else { 
        alert("Field cannot be empty.")
    }
}

// Function to cross out a list item and then remove it
function checkOffListItem(event) {

    // Cross out the list item that was clicked
    event.target.style.textDecoration = "line-through";
    event.target.style.textDecorationColor = "#fbb03b";

    // Remove the list item element that triggered the event
    setTimeout(function() {
        event.target.remove();
    }, 1000);
}

// Create event listener that listens for the form to be submitted on
// click or 'enter' and calls a function
inputForm.addEventListener("submit", addNewListItem);

toDoList.addEventListener("click", checkOffListItem);


