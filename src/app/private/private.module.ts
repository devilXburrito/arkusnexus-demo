import { NgModule } from '@angular/core';

import { PrivateRoutingModule } from './private-routing.module';
import { SharedModule } from '../shared/shared.module';

import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    PrivateRoutingModule,
    SharedModule
  ]
})
export class PrivateModule { }
