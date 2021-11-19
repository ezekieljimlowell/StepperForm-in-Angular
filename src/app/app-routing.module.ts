import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { CompletePageComponent } from './complete-page/complete-page.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormsComponent
  },
  {
    path: 'complete',
    component: CompletePageComponent
  },
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
