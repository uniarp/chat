import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'grupo',
    loadChildren: () => import('./grupo/grupo.module').then( m => m.GrupoPageModule)
  },
  {
    path: 'sorteio',
    loadChildren: () => import('./sorteio/sorteio.module').then( m => m.SorteioPageModule)
  },
  {
    path: 'regras',
    loadChildren: () => import('./regras/regras.module').then( m => m.RegrasPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
