import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';
import { Ingredient } from '../../ingredient/Ingredient';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipeId!: number;
  @Input() recipeDetail!: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService

  ) {}

  getRecipe(): void{
    this.recipeService.getRecipe(this.recipeId).subscribe(apiData => {
      this.recipeDetail = apiData;
    })
  }

  ngOnInit(): void {
    if(this.recipeDetail === undefined){
      this.recipeId = +this.route.snapshot.paramMap.get('id')!
      if(this.recipeId){
        this.getRecipe();
      }
    }
  }

  ingredienteMas(recipe: Recipe): string{
    

    var lst = recipe.ingredientes;
    var cantidadMayor = 0;
    var nombre = '';
    for(const r of lst){
      if(Number ( r.cantidad) > cantidadMayor){
        cantidadMayor = Number(r.cantidad);
        nombre = r.nombre;

      }
    }
    return nombre;
  }
}
