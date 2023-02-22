function shoppingListProblem(array) {

    let shoppingList = array[0].split("!");
    let goShopping = false;

    for (let i = 1; i < array.length; i++) {

        let commands = array[i].split(" ");
        let actionCommand = commands[0];
        let grocery = commands[1];
        switch (actionCommand) {
            case "Urgent":
                if (!shoppingList.includes(grocery)) {
                    shoppingList.unshift(grocery);
                    break;
                } else {
                    break;
                }
            case "Unnecessary":
                if (shoppingList.includes(grocery)) {
                    shoppingList.splice(grocery);
                    break;
                } else {
                    break;
                }
            case "Correct":
                let oldItem = commands[1];
                let newItem = commands[2];
                if (shoppingList.includes(oldItem)) {
                    shoppingList.splice(shoppingList.indexOf(oldItem), 1, newItem);
                    break;
                } else {
                    break;
                }
            case "Rearrange":
                if (shoppingList.includes(grocery)) {
                    shoppingList.splice(shoppingList.indexOf(grocery), 1);
                    shoppingList.push(grocery);
                    break;
                } else {
                    break;
                }
            case "Go":
                goShopping = true;
                break;
        }

    }
    if (goShopping === true) {
        console.log(shoppingList.join(", "));
    }
}
shoppingListProblem(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
shoppingListProblem(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])