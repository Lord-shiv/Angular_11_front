import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';

const routes: Routes = [
  { path: 'branches', component: BranchesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
