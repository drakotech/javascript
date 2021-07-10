/* Bottega Diner
Build out a Diner menu in JAVASCRIPT. Here are your instructions 
to build that Diner.
Bottega Diner
Have the Main Menu and a Sides Menu
You get one entree and two side choices at regular cost.
- show them the entire menu (print out)
- A user selects an entree.
- “Waitress” makes a comment based on their selection
- comment can either be a comparison of the two items, or random
  comment pulled from a comment vault.
- Tell them the price
- repeat the above options for side choices (comment and a price)
- total up the cost

BONUS
Have breakfast, lunch, and dinner menu. Breakfast has different
items, lunch and dinner have the same items but are different
prices.

BONUS: Allow for item customization (how items are prepared,
decide additional cost implications)
*/

//Order Variables
var cartTotal = 0;
var entree = 0;
var side = 0;

// Main Menu
const mainMenu = [
    {
        product: "Burger",
        type: "entree",
        price: 10.00,
        available: ["lunch", "dinner"],
        response: "A delicious choice!"
    },
    {
        product: "Pancakes",
        type: "entree",
        price: 10.00,
        available: ["breakfast"],
        response: "A great way to start the day!"
    },
    {
        product: "Spaghetti",
        type: "entree",
        price: 12.00,
        available: ["lunch", "dinner"],
        response: "Yum! That's my favorite."
    },
    {
        product: "Salad",
        type: "side",
        price: 3.00,
        available: ["lunch", "dinner"],
        response: "A great healthy choice"
    },
    {
        product: "Fries",
        type: "side",
        price: 3.00,
        available: ["breakfast", "lunch", "dinner"],
        response: "Goes great with anything!"
    },
    {
        product: "Soda",
        type: "side",
        price: 2,
        available: ["breakfast", "lunch", "dinner"],
        response: "A refreshing choice! Free refills at the fountain."
    }
]

// Waitress names and random picker
const names = ["George", "Erin", "Michaela", "Jared", "Shari", "Tiffany", "Michelle"]
function waitressName(){
    var rNum = Math.floor(Math.random() * 7);
    var name = names[rNum];
    return name;
}

// Welcome messages
const welcome = "Welcome to BottegaDiner";
const waitress = "My name is " + waitressName() + " and it is my absolute pleasure to be serving you today!";
const menuIntro = "Please have a look at our Menu for today:";
const welQuestion = "Are we ordering for breakfast, lunch, or dinner?";

function newCustomer() {
    var welMsg = document.createElement("h1");
    welMsg.textContent = welcome;
    document.body.appendChild(welMsg);

    var introMsg = document.createElement("h2");
    introMsg.textContent = waitress;
    document.body.appendChild(introMsg);

    function renderMenu() {
        var menuMsg = document.createElement("h2");
        menuMsg.textContent = menuIntro;
        document.body.appendChild(menuMsg);
        
        var menu = document.createElement('ul');
        menu.id = 'menu';
        document.body.appendChild(menu);

        mainMenu.forEach(element => {
            var menuItem = document.createElement('li');
            menuItem.textContent = element.product + " $" + element.price;
            menu.appendChild(menuItem);
        });
    }
    
    renderMenu();

    var startMenuBtn = document.createElement("button");
    startMenuBtn.textContent = "Start Your Order";
    document.body.appendChild(startMenuBtn);
    startMenuBtn.addEventListener('click', buildOrder);
}

function buildOrder() {
    var iniPrompt = prompt("What would you like to order today? You may get an entree and 2 sides at regular cost of $15.");
    
    switch(iniPrompt){
        case "burger":
        case "Burger":
            entree += 1;
            cartTotal += mainMenu[0].price;
            alert(mainMenu[0].response);
            contOrder()
            break;
        case "pancakes":
        case "Pancakes":
            entree += 1;
            cartTotal += mainMenu[1].price;
            alert(mainMenu[1].response);
            contOrder()
            break;
        case "spaghetti":
        case "Spaghetti":
            entree += 1;
            cartTotal += mainMenu[2].price;
            alert(mainMenu[2].response);
            contOrder()
            break;
        case "salad":
        case "Salad":
            side += 1;
            cartTotal += mainMenu[3].price;
            alert(mainMenu[3].response);
            contOrder()
            break;
        case "fries":
        case "Fries":
            side += 1;
            cartTotal += mainMenu[4].price;
            alert(mainMenu[4].response);
            contOrder()
            break;
        case "soda":
        case "Soda":
            side += 1;
            cartTotal += mainMenu[5].price;
            alert(mainMenu[5].response);
            contOrder()
            break;
        case null:
            break;
        default:
            alert("Please only enter the name of the entree or side you would like to order.");
            buildOrder();
    }


}

function contOrder() {
    var confirmBox = confirm("Would you like to add to your order?");
    if (confirmBox == true) {
        buildOrder();
    } else {
        if((entree == 1) && (side == 2)) {
            alert("Your total comes to $15");
        } else {
            alert("Your total comes to $" + cartTotal);
        }
    }
}
