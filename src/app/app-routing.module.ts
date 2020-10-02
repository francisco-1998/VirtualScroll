import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualComponent } from './components/virtual/virtual.component';
import { DragComponent } from './components/drag/drag.component';
import { DragPaisesComponent } from './components/drag-paises/drag-paises.component';

const routes: Routes = [
  // { path: '', component: VirtualComponent }
  { path: 'virtual', component: VirtualComponent },
  { path: 'drag', component: DragComponent },
  { path: 'drag-paises', component: DragPaisesComponent },
  { path: '',   redirectTo: '/virtual', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



