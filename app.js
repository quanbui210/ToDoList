let input = prompt("What would u like todo?");
const todos = ["Walk the Dog", "Clean the house"]
while(input !== "quit" && input !== "q") {
    if(input === "list") { 
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
       }
    } else if (input === "new") {
        const newTodo = prompt("what do u want to add?")
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === "delete") {
        const index = parseInt(prompt("Enter an index to delete"));
        if (!Number.isNaN(index)) {
        const deleted = todos.splice(index,1);
        console.log(`Ok, ${deleted} is deleted`)
    } else {
        console.log("unknown index")
    }
 }
    input = prompt("What would u like to do?");
}
console.log("Ok, quit the app");