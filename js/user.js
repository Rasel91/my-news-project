const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = meals => {
    console.log(meals)
    const mealContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
        console.log(meal);
    });

    // const meal of meals {
    //     const mealDiv = document.createElement('div');
    //     mealDiv.classList.add('meal');
    //     mealDiv.innerHTML = `
    //     <h3> meal Name: </h3>
    //     <p> meal Id: </p>

    //     `;
    //     mealContainer.appendChild(mealDiv)
    // }
}


loadMeals();