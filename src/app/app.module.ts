import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule, MenubarModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BaseRequestOptions, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AlertComponent } from './pages/alert/alert.component';
import { AuthGuard } from './auth.guard';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { StatusService } from './services/status.service';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatusComponent } from './pages/status/status.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthHeaderInterceptor, AUTH_HEADER_INTERCEPTOR_PROVIDER } from './auth-header.interceptor';

import { MessagesComponent } from './pages/messages/messages.component';
import { MessageService } from './services/message.service';
import { PaymentService } from './services/payment.service';
import { MaintenanceService } from './services/maintenance.service';
import { PaymentsComponent } from './pages/payments/payments.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { AnnouncementService } from './services/announcement.service';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { MenubarComponent } from './pages/menubar/menubar.component';
import { ApplicantService } from './services/applicant.service';
import { ApplicantComponent } from './pages/applicant/applicant.component';
import { SessionService } from './services/session.service';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    StatusComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    MessagesComponent,
    PaymentsComponent,
    MaintenanceComponent,
    AnnouncementsComponent,
    MenubarComponent,
    ApplicantComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MenuModule,
    MenubarModule,
    AppRoutingModule
  ],
  providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useValue: AuthHeaderInterceptor.getInstance(),
        multi: true,
      },
      AuthGuard,
      AlertService,
      ApplicantService,
      AuthenticationService,
      UserService,
      StatusService,
      BaseRequestOptions,
      MessageService,
      PaymentService,
      MaintenanceService,
      AnnouncementService,
      SessionService,
      LoginService,
      AUTH_HEADER_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
