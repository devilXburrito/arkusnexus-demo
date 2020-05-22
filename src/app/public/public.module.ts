import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';

// components
import { LoginComponent } from './components';

// services
import { LoginService } from './services';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    PublicRoutingModule,
    SharedModule
  ],
  providers: [
    LoginService
  ]
})
export class PublicModule { }
