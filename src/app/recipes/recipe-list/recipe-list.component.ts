import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'a test desc', 'https://www.iheartnaptime.net/wp-content/uploads/2016/08/pizza-740x740.jpg'),
    new Recipe('Another Test recipe', 'a test desc', 'https://www.iheartnaptime.net/wp-content/uploads/2016/08/pizza-740x740.jpg')
  ];
  @Output() clickedRecipe: EventEmitter<Recipe> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(recipe){
    this.clickedRecipe.emit(recipe);
  }
}
