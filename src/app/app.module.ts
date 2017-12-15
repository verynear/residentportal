import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule, MenubarModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MockHttpInterceptor } from './services/mock-http.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

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
import { MessagesComponent } from './pages/messages/messages.component';
import { MessageService } from './services/message.service';
import { PaymentService } from './services/payment.service';
import { MaintenanceService } from './services/maintenance.service';
import { PaymentsComponent } from './pages/payments/payments.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { AnnouncementService } from './services/announcement.service';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { MenubarComponent } from './pages/menubar/menubar.component';
import {ApplicantService} from './services/applicant.service';
import {HttpClientModule} from '@angular/common/http';

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
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MenuModule,
    MenubarModule,
    AppRoutingModule
  ],
  providers: [
      AuthGuard,
      AlertService,
      ApplicantService,
      AuthenticationService,
      UserService,
      StatusService,
      fakeBackendProvider,
      MockBackend,
      BaseRequestOptions,
      MessageService,
      PaymentService,
      MaintenanceService,
      AnnouncementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
