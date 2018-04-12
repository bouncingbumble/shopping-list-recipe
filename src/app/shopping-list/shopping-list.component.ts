import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    this.ingredientService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

}
