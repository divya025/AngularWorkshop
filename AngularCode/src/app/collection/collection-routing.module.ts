import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionComponent } from './collection.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookGuardService } from '../guards/book-guard.service';
const routes: Routes = [
 {
 path: '', component: CollectionComponent
 },
 {
 path: ':id',
 canActivate: [BookGuardService],
 component: BookDetailComponent
 }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
