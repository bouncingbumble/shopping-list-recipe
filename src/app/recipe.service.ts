import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeClicked = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test recipe',
      'a test desc',
      'https://www.iheartnaptime.net/wp-content/uploads/2016/08/pizza-740x740.jpg',
      [new Ingredient("Flour", 2), new Ingredient("Peanut Butter", 6)]
    ),
    new Recipe(
      'Another Test recipe',
      'a test desc',
      'https://www.iheartnaptime.net/wp-content/uploads/2016/08/pizza-740x740.jpg',
      [new Ingredient("Cacao", 1), new Ingredient("Jalepenos", 15)]
    )
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }

}
