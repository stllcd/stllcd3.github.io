const menuItems = {
    "specialties": [
        "Fried Chicken (Whole) - PHP 420.00",
        "Fried Chicken (Half) - PHP 210.00",
        "Crispy Pata  - PHP 499.00",
        "Crispy Ulo (Half) - PHP 599.00",
    ],
    "soup": [
        "Cream of Mushroom - PHP 180.00",
        "Crab & Corn - PHP 180.00",
        "Ensaladang Talong - PHP 100.00",
        "Nachos - PHP 120.00",
        "Nachos Special - PHP 160.00",
        "French Fries - PHP 110.00",
        "Cheese Sticks - PHP 110.00"
    ],
    "side": [
        "Plain Rice - PHP 25.00",
        "Garlic Rice - PHP 30.00",
        "Toasted Bread - PHP 20.00",
        "Egg - PHP 15.00",
        "Shanghai Fried Rice - PHP 105.00",
        "Short Order Pancit Canton / Bihon - PHP 185.00",
        "Per Bilao Pancit Canton / Bihon (Small, 15 Pax) - PHP 650.00",
        "Per Bilao Pancit Canton / Bihon (Medium, 20 Pax) - PHP 900.00",
        "Per Bilao Pancit Canton / Bihon (Large, 30 Pax) - PHP 1,250.00",
        "Short Order Spaghetti - PHP 200.00",
        "Per Bilao Spaghetti (Small, 15 Pax) - PHP 800.00",
        "Per Bilao Spaghetti (Medium, 20 Pax) - PHP 1,100.00",
        "Per Bilao Spaghetti (Large, 30 Pax) - PHP 1,350.00"
    ],
    "group-meals": [
        "Group A: PHP 3,500.00 - Soup, Fried Chicken Whole, Lumpia Shanghai, Pancit Canton, Boneless Bangus, Chopsuey, Plain Rice, Pitcher of Ice Tea, Leche Flan",
        "Group B: PHP 3,900.00 - Sinigang na Hipon, Lechin Kawali, Pancit Canton, Chopsuey, Fried Chicken Whole, Boneless Bangus, Plain Rice, Pitcher of Ice Tea, Leche Flan",
        "Group C: PHP 4,200.00 - Sinigang na Hipon, Chopsuey, Fried Chicken Whole, Crispy Pata, Pancit Canton, Sweet & Sour Fish Fillet, Plain Rice, Pitcher of Ice Tea, Leche Flan",
        "Group D: PHP 4,500.00 - Sinigang na Hipon, Fried Chicken Whole, Crispy Pata, Boneless Bangus, Kare kare, Plain Rice, pitcher of Ice Tea, Leche Flan"
    ],
    "pulutan": [
        "Dinakdakan - PHP 270.00",
        "Kilawin Tuna - PHP 260.00",
        "Sizzling Hotdog - PHP 160.00",
        "Shrimp Gambas - PHP 260.00",
        "Tokwa't Baboy - PHP 150.00",
        "Inihaw na Blue Marlin / Tuna / Tanigue - PHP 200.00"
    ],
    "sisig": [
        "Tofu Sisig - PHP 219.00",
        "Chicken Sisig - PHP 215.00",
        "Pork Sisig - PHP 215.00",
        "Sizzling Seafood - PHP 280.00",
        "Boneless Bangus - PHP 260.00",
        "Pan Fry Fish - PHP 250.00",
        "Sweet & Sour Fish Fillet - PHP 205.00",
        "Calamares - PHP 230.00",
        "Adobong Pusit - PHP 205.00",
        "Sinigang na Hipon - PHP 330.00",
        "Sinigang na Isda (Bangus Belly, Tanigue, Talakitok, Tuna) - PHP 320.00",
    ],
    "sarap": [
        "Chicken Canton Meal - PHP 220.00",
        "Chicken Chopsuey Meal - PHP 220.00",
        "Chicken Meal - PHP 170.00",
        "Chicken Lumpia Meal - PHP 220.00",
        "Lechin Kawali Meal - PHP 220.00",
        "Canton Shanghai Meal - PHP 195.00",
        "Tofu Sisig Meal - PHP 199.00",
        "Pork Sisig Meal - PHP 199.00",
        "Chicken Sisig Meal - PHP 199.00",
        "Pork Steak Meal - PHP 199.00",
        "Burger Steak Meal - PHP 199.00"
    ],
    "bestseller": [
        "Lechon Kawali - PHP 260.00",
        "Pork Adobo - PHP 225.00",
        "Grilled Liempo - PHP 250.00",
        "Sinigang na Baboy - PHP 310.00",
        "Lumpia Shanghai - PHP 220.00",
        "Pork BBQ on Stick - PHP 220.00",
        "Pork Steak - PHP 220.00",
        "Buttered Chicken - PHP 240.00",
        "Sizzling Sweet & Spicy Chicken - PHP 240.00",
        "Buffalo Wings (Hot & Spicy) - PHP 240.00",
        "Parmesan Chicken Wings - PHP 240.00",
        "Chicken Adobo - PHP 225.00",
        "Chicken Pork Adobo - PHP 225.00"
    ],
    "favorite": [
        "Kare-kare - PHP 398.00",
        "Bulalo - PHP 520.00",
        "Nilagang Baka - PHP 325.00",
        "Sinigang na Hipon - PHP 250.00"
    ],
    "vegetables": [
        "Chopsuey - PHP 205.00",
        "Ceasar Salad - PHP 130.00",
        "Pinakbet - PHP 205.00",
        "Tortang Talong - PHP 180.00",
        "Gising Gising - PHP 195.00"
    ],
    "breakfast": [
        "Tapsilog - PHP 150.00",
        "Bangsilog - PHP 150.00",
        "Hamsilog - PHP 150.00",
        "Longsilog - PHP 135.00",
        "Hotsilog - PHP 125.00",
        "Cornsilog - PHP 125.00",
        "Tocilog - PHP 150.00"
    ],
    "merienda": [
        "Chicken Salad Sandwich - PHP 100.00",
        "Cheese Burger Sandwich - PHP 100.00",
        "Ham & Cheese Sandwich - PHP 80.00",
        "Monte Cristo Sandwich - PHP 120.00",
        "Clubhouse - PHP 140.00"
    ],
    "pizza": [
        "Sisig Pizza - PHP 279.00",
        "Ham & Cheese - PHP 279.00",
        "Hawaiian Style - PHP 289.00",
        "Chicken Parmesan Pizza - PHP 289.00"
    ],
    "dessert": [
        "Leche Flan (Small) - PHP 50.00",
        "Leche Flan (Big) - PHP 150.00",
        "Fruit Salad - PHP 50.00",
        "Yema Cake (Small) - PHP 150.00",
        "Halo-halo (Regular) - PHP 120.00",
    ]
};

