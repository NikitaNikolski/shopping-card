import { Component, OnInit } from '@angular/core';

import { ICardItem } from '../../card-item/card-item.model';
import { TestCardItems } from '../../items-test';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.less']
})
export class CardItemsComponent implements OnInit {

  public cardItems: ICardItem[] = TestCardItems
  
  constructor() { }

  ngOnInit() {
  }

}
