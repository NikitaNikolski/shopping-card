import { Component } from '@angular/core';

import { BasketStorageService } from './core/basket-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(
    private basketStorageService: BasketStorageService
  ) {}

  public get countItemsInTheBasket(): number {
    return this.basketStorageService.countItems;
  }

}
