import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
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
  MatProgressBarModule, MatDividerModule, MatToolbarModule, MatMenuModule, MatIconModule, MatRippleModule, MatSidenavModule, MatListModule, MatTableModule, MatExpansionModule, MatSortModule, MatPaginatorModule} from '@angular/material';
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
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings, RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import { ClientScreenComponent } from './Components/client-screen/client-screen.component';
import { CardComponent } from './Components/card/card.component';
import { MenuComponent } from './Components/menu/menu.component';
import { MatIconRegistry } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsMenuComponent } from './Components/products-menu/products-menu.component';
import { ProductsMenuTableComponent } from './Components/products-menu-table/products-menu-table.component';
import { CounterComponent } from './Components/counter/counter.component';
import { GenerateOrderComponent } from './Components/generate-order/generate-order.component';
import { PdfGeneratorComponent } from './Components/pdf-generator/pdf-generator.component';

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
    HeaderComponent,
    ClientScreenComponent,
    CardComponent,
    MenuComponent,
    ProductsMenuComponent,
    ProductsMenuTableComponent,
    CounterComponent,
    GenerateOrderComponent,
    PdfGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    RecaptchaModule,
    FontAwesomeModule,
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
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [HttpService, DataShareService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
              {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
              {provide: RECAPTCHA_SETTINGS, useValue: {siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
              theme: 'light', size: 'normal', type: 'image', badge: 'inline'} as RecaptchaSettings},
              {provide: RECAPTCHA_LANGUAGE, useValue: 'es'}],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarTemplateComponent]
})
export class AppModule {
}
