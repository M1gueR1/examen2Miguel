import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientModule } from '../ingredient/ingredient.module';
import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
  declarations: [RecipeListComponent, RecipeDetailComponent],
  imports: [CommonModule, IngredientModule, RecipeRoutingModule],
  exports: [RecipeListComponent, RecipeDetailComponent],
})
export class RecipeModule {}
