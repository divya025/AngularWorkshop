import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './../about/about.component';
import { CollectionComponent } from './../collection/collection.component';
import { BookDetailComponent } from './../book-detail/book-detail.component';
import { BookGuardService } from './../guards/book-guard.service';

const routes: Routes = [
  {
   path: 'about',
   component: AboutComponent
   },
   {
   path: 'collection',
   loadChildren: 'app/collection/collection.module#CollectionModule'
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
