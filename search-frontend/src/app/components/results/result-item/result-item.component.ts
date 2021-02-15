import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {

  @Input() item : Item;
  @Output() keywordClicked=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
