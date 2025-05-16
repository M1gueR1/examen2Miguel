import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { recipeData } from '../recipeData';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  selected: Boolean = false;
  selectedRecipe: Recipe | null = null;

  constructor(private recipeService: RecipeService) {}

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe((books) => {
      this.recipes = books;
    });
  }

  ngOnInit() {
    this.getRecipes();
  }

  onSelect(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.selected = true;
  }

  calcularCantidadIngr(recipe: Recipe): number{
    return recipe.ingredientes.length;
  }

}
