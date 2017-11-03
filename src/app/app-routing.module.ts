import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    // Path: The router matches this route's path to the URL in the browser address bar
    // Component: The component that the router should create when navigating to this route 
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes',  component: HeroesComponent  },
  ];

  @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
  })
  export class AppRoutingModule {}