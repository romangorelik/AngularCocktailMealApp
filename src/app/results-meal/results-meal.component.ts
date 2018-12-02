import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-results-meal',
  templateUrl: './results-meal.component.html',
  styleUrls: ['./results-meal.component.css']
})
export class ResultsMealComponent implements OnInit {
  @Input() mealsChild: any[]
  @Output() likedMeal: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }

  addMeal(message: string): void {
    this.likedMeal.emit(message)
  }

}
