import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from './search.service';


@Component({

  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInput: string;
  drinks: any[];
  drkName: string;

  constructor(private search: SearchService) { }

  ngOnInit() {
  }

  getCocktails() {
    this.search.getCocktails(this.searchInput).subscribe(drink => this.drinks = drink)
    this.searchInput = ''
  }

  onLikeClick(message: string): void {
    this.drkName = message
  }

}
