import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';

// components
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
