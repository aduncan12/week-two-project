var breakfastItems = [
    {   img: './assets/Breakfast/bacon.png',
        name: 'Bacon'},
    {   img: './assets/Breakfast/eggs.jpeg',
        name: 'Eggs'},
    {   img: './assets/Breakfast/pancakes.jpeg',
        name: 'Pancakes'},
    {   img: './assets/Breakfast/fruit.jpeg',
        name: 'Fruit'},
    {   img: './assets/Breakfast/biscuits.jpeg',
        name: 'Biscuits'},
    {   img: './assets/Breakfast/waffles.png',
        name: 'Waffles'},        
    {   img: './assets/Breakfast/toast.jpeg',
        name: 'Toast'},
    {   img: './assets/Breakfast/homefries.jpeg',
        name: 'Home Fries'},                        
];

var lunchItems = [
    {   img: './assets/Lunch/burger.jpeg',
        name: 'Cheeseburger'},
    {   img: './assets/Lunch/clubsandwich.jpeg',
        name: 'Club Sandwich'},
    {   img: './assets/Lunch/grilledcheese.jpeg',
        name: 'Grilled Cheese Sandwich'},
    {   img: './assets/Lunch/salad.jpeg',
        name: 'Salad'},
    {   img: './assets/Lunch/fries.jpeg',
        name: 'French Fries'},
    {   img: './assets/Lunch/pastasalad.jpeg',
        name: 'Pasta Salad'}        
];

var dinnerItems = [
    {   img: './assets/Dinner/chicken.jpeg',
        name: 'Grilled Chicken'},
    {   img: './assets/Dinner/chefsalad.jpeg',
        name: 'Chef Salad'},
    {   img: './assets/Dinner/potato.jpeg',
        name: 'Baked Potato'},
    {   img: './assets/Dinner/steak.png',
        name: 'Steak'},
    {   img: './assets/Dinner/pork.jpeg',
        name: 'Pork Chops'},
    {   img: './assets/Dinner/soup.jpeg',
        name: 'Tomato Soup'},
    {   img: './assets/Dinner/salmon.jpeg',
        name: 'Salmon'},
];

document.getElementById('breakfast').addEventListener('click', populateItems)



var populateItems = function (){
    breakfastItems
}