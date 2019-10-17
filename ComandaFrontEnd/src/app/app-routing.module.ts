import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { AccessScreenComponent } from './Components/access-screen/access-screen.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { AdministratorScreenComponent } from './Components/administrator-screen/administrator-screen.component';
import { CervezeroScreenComponent } from './Components/cervezero-screen/cervezero-screen.component';
import { CocineroScreenComponent } from './Components/cocinero-screen/cocinero-screen.component';
import { MozoScreenComponent } from './Components/mozo-screen/mozo-screen.component';
import { SocioScreenComponent } from './Components/socio-screen/socio-screen.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'Access'},
  {path: 'Access', component: AccessScreenComponent, canActivate: [AuthGuardService]},
  {path: 'AdministratorScreen', component: AdministratorScreenComponent, canActivate: [AuthGuardService]},
  {path: 'CerveceroScreen', component: CervezeroScreenComponent, canActivate: [AuthGuardService]},
  {path: 'CocineroScreen', component: CocineroScreenComponent, canActivate: [AuthGuardService]},
  {path: 'MozoScreen', component: MozoScreenComponent, canActivate: [AuthGuardService]},
  {path: 'SocioScreen', component: SocioScreenComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
