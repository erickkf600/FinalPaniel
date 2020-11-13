import { DisableGuard } from './shared/guards/disable.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login', 
    loadChildren: () => import('./pages/st-login/login.module').then(m => m.LoginModule),
    canActivate: [DisableGuard],
  },
  {
    path: 'destaques',
    loadChildren: () => import('./pages/featured/featured.module').then(m => m.FeaturedModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule),
    canActivate: [AuthGuard],
  },
  { 
    path: '', 
    redirectTo: '/destaques', 
    pathMatch: 'full', 
    canActivate: [AuthGuard] 
  },
  { 
    path: '**', 
    loadChildren: () => import('./pages/featured/featured.module').then(m => m.FeaturedModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
