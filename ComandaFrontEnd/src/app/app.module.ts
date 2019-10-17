import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { HttpService } from './Services/http.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataShareService } from './Services/data-share.service';
import { InterceptorService } from './Services/interceptor.service';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessScreenComponent } from './Components/access-screen/access-screen.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import {MatCardModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSlideToggleModule,
  MatCheckboxModule, MatSelectModule, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDividerModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { SnackBarTemplateComponent } from './Components/snack-bar-template/snack-bar-template.component';
import { SocioScreenComponent } from './Components/socio-screen/socio-screen.component';
import { AdministratorScreenComponent } from './Components/administrator-screen/administrator-screen.component';
import { MozoScreenComponent } from './Components/mozo-screen/mozo-screen.component';
import { CocineroScreenComponent } from './Components/cocinero-screen/cocinero-screen.component';
import { CervezeroScreenComponent } from './Components/cervezero-screen/cervezero-screen.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AccessScreenComponent,
    FileUploadComponent,
    SnackBarTemplateComponent,
    SocioScreenComponent,
    AdministratorScreenComponent,
    MozoScreenComponent,
    CocineroScreenComponent,
    CervezeroScreenComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  providers: [HttpService, DataShareService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
              {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarTemplateComponent]
})
export class AppModule { }
