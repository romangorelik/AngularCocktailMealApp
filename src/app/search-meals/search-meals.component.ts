import { Component, OnInit } from '@angular/core';
import { SearchmealsService } from './searchmeals.service';

@Component({

  templateUrl: './search-meals.component.html',
  styleUrls: ['./search-meals.component.css']
})
export class SearchMealsComponent implements OnInit {
  meals: any[]
  searchInput: string
  mealName: string

  constructor(private mealService: SearchmealsService) { }

  ngOnInit() {
  }

  getMealsNow(): void {
    this.mealService.getMeals(this.searchInput).subscribe(meal => this.meals = meal)
    
  }

  clickedOnMeal(message): void {
    this.mealName = message
  }


}
