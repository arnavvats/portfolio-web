import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
