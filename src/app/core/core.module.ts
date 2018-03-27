import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketStorageService } from './basket-storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    BasketStorageService
  ]
})
export class CoreModule { }
