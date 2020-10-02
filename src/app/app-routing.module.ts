import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualComponent } from './components/virtual/virtual.component';
import { DragComponent } from './components/drag/drag.component';

const routes: Routes = [
  // { path: '', component: VirtualComponent }
  { path: 'virtual', component: VirtualComponent },
  { path: 'drag', component: DragComponent },
  { path: '',   redirectTo: '/virtual', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



