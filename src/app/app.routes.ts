import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [

    {
        path: '',
        component: ListComponent,
        title: 'Home page',
      },
      {
        path: 'details/:id',
        component: DetailComponent,
        title: 'Home details',
      },
];
