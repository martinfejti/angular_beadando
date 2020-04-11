import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root/root.component';
import { LoginComponent } from './login/login.component';


export const AppRoutes: Routes = [
  { path: '', component: LoginComponent }
];

// donno if the export is needed above, might cause problems

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
