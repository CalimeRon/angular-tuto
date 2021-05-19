import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
  // path = URL in browser, component = the component to create when navigating to this route
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  //@ngModule is the metadata. the imports expression initializes the router and starts listening
  //the export is to make RouterMoule available throughout the app
  
export class AppRoutingModule { }
