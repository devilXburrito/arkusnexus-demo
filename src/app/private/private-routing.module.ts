import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    UserDashboardComponent
} from './components';


const routes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: UserDashboardComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
