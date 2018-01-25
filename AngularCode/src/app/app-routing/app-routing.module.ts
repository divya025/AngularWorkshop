import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './../about/about.component';
import { CollectionComponent } from './../collection/collection.component';

const routes: Routes = [
  {
   path: 'about',
   component: AboutComponent
   },
   {
   path: 'collection',
   component: CollectionComponent
   },
   {
   path: '',
   redirectTo: '/about',
   pathMatch: 'full'
   }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
   })

   export class AppRoutingModule { }
