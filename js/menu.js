const vegWrapCombo = "../images/veg wrap combo.jpg";
const vegCombo = "../images/veg combo.jpg";
const pattyBurger = "../images/patty burger.png";
const comboXL = "../images/combo xl.jpg";
const nonVegWrapCombo = "../images/non veg wrap combo.jpeg";
const doublePackCombo = "../images/double pack combo.jpg";
const redVelvet = "../images/red velvet.jpg";
const brownie = "../images/brownie3New.jpg";
const blackForest = "../images/black forest ice jar.jpg";
const blueBerryMojito = "../images/blue berry mojitoNew.jpg";
const blueMojito = "../images/blue mojitoNew.jpg";
const sizzlingBrownie = "../images/brownie1New.jpg";
const caramelBrownie = "../images/brownie2New.jpg";
const chickenBBQ = "../images/chicken bbq wrapNew.jpg";
const chickenBurger = "../images/chicken burgerNew.jpg";
const chickenLollipop = "../images/chicken lollipops.jpeg";
const chickenNuggets = "../images/chicken nuggetsNew.jpg";
const chickenStrips = "../images/chicken stripsNew.jpg";
const chickenWings = "../images/chicken wingsNew.jpg";
const chickenWrap = "../images/chicken wrapNew.jpeg";
const chocoBrownSundae = "../images/choco brown sundaeNew.jpeg";
const chocoLava = "../images/choco lavaNew.jpg";
const chocolateMilkshake = "../images/chocolate milkshake.jpg";
const doubleChickenBurger = "images/double chicken burger.jpg";
const nonVegComboSmall = "../images/combo sNew.jpg";
const familyBurgerCombo = "../images/family burger combo.jpg";
const nonVegCombo = "../images/just for 2 combo.jpg";
const mangoMojito = "../images/mango mojito.jpg";
const milkshakeMealCombo = "../images/milkshake meal combo.jpg";
const mintMojito = "../images/mintMojito.jpeg";
const mojitoMealCombo = "../images/mojito meal combo.jpg";
const ChickenDoubleDTowerBurger = "../images/o1.jpg";
const pepsiMealCombo = "../images/pepsi meal combo.jpg";
const pepsi = "../images/pepsi.jpg";
const mojitos = "../images/pineapple mojito.jpg";
const pistaMilkshake = "../images/pista milkshakeNew.jpg";
const smilies = "../images/smilies.jpg";
const snackAttackCombo = "../images/snack attack combo.jpeg";
const sprite = "../images/sprite.jpg";
const strawBerryMilkshake = "../images/strawberry milkshake.jpg";
const strawBerryMojito = "../images/strawberry mojito.jpg";
const vanillaIcecream = "../images/vanilla ice cream.jpg";
const vanillaMilkshake = "../images/vanilla milkshake.jpg";
const vegBurger = "../images/veg burger.jpg";
const vegNuggets = "../images/veg nuggets.jpg";

