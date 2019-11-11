import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessScreenComponent } from './Components/access-screen/access-screen.component';
import { GenerateOrderComponent } from './Components/generate-order/generate-order.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsMenuComponent } from './Components/products-menu/products-menu.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { LogsScreenComponent } from './Components/logs-screen/logs-screen.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'Access'},
  {path: 'Access', component: AccessScreenComponent, canActivate: [AuthGuardService]},
  {path: 'generateOrder', component: GenerateOrderComponent},
  {path: 'Menu', component: ProductsMenuComponent},
  {path: 'Logs', component: LogsScreenComponent},
  {path: 'Home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
