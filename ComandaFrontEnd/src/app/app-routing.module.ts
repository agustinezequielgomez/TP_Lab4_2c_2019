import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessScreenComponent } from './Components/access-screen/access-screen.component';
import { GenerateOrderComponent } from './Components/generate-order/generate-order.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsMenuComponent } from './Components/products-menu/products-menu.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { LogsScreenComponent } from './Components/logs-screen/logs-screen.component';
import { PrepareFoodsComponent } from './Components/prepare-foods/prepare-foods.component';
import { OrdersComponent } from './Components/orders/orders.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'Access'},
  {path: 'Access', component: AccessScreenComponent, canActivate: [AuthGuardService]},
  {path: 'generateOrder', component: GenerateOrderComponent, data: {animation: 'RightSide'}},
  {path: 'Menu', component: ProductsMenuComponent, data: {animation: 'RightSide'}},
  {path: 'Logs', component: LogsScreenComponent, data: {animation: 'RightSide'}},
  {path: 'Home', component: HomeComponent, data: {animation: 'LeftSide'}},
  {path: 'Orders', component: OrdersComponent, data: {animation: 'RightSide'}},
  {path: 'Prepare', component: PrepareFoodsComponent, data: {animation: 'RightSide'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