const menuItems = [
    {
        id: 1,
        name: "Veg Wrap Combo",
        description: "Wrap - 2 <br> Cheese Corn Nuggets - 6 <br> French Fries - 1 <br> Veg Nuggets - 6 <br> Pepsi - 2",
        price: 439,
        image: vegWrapCombo,
        category: "veg_combo"
    },
    {
        id: 2,
        name: "Snack Attack Veg",
        description: "Smiles - 1 <br> Veg Nuggets - 1 <br> CC Nuggets - 1 <br> Veg Finger - 1 <br> Pepsi - 1",
        price: 297,
        image: vegCombo,
        category: "veg_combo"
    },
    {
        id: 3,
        name: "Patty burger",
        description: "Patty Burger - 1",
        price: 103,
        image: pattyBurger,
        category: "burger"
    },
    {
        id: 4,
        name: "Crunchy crave combo (XL)",
        description: "wrap - 2 Crunchy burger - 2 Hot & Crunchy - 4 Chicken cheese fries - 2 Wings & lollipops - 6 BBQ chicken strips - 3  Milkshake - 2 Sizzling brownie - 1 Mojito - 2",
        price: 1631,
        image: comboXL,
        category: "nonveg_combo"
    },
    {
        id: 5,
        name: "Non veg Wrap combo",
        description: "Wrap - 2 Fries - 1 Chicken popcorn - 1 Chicken strips - 1 Pepsi - 2",
        price: 499,
        image: nonVegWrapCombo,
        category: "nonveg_combo"
    },
    {
        id: 6,
        name: "Double pack combo",
        description: "Double BBQ chicken Wrap - 1 <br> Double crunchy burger - 1 <br> Chicken cheese fries - 1 <br> Pepsi - 2",
        price: 655,
        image: doublePackCombo, // Adjust the path if needed
        category: "nonveg_combo"
    },
    {
        id: 7,
        name: "Red Velvet",
        description: "Red velvet dessert - 1",
        price: 119,
        image: redVelvet, // Adjust the path if needed
        category: "deserts"
    },
    {
        id: 8,
        name: "Triple Brownie",
        description: "Triple brownie - 1",
        price: 110,
        image: brownie, // Adjust the path if needed
        category: "deserts"
    },
    {
        id: 9,
        name: "Black Forest Jar Cake",
        description: "Black forest cake - 1",
        price: 119,
        image: blackForest,
        category: "deserts"
    },
    {
        id: 10,
        name: "Blueberry Mojito",
        description: "Blueberry mojito - 1",
        price: 69,
        image: blueBerryMojito, // Adjust the path if needed
        category: "mojitos"
    },
    {
        id: 11,
        name: "Blue Mojito",
        description: "Blue mojito - 1",
        price: 69,
        image: blueMojito,
        category: "mojitos"
    },
    {
        id: 12,
        name: "Sizzling Brownie",
        description: "Sizzling brownie - 1",
        price: 112,
        image: sizzlingBrownie,
        category: "deserts"
    },
    {
        id: 13,
        name: "Caramel Brownie",
        description: "Brownie - 1",
        price: 107,
        image: caramelBrownie,
        category: "deserts"
    },
    {
        id: 14,
        name: "Chicken BBQ Wrap",
        description: "Chicken BBQ wrap - 1",
        price: 97,
        image: chickenBBQ,
        category: "Wraps"
    },
    {
        id: 15,
        name: "Chicken Crunchy Burger",
        description: "Chicken burger - 1",
        price: 104,
        image: chickenBurger,
        category: "burger"
    },
    {
        id: 16,
        name: "Chicken lollipops",
        description: "Chicken lollipops - 1",
        price: 104,
        image: chickenLollipop,
        category: "chicken"
    },
    {
        id: 17,
        name: "Chicken nuggets",
        description: "Chicken nuggets - 1",
        price: 53,
        image: chickenNuggets,
        category: "chicken"
    },
    {
        id: 18,
        name: "Chicken strips",
        description: "",
        price: 103,
        image: chickenStrips,
        category: "chicken"
    },
    {
        id: 19,
        name: "Chicken wings",
        description: "",
        price: 97,
        image: chickenWings,
        category: "chicken"
    },
    {
        id: 20,
        name: "Chicken wrap",
        description: "",
        price: 89,
        image: chickenWrap,
        category: "Wraps"
    },
    {
        id: 21,
        name: "Choco brownie sundae",
        description: "",
        price: 111,
        image: chocoBrownSundae,
        category: "deserts",
    },
    {
        id: 22,
        name: "Choco lava cake",
        description: "",
        price: 99,
        image: chocoLava,
        category: "deserts",
    },
    {
        key: 23,
        name: "Chocolate Milkshake",
        description: "",
        price: 90,
        image: chocolateMilkshake,
        category: "milkshake",
    },
    {
        key: 24,
        name: "Double chicken burger",
        description: "",
        price: 89,
        image: doubleChickenBurger,
        category: "burger",
    },
    {
        key: 25,
        name: "Crunchy crave Combo (s)",
        description: "Wrap - 1 Crunchy burger - 1 Hot & Crunchy - 2 Fries - 1 Wings & Lollipops - 4 Mojito - 1",
        price: 706,
        image: nonVegComboSmall,
        category: "nonveg_combo",
    },
    {
        id: 26,
        name: "Family burger feast",
        description: "Crunchy burger - 4 Hot & crunchy - 4 Fries - 2 Pepsi - 4",
        price: 965,
        image: familyBurgerCombo,
        category: "nonveg_combo",
    },
    {
        id: 27,
        name: "Just for Two non veg",
        description: "Crunchy burger - 2 Hot & crunchy - 2 Fries - 1 Pepsi - 2",
        image: nonVegCombo,
        price: 482,
        category: "nonveg_combo",
    },
    {
        id: 28,
        name: "Mango mojito",
        description: "Mango mojito - 1",
        image: mangoMojito,
        price: 69,
        category: "mojitos",
    },
    {
        id: 29,
        name: "Milkshake Meal Combo",
        description: "French fries - 4 <br>Milkshake - 1",
        image: milkshakeMealCombo,
        price: 148,
        category: "veg_combo",
    },
    {
        id: 30,
        name: "Mint Mojito",
        description: "Mint Mojito - 1",
        image: mintMojito,
        price: 69,
        category: "mojitos",
    },
    {
        id: 31,
        name: "Mojito Meal",
        description: "French fries - 1, Mojito - 1",
        image: mojitoMealCombo,
        price: 122,
        category: "veg_combo",
    },
    {
        id: 32,
        name: "Chicken double tower burger",
        description: "Chicken burger - 1",
        image: ChickenDoubleDTowerBurger,
        price: 209,
        category: "burger"
    },
    {
        id: 33,
        name: "Pepsi Meal",
        description: "Fries - 1, Pepsi - 1",
        image: pepsiMealCombo,
        price: 90,
        category: "veg_combo"
    },
    {
        id: 34,
        name: "Pepsi",
        description: "Pepsi 350 ml",
        image: pepsi,
        price: 49,
        category: "juices"
    },
    {
        id: 35,
        name: "Pineapple Mojito",
        description: "Pineapple mojito - 1",
        image: mojitos,
        price: 69,
        category: "mojitos"
    },
    {
        id: 36,
        name: "Pista Milkshake",
        description: "Milkshake - 1",
        image: pistaMilkshake,
        price: 90,
        category: "milkshake"
    },
    {
        id: 37,
        name: "Smilies",
        description: "Smilies - 1",
        image: smilies,
        price: 38,
        category: "fries",
    },
    {
        id: 38,
        name: "Snack attack Non veg",
        description: "Strips - 3 & Wings - 3, Chicken lollipops - 3 & Chicken fries - 1, Pepsi - 2",
        image: snackAttackCombo,
        price: 578,
        category: "nonveg_combo"
    },
    {
        id: 39,
        name: "Sprite",
        description: "Sprite 350 ml",
        image: sprite,
        price: 49,
        category: "juices"
    },
    {
        id: 40,
        name: "Strawberry Milkshake",
        description: "Milkshake - 1",
        image: strawBerryMilkshake,
        price: 90,
        category: "milkshake",
    },
    {
        id: 41,
        name: "Strawberry Mojito",
        description: "Mojito - 1",
        image: strawBerryMojito,
        price: 69,
        category: "mojitos",
    },
    {
        id: 42,
        name: "Vanilla ice cream",
        description: "Vanilla ice cream - 2 scoops",
        image: vanillaIcecream,
        price: 48,
        category: "deserts",
    },
    {
        id: 43,
        name: "Vanilla Milkshake",
        description: "Milkshake - 1",
        image: vanillaMilkshake,
        price: 90,
        category: "milkshake",
    },
    {
        id: 44,
        name: "Veg burger",
        description: "Burger - 1",
        image: vegBurger,
        price: 79,
        category: "burger",
    },
    {
        id: 45,
        name: "Veg Nuggets",
        description: "Veg Nuggets - 1",
        image: vegNuggets,
        price: 35,
        category: "fries"
    }

];

