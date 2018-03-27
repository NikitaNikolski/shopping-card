import { Injectable } from '@angular/core';
import { ICardItem } from '../card-item/card-item.model';

@Injectable()
export class BasketStorageService {

  private basketStorage: ICardItem[] = [];

  public get countItems(): number {
    return this.basketStorage.length;
  }

  constructor() { }

  public addItemToStorage(item: ICardItem): void {
    this.basketStorage.push(item);
  }

  public removeItemFromStorage(item: ICardItem): void {
    const index = this.basketStorage.findIndex(_ => _.id === item.id);

    if (index > -1) {
      this.basketStorage.splice(index, 1);
    }
  }

  public isInBasket(itemId: string): boolean {
    return this.basketStorage.some(_ => _.id === itemId);
  }

}
