let loadMeals = (value = 'fish') => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

let displayMeals = meals => {
    let mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerText = '';
    meals.forEach(meal => {
        console.log(meal);
        let mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title mb-3">${meal.strMeal}</h5>
                    <p class="card-text">Meal ID: ${meal.idMeal}</p>
                    <p class"card-text">Origin: ${meal.strArea}</p>
                    <p class"card-text">Category: ${meal.strCategory}</p>
                    <button id="btn-meal-instructions" class="btn btn-primary">Instructions</button>
                </div>
            </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

let searchMeals = () => {
    let searchField = document.getElementById("meal-search").value;
    console.log(searchField);
    loadMeals(searchField);
}

loadMeals();