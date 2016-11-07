import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Scnitzel', 'Yummy', 'http://kitchenproject.com/german/recipes/Schnitzel/schnitzel.jpg',[ new Ingredient('French fries', 2), new Ingredient('Pork meat', 1)]),
    new Recipe('Summer Salad', 'Okayish', 'http://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/beetroot-feta-grain-salad.jpg',[])
  ]
  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}
