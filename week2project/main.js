var emptyCategory = [];

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

$('#breakfast').click(function() {
	addItems('breakfast');
});

$('#lunch').click(function() {
	addItems('lunch');
});

$('#dinner').click(function() {
	addItems('dinner');
});

// Add click handlers to each shopping item
$('#selections').on('click', '.shopping-item', function() {
	var itemName = $(this).find('p').text();
	addToCart(itemName);
});


// Populate menu items
function addItems(category) {
	emptyItems();

	var menuItems;
	switch(category) {
		case 'breakfast':
			menuItems = breakfastItems;
			break;
		case 'lunch':
            menuItems = lunchItems;
			break;
		case 'dinner':
            menuItems = dinnerItems;
			break;
		default:
	}

	var updatedList = $('<ul>');
	for(var i = 0; i < menuItems.length; i++) {
		var currentItem = menuItems[i];

		updatedList.append(
			`<li class="shopping-item">
				<img src="${currentItem.img}">
				<p>${currentItem.name}</p>
			</li>`);
	}

	$('#selections').append(updatedList);
}

// Clear our current shopping-items
function emptyItems() {
	$('#selections').empty();
}

// Add item to shopping cart
function addToCart(item) {
	$('#shoppingcart ul').append(`
		<li>
			${item}
		</li>
	`);
}








// document.getElementById('breakfast').addEventListener('click', addBreakfast);
// document.getElementById('lunch').addEventListener('click', addLunch);
// document.getElementById('dinner').addEventListener('click', addDinner);



// function addBreakfast(){
//     function emptyItems() {
//         $('selections').empty();
//     }
//     console.log('Breakfast has been clicked');
// }
// function addLunch(){
//     lunchItems
// }
// function addDinner(){
//     dinnerItems
// }

// function emptyItems() {
// 	$('selections').empty();
// }