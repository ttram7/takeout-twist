console.log('This file works!');

function routeNewPage() {
     window.location = 'restaurants.html';
    }

function routeFoodPage() {
    window.location = 'food-list.html';
}

function routeFoodItemPage() {
    window.location = 'food-item.html';
}

function addToFavorites () {
    const button = 
        document.querySelector('button');
        button.innerHTML = 'Added to favorites!';
}