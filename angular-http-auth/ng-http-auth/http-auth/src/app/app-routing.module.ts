import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from './core/auth_guard/token.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'api-data',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    canActivate: [TokenGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: 'dashboard',
  //   canActivate: [TokenGuard],
  //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
