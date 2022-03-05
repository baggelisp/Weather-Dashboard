import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './layout/main-section/main-section.component';

const routes: Routes = [
  {
    path: '',
    component: MainSectionComponent,
    children: [
      {
        path: '',
      loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
