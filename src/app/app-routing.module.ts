import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CardItemsComponent } from './card-items/card-items/card-items.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: '',
                redirectTo: 'card-items',
                pathMatch: 'full'
            },
            {
                path: 'card-items',
                loadChildren: 'app/card-items/card-items.module#CardItemsModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }