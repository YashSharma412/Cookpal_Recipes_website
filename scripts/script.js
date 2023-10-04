let myJSON = 
'[ { "name": "Veggie Delight", "imageSrc": "https://source.unsplash.com/random?veggies", "time": "30 min", "type": "veg", "isLiked": false, "rating": 4.2 }, { "name": "Chicken Grill", "imageSrc": "https://source.unsplash.com/random?chicken", "time": "45 min", "type": "non-veg", "isLiked": false, "rating": 4.5 }, { "name": "Cheese Pizza", "imageSrc": "https://source.unsplash.com/random?pizza", "time": "40 min", "type": "veg", "isLiked": false, "rating": 4.1 }, { "name": "Steak", "imageSrc": "https://source.unsplash.com/random?steak", "time": "60 min", "type": "non-veg", "isLiked": false, "rating": 4.7 }, { "name": "Grilled Salmon", "imageSrc": "https://source.unsplash.com/random?salmon", "time": "50 min", "type": "non-veg", "isLiked": false, "rating": 4.6 }, { "name": "Tomato Pasta", "imageSrc": "https://source.unsplash.com/random?pasta", "time": "35 min", "type": "veg", "isLiked": false, "rating": 4.0 }, { "name": "Vegan Salad", "imageSrc": "https://source.unsplash.com/random?salad", "time": "20 min", "type": "veg", "isLiked": false, "rating": 3.9 }, { "name": "Fried Chicken", "imageSrc": "https://source.unsplash.com/random?friedChicken", "time": "55 min", "type": "non-veg", "isLiked": false, "rating": 4.3 }, { "name": "Mushroom Risotto", "imageSrc": "https://source.unsplash.com/random?risotto", "time": "45 min", "type": "veg", "isLiked": false, "rating": 4.5 }, { "name": "Burger", "imageSrc": "https://source.unsplash.com/random?burger", "time": "30 min", "type": "non-veg", "isLiked": false, "rating": 4.2 }, { "name": "Paneer Tikka", "imageSrc": "https://source.unsplash.com/random?paneerTikka", "time": "40 min", "type": "veg", "isLiked": false, "rating": 4.4 }, { "name": "BBQ Ribs", "imageSrc": "https://source.unsplash.com/random?ribs", "time": "70 min", "type": "non-veg", "isLiked": false, "rating": 4.6 }, { "name": "Caesar Salad", "imageSrc": "https://source.unsplash.com/random?caesarSalad", "time": "25 min", "type": "veg", "isLiked": false, "rating": 3.8 }, { "name": "Fish Tacos", "imageSrc": "https://source.unsplash.com/random?fishTacos", "time": "35 min", "type": "non-veg", "isLiked": false, "rating": 4.3 }, { "name": "Chocolate Cake", "imageSrc": "https://source.unsplash.com/random?chocolateCake", "time": "90 min", "type": "veg", "isLiked": false, "rating": 4.9 } ]';

const recipes = JSON.parse(myJSON);
const recipeContainer = document.getElementById('recipieCardContainer');
const searchInput = document.getElementById('searchInput');

function generateRecipeCard(recipes){
    recipes.forEach((recipe) => {
        const card = document.createElement('div');
        card.className = 'recipeCard';

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.imageSrc;
        recipeImage.alt = 'recipe_img';
        card.appendChild(recipeImage);

        const cardBody = document.createElement('div');
        cardBody.className = 'cardBody';
        card.appendChild(cardBody);

        const bodyDivOne = document.createElement('div');
        cardBody.appendChild(bodyDivOne);

        const vegOrNot = document.createElement('span');
        vegOrNot.className = 'VegOrNonVeg';
        vegOrNot.innerText = recipe.type;
        bodyDivOne.appendChild(vegOrNot);

        const starImg =  document.createElement('img');
        starImg.src = './assets/Star.svg';
        starImg.alt = 'rating star';
        bodyDivOne.appendChild(starImg);

        const recipeRating = document.createElement('span');
        recipeRating.className = 'recipeRating';
        recipeRating.innerText = recipe.rating;
        bodyDivOne.appendChild(recipeRating);

        const recipeName = document.createElement('div');
        recipeName.className = 'recipeName';
        recipeName.innerText = recipe.name;
        cardBody.appendChild(recipeName);

        const bodyDivTwo = document.createElement('div');
        cardBody.appendChild(bodyDivTwo);

        const recipeTime = document.createElement('span');
        recipeTime.className = 'recipeTime';
        recipeTime.innerText = recipe.time;
        bodyDivTwo.appendChild(recipeTime);

        const recipeLike = document.createElement('span');
        recipeLike.classList.add('recipeLikeBtn');
        recipeLike.innerText = recipe.isLiked ? '❤️':'🖤';
        
        recipeLike.addEventListener('click', () => {
            recipe.isLiked = !recipe.isLiked; // toggle like true and false
            recipeLike.innerText = recipe.isLiked ? '❤️':'🖤';
        });
        bodyDivTwo.appendChild(recipeLike);

        const recipeComment = document.createElement('span');
        bodyDivTwo.appendChild(recipeComment);

        const commentImg = document.createElement('img');
        commentImg.src = './assets/comments.svg';
        commentImg.alt = 'Comments';
        recipeComment.appendChild(commentImg);
        recipeContainer.appendChild(card);
    });
}

function displayRecipeCards(recipies){
    recipeContainer.innerHTML = '';
    generateRecipeCard(recipies);

}
//display all cars initially
displayRecipeCards(recipes);

//menu btn code
const menuBtn = document.getElementById('mobMenu');
const menuCloseBtn = document.getElementById('mobDrawerClose');
const menu = document.getElementById('mobileDrawer');
menu.remove();
const websiteBody = document.getElementsByTagName('body')[0];
menuCloseBtn.addEventListener('click', ()=>{
    console.log('closeBtn clicked')
    menu.remove();
})
menuBtn.addEventListener('click', ()=>{
    console.log('btn clicked')
    websiteBody.insertBefore(menu, websiteBody.firstChild);
})

// search functionality implimentation