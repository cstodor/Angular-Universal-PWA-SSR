import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitDetailsComponent } from './fruit-details/fruit-details.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fruits', component: FruitsListComponent },
  { path: 'fruit/:name', component: FruitDetailsComponent },
  { path: 'animals', component: AnimalsListComponent },
  { path: 'animal/:name', component: AnimalDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
