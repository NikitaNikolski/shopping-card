import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardItemsComponent } from './card-items.component';

const routes: Routes = [
    {
        path: '',
        component: CardItemsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CardItemsRoutingModule { }