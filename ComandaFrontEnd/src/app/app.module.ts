import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatIconModule,
         MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
         MatRippleModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
         MatToolbarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_LANGUAGE, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { FileUploadModule } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessScreenComponent } from './Components/access-screen/access-screen.component';
import { CardComponent } from './Components/card/card.component';
import { CounterComponent } from './Components/counter/counter.component';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';
import { GenerateOrderComponent } from './Components/generate-order/generate-order.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PdfGeneratorComponent } from './Components/pdf-generator/pdf-generator.component';
import { ProductsMenuTableComponent } from './Components/products-menu-table/products-menu-table.component';
import { ProductsMenuComponent } from './Components/products-menu/products-menu.component';
import { RegisterComponent } from './Components/register/register.component';
import { SnackBarTemplateComponent } from './Components/snack-bar-template/snack-bar-template.component';
import { PaginatorDirective } from './Directives/paginator.directive';
import { DataShareService } from './Services/data-share.service';
import { HttpService } from './Services/http.service';
import { InterceptorService } from './Services/interceptor.service';
import { LogsScreenComponent } from './Components/logs-screen/logs-screen.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LogDatePipe } from './Pipes/log-date.pipe';
import { PrepareFoodsComponent } from './Components/prepare-foods/prepare-foods.component';
import { DisableOrdersDirective } from './Directives/disable-orders.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AccessScreenComponent,
    FileUploadComponent,
    SnackBarTemplateComponent,
    HeaderComponent,
    CardComponent,
    MenuComponent,
    ProductsMenuComponent,
    ProductsMenuTableComponent,
    CounterComponent,
    GenerateOrderComponent,
    PdfGeneratorComponent,
    HomeComponent,
    PaginatorDirective,
    LogsScreenComponent,
    LogDatePipe,
    PrepareFoodsComponent,
    DisableOrdersDirective
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
    MatPaginatorModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    NgxSkeletonLoaderModule
  ],
  providers: [HttpService, DataShareService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
              {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
              {provide: RECAPTCHA_SETTINGS, useValue: {siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
              theme: 'light', size: 'normal', type: 'image', badge: 'inline'} as RecaptchaSettings},
              {provide: RECAPTCHA_LANGUAGE, useValue: 'es'},
              {provide: StorageBucket, useValue: 'gs://labo-iv.appspot.com'},
              {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarTemplateComponent]
})
export class AppModule {
}
