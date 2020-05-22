import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService as RouteGuard } from './shared/services/route-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  },
  // im using lazy loading pattern to provide public and private module routes
  {
    // using this path names to easily identify either a child route is private or not
    path: 'public',
    loadChildren: './public/public.module#PublicModule'
  },
  {
    path: 'private',
    loadChildren: './private/private.module#PrivateModule',
    canActivate: [RouteGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
