import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';

@Injectable()
export class IngredientService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  addIngredient(type, amount){
    this.ingredients.push(new Ingredient(type, amount));
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  getIngredients(){
    return this.ingredients.slice();
  }
}
