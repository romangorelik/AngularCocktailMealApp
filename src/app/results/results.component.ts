import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() drinksChild: any[];
  @Output() likeClicked: EventEmitter<string> = new EventEmitter<string>()
  
  constructor() { }

  ngOnInit() {
  }

  addLike(name: string): void {
    this.likeClicked.emit(name)
  }

}