const drinksItems = {
    "milktea": [
        "Hokaido",
        "Okinawa",
        "Matcha Green Tea",
        "Wintermelon",
        "Taro",
        "Salted Caramel",
        "Cookies & Cream",
        "Salted Cream Cheese",
        "Dark Chocolate",
        "Classic Milktea",
        "Blueberry",
        "Strawberry",
    ],
    "hot": [
        "Hot Tea - PHP 50.00",
        "Brewed Coffee - PHP 65.00",
        "Cafe Latte - PHP 70.00",
        "Salted Caramel Mocha - PHP 70.00",
        "Dark Choco Mocha - PHP 70.00",
        "Hazelnut Latte - PHP 70.00",
        "Cafe Americano - PHP 65.00"
    ],
    "brew": [
        "Iced Coffee - PHP .00",
        "Iced Latte - PHP .00",
        "Iced Mocha - PHP .00",
        "Okinawa Iced Coffee - PHP .00",
        "Caramel Iced Coffee - PHP .00",
        "Red Velvet Iced Coffee - PHP .00",
        "Hazelnut Iced Coffee - PHP .00"
    ],
    "juice": [
        "Honey Lemon - PHP .00",
        "Lemongrass - PHP .00",
        "Pandan Juice - PHP .00",
        "Ginger Lemon Tea - PHP .00",
        "Malunggay Tea - PHP .00"
    ],
    "beverages": [
        "Bottled Water - PHP 30.00",
        "Softdrinks in Can - PHP 55.00",
        "Softdrinks 1.5 - PHP 150.00",
        "Group Meal Pitcher of Ice Tea - PHP 130.00",
        "Pineapple Juice - PHP 65.00",
        "Mango Juice - PHP 65.00",
        "Four Season Juice - PHP 65.00",
        "Sago Gulaman - PHP 65.00",
        "Calamnsi Juice (Hot or Cold) - PHP 35.00",
        "Red Iced Tea - PHP 45.00",
        "Blue Lemonade (Glass) - PHP 45.00",
        "Blue Lemonade (Pitcher) - PHP 130.00",
        "Cucumber Lemon Juice (Pitcher) - PHP 130.00"
    ],
    "fruit": [
        "Ripe Mango Shake - PHP 80.00",
        "Green Mango Shake - PHP 80.00",
        "Corn Shake - PHP 80.00",
        "Banana Shake - PHP 80.00",
        "Melon Shake - PHP 80.00"
    ],
    "cold": [
        "San Miguel Light - PHP 80.00",
        "San Miguel Pale Pilsen - PHP 80.00",
        "San Miguel Flavored Drinks - PHP 80.00",
        "Smirnoff - PHP 80.00",
        "Red Horse 500 - PHP 95.00",
        "Red Horse Litro - PHP 190.00",
        "Bucket of 6 Bootles - PHP 450.00",
        "Bucket of RH 500 - PHP 540.00",
    ],
    "tower": [
        "Blue Lagoon - PHP 399.00",
        "Tequila Downers - PHP 399.00",
        "Gin Fiss - PHP 430.00",
        "Margarita Cocktail - PHP 430.00",
        "The Bomb - PHP 430.00",
        "Red Horse - PHP 550.00"
    ],
    "alcohol": [
        "Black Label - PHP 1,800.00",
        "Fundador Solera - PHP 1,100.00",
        "Fundador Light - PHP 750.00",
        "Alfonso I - PHP 750.00",
        "Emperador Light - PHP 350.00",
        "Fundador Double Lighy - PHP 450.00",
        "Fundador Gold Reserve - PHP 450.00",
    ]
};

