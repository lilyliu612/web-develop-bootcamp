var todos = [];
windows.setTimeout(function(){
    
    var input = prompt("what would you like to do");
    
    while(input !== "quit") {
        if(input === "list"){
            console.log("****");
            todos.forEach(function(todo, i){
                console.log(1 + ": " + todo);
            })
            console.log("****");
        } else if(input === "new") {
            var newTodo = prompt("Enter new todo");
            todos.push(newTodo);
        } else if(input === "delete") {
            var index = prompt("Enter index of todo to delete");
            todos.splice(index, 1);
        }
        var input = prompt("what would you like to do");
    }
    console.log("OK, YOU QUIT THE APP");
},500);
