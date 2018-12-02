import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { SearchMealsComponent } from './search-meals/search-meals.component';
import { ResultsMealComponent } from './results-meal/results-meal.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    SearchMealsComponent,
    ResultsMealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'drinks', component: SearchComponent},
      {path: 'meals', component: SearchMealsComponent},
      {path: '', redirectTo:'drinks', pathMatch:'full'},
      {path: '**', redirectTo:'drinks', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
