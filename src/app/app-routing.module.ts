import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingStrategy } from './core/strategies/preload-modules.strategy';
import {NotFoundComponent} from './core/components/not-found/not-found.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard', },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', data: { preload: true, delay: 2000 } },
  { path: 'test', loadChildren: './test/test.module#TestModule', data: { preload: true, delay: 2000 }},
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