const bestSellersSection = document.querySelector('.best-seller-section');
const drinkItemsSection = document.getElementById('drinks-items'); 
const menuItemsSection = document.getElementById('menu-items');
const menuList = document.getElementById('menu-list');
const menuCategoryTitle = document.getElementById('menu-category-title');
const backBtn = document.getElementById('back-btn');

const showMenuItems = (category) => {
    menuCategoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ");
    menuList.innerHTML = '';
    if (menuItems[category]) {
        menuItems[category].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            menuList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No items available.';
        menuList.appendChild(listItem);
    }
    bestSellersSection.style.display = 'none';
    menuItemsSection.style.display = 'block';
};

const showDrinkItems = (drinkCategory) => {
    menuCategoryTitle.textContent = drinkCategory.charAt(0).toUpperCase() + drinkCategory.slice(1).replace("-", " ");
    menuList.innerHTML = '';
    if (drinkItems[drinkCategory]) {
        drinkItems[drinkCategory].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            menuList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No drinks available.';
        menuList.appendChild(listItem);
    }
    bestSellersSection.style.display = 'none';
    drinkItemsSection.style.display = 'block'; 
};

document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-category');
        if (category === 'drinks') {
            const drinkCategory = e.target.getAttribute('data-drink-category');
            if (drinkCategory) {
                showDrinkItems(drinkCategory);
            } else {
                drinkItemsSection.style.display = 'flex'; 
                bestSellersSection.style.display = 'none';
            }
        } else {
            showMenuItems(category);
        }
    });
});

backBtn.addEventListener('click', () => {
    bestSellersSection.style.display = 'flex';
    menuItemsSection.style.display = 'none';
    drinkItemsSection.style.display = 'none';
    menuCategoryTitle.textContent = '';
});