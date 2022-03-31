const toDoList = document.getElementById("to-do-list");
const inputForm = document.getElementById("input-form");
const textBox = document.getElementById("text-box");

// Function to add user input as a to-do item
function addNewListItem(event) {

    // Prevent the submit event from refreshing the page
    event.preventDefault();

    // Store user input from textBox
    let userInput = document.getElementById("text-box").value;

    // Clears the user input from textBox
    document.getElementById("text-box").value = "";

    // Create a new list item node in the document and assign it to
    // a variable
    const newToDoItem = document.createElement("li");   

    // Edit the innerHTML of the new list item node
    newToDoItem.innerHTML = userInput;

    // Append the new list item node as a child of toDoList
    toDoList.appendChild(newToDoItem);

}

// Function to cross out a list item and then remove it
function checkOffListItem(event) {

    // Cross out the list item that was clicked
    event.target.style.textDecoration = "line-through";

    // Remove the list item element that triggered the event
    setTimeout(function() {
        event.target.remove();
    }, 1000);
}

// Create event listener that listens for the form to be submitted on
// click or 'enter' and calls a function
inputForm.addEventListener("submit", addNewListItem);

toDoList.addEventListener("click", checkOffListItem);


