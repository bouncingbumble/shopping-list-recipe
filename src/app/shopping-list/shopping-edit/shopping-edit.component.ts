import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
  }

  onAddItem(){
    this.ingredientService.addIngredient(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }
}
