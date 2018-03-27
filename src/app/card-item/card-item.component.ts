import { Component, OnInit, Input } from '@angular/core';

import { BasketStorageService } from '../core/basket-storage.service';

import { ICardItem } from './card-item.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.less']
})
export class CardItemComponent implements OnInit {

  @Input("data") data: ICardItem;
  
  public get isInBasket(): boolean {
    return this.basketStorageService.isInBasket(this.data.id);
  }

  constructor(
    private basketStorageService: BasketStorageService
  ) { }

  ngOnInit() {
  }

  public addToBasket(): void {
    this.basketStorageService.addItemToStorage(this.data);
  }

  public removeFromBasket(): void {
    this.basketStorageService.removeItemFromStorage(this.data);
  }

}
