import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatListModule, MatCardModule, MatSlideToggleModule, 
  MatDialogModule, MatIconModule, MatInputModule, 
  MatSnackBarModule, MatTabsModule, MatButtonModule,
  MatLineModule, MatToolbarModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';

import { HttpModule } from '@angular/http';
import { TabsComponent } from './tabs/tabs.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatListModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,  
    MatButtonModule,  
    MatLineModule,
    MatInputModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
