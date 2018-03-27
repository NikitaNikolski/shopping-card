import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardItemsRoutingModule } from './card-items/card-items-routing.module';

import { CardItemsComponent } from './card-items/card-items.component';
import { CardItemComponent } from '../card-item/card-item.component';

@NgModule({
  imports: [
    CommonModule,
    CardItemsRoutingModule
  ],
  declarations: [
    CardItemsComponent,
    CardItemComponent
  ]
})
export class CardItemsModule { }
