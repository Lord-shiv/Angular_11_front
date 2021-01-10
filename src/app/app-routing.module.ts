import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowBranchesComponent } from './branches/show-branches/show-branches.component';

const routes: Routes = [
  { path: 'branches', component: ShowBranchesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
