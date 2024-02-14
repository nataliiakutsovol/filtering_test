import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/data-view/data-view.module').then(m => m.DataViewModule)
    }
];
