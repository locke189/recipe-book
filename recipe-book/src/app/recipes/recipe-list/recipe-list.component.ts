import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Scnitzel', 'Yummy', 'http://kitchenproject.com/german/recipes/Schnitzel/schnitzel.jpg',[]),
    new Recipe('Summer Salad', 'Okayish', 'http://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/beetroot-feta-grain-salad.jpg',[])
  ];
  recipe = new Recipe('Dummy', 'Dummy', 'http://prevenblog.com/wp-content/uploads/Dummy.jpg',[]);
  @Output() recipeSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
