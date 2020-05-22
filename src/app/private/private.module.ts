import { NgModule } from '@angular/core';

import { PrivateRoutingModule } from './private-routing.module';
import { SharedModule } from '../shared/shared.module';

// @echarts
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    PrivateRoutingModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    SharedModule
  ]
})
export class PrivateModule { }
