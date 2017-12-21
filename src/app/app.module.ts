// Modules
import { BaseRequestOptions } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// App Routing
import { AppRoutingModule } from './app-routing.module';

// Pages
import { AlertComponent } from './pages/alert/alert.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatusComponent } from './pages/status/status.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { MessagesComponent } from './pages/messages/messages.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { ApplicantComponent } from './pages/applicant/applicant.component';
import { UnitSelectionComponent } from './pages/unit-selection/unit-selection.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// Interceptor
import { AuthGuard } from './auth.guard';
import { AuthHeaderInterceptor, AUTH_HEADER_INTERCEPTOR_PROVIDER } from './auth-header.interceptor';

// Services
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';
import { StatusService } from './services/status.service';
import { AnnouncementService } from './services/announcement.service';
import { ApplicantService } from './services/applicant.service';
import { MessageService } from './services/message.service';
import { PaymentService } from './services/payment.service';
import { MaintenanceService } from './services/maintenance.service';
import { LoginService } from './services/login.service';
import { SessionService } from './services/session.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    StatusComponent,
    PageNotFoundComponent,
    DashboardComponent,
    MessagesComponent,
    PaymentsComponent,
    MaintenanceComponent,
    AnnouncementsComponent,
    ApplicantComponent,
    UnitSelectionComponent,
    NavigationComponent
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
      LoginService,
      SessionService,
      AUTH_HEADER_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
