import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DishListComponent} from './dishes/dish-list/dish-list.component';
import {DishDetailsComponent} from './dishes/dish-details/dish-details.component';

const routes: Routes = [
  { path: 'dish-list', component: DishListComponent },
  { path: 'dish-details', component: DishDetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
