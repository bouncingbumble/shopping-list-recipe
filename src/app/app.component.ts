import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  recipesNav: boolean;
  shoppingNav: boolean;

  detirmineNav(tab: string){
    if(tab == "recipes"){
      this.recipesNav = true;
      this.shoppingNav = false;
    }else if(tab == "shopping"){
      this.recipesNav = false;
      this.shoppingNav = true;
    }else{
      console.log(tab + " Is not a valid nav");
    }

  }

}
