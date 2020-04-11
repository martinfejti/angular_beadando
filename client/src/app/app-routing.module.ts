import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root/root.component';


export const AppRoutes: Routes = [
  { path: 'root', component: RootComponent}
];

// donno if the export is needed above, might cause problems

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
