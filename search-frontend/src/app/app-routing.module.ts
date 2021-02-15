import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/common/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  {path:"search",component:HomeComponent},
  {path:'results',component:ResultsComponent},
  {path:'error',component:ErrorComponent},
  {path:'**',redirectTo:'/search'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