function generateMenuItems() {
    const menuContainer = document.getElementById("menuItems");

    menuItems.forEach(item => {
        // Create the column div
        const colDiv = document.createElement("div");
        colDiv.className = `col-sm-6 col-lg-4 all ${item.category}`;

        // Create the box div
        const boxDiv = document.createElement("div");
        boxDiv.className = "box";
        boxDiv.setAttribute("data-key", item.id);

        // Create the inner content
        boxDiv.innerHTML = `
        <div>
          <div class="img-box">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="detail-box">
            <h5>${item.name}</h5>
            <p>${item.description}</p>
            <div class="options">
              <h6>₹${item.price}</h6>
              <button class="cart_btn")">
                <img src="./images/cartIcon.svg" class="cart-icon" alt="Cart"/>
              </button>
              <div class="i">
                <input type="number" class="cart-quantity" value="1" min="1" />
                <i class="fa-solid fa-trash-can" onclick="removeItem(${item.id})"></i>
              </div>
            </div>
          </div>
        </div>`;

        // Append the box to the column div
        colDiv.appendChild(boxDiv);
        // Append the column div to the menu container
        menuContainer.appendChild(colDiv);
    });

    // Add event listener for box clicks
    menuContainer.addEventListener('click', function(event) {
        if (event.target.closest('.box')) {
            openOrderPopup(event);
        }
    });
}

function openOrderPopup(event) {
    const itemId = event.target.closest('.box').getAttribute('data-key');
    const item = menuItems.find(i => i.id == itemId);

    if (item) {
        // Set the image source in the popup
        document.getElementById("foodImage").src = item.image; // Assuming foodImage is the ID of the <img> in the popup

        const orderDetails = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <h4>Price: ₹${item.price}</h4>
        `;
        
        document.getElementById("orderDetails").innerHTML = orderDetails;
        document.getElementById("orderPopup").style.display = "block"; // Show the popup
    }
}


// Close the popup when the user clicks on <span> (x)
document.getElementById("closePopup").onclick = function() {
    document.getElementById("orderPopup").style.display = "none";
}

// Close the popup when the user clicks anywhere outside of the popup
window.onclick = function(event) {
    const popup = document.getElementById("orderPopup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    generateMenuItems();
});


