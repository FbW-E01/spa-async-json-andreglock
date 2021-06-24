// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import { recipesJSON } from './data';

// \/ All of your javascript should go here \/
const recipes = JSON.parse(recipesJSON);

for (const property in recipes) {
    recipes[property].forEach(element => {
        document.getElementById(`${property}`).innerHTML += `<div class="card m-2" style="width: 18rem;">
        <img src="${element.image}" class="card-img-top" alt="${element.title}" style="height: 210px; object-fit: cover">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.author}<hr>Ingredients: ${element.ingredients.join(" ")}.</p>
        </div>
      </div>`  
    });
}

