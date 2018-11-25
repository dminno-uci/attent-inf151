import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';
import { ViewComponent } from './components/view/view.component';

export const appRoutes: Routes = [
  { path: 'create',
    component: CreateComponent,
  },
  {
    path: '',
    redirectTo: '/create',
    pathMatch: 'full'
  },
  { path: 'read',
    component: ReadComponent
  },
  { path: 'view',
    component: ViewComponent
  }
];
