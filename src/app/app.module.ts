import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './pages/alert/alert.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { MenubarComponent } from './pages/menubar/menubar.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { RegisterComponent } from './pages/register/register.component';
import { StatusComponent } from './pages/status/status.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AlertService } from './services/alert.service';
import { AnnouncementService } from './services/announcement.service';
import { AuthenticationService } from './services/authentication.service';
import { FakeBackendService } from './services/fake-backend.service';
import { LoginService } from './services/login.service';
import { MaintenanceService } from './services/maintenance.service';
import { MessageService } from './services/message.service';
import { PaymentService } from './services/payment.service';
import { SessionService } from './services/session.service';
import { StatusService } from './services/status.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AnnouncementsComponent,
    DashboardComponent,
    LoginComponent,
    MaintenanceComponent,
    MenubarComponent,
    MessagesComponent,
    PaymentsComponent,
    RegisterComponent,
    StatusComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AlertService, AnnouncementService, AuthenticationService, FakeBackendService, LoginService, MaintenanceService, MessageService, PaymentService, SessionService, StatusService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
