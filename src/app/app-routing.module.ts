import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitDetailsComponent } from './fruit-details/fruit-details.component';

const routes: Routes = [
  { path: 'fruit/:name', component: FruitDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
