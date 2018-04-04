// Modules
import { BaseRequestOptions } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Dependencies
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckboxModule, TooltipModule, EditorModule, FileUploadModule } from 'primeng/primeng';

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
import { InboxComponent } from './pages/messages/inbox/inbox.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { UnitSelectionComponent } from './pages/unit-selection/unit-selection.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SortableColumnComponent } from './components/sortable-table/sortable-column.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { InvalidDomainComponent } from './pages/invalid-domain/invalid-domain.component';
import { BrandingComponent } from './pages/branding/branding.component';
import { ComposeComponent } from './components/compose/compose.component';
import { AccountComponent } from './pages/account/account.component';
import { ViewSentComponent } from './pages/messages/viewsent/viewsent.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { ViewReceivedComponent } from './pages/messages/viewreceived/viewreceived.component';
import { FormUploadComponent } from './components/form-upload/form-upload.component';

// Interceptor
import { AuthGuard } from './auth.guard';
import { AuthHeaderInterceptor } from './auth-header.interceptor';

// Services
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';
import { StatusService } from './services/status.service';
import { AnnouncementService } from './services/announcement.service';
import { MessageService } from './services/message.service';
import { MaintenanceService } from './services/maintenance.service';
import { LoginService } from './services/login.service';
import { SessionService } from './services/session.service';
import { SortService } from './components/sortable-table/sort.service';
import { ActivityService } from './services/activity.service';
import { ThemeService } from './services/theme.service';
import { SiteService } from './services/site.service';
import { ConfigService } from './services/config.service';
import { CompanyService } from './services/company.service';
import { UploadFileService } from './services/upload-file.service';

// Directives
import { SortableTableDirective } from './components/sortable-table/sortable-table.directive';

// Pipes
import { HtmlToPlainPipe } from './pipes/html-to-plain.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import { InputSwitchModule } from './components/inputswitch/inputswitch.component';
import { SentboxComponent } from './pages/messages/sentbox/sentbox.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpClientModule,
    AppRoutingModule,
    CheckboxModule,
    InputSwitchModule,
    TooltipModule,
    EditorModule,
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
    MaintenanceComponent,
    AnnouncementsComponent,
    UnitSelectionComponent,
    NavigationComponent,
    InboxComponent,
    SortableColumnComponent,
    SortableTableDirective,
    ViewReceivedComponent,
    HtmlToPlainPipe,
    SafeHtmlPipe,
    ShortenPipe,
    ActivityComponent,
    InvalidDomainComponent,
    BrandingComponent,
    ComposeComponent,
    ReplacePipe,
    AccountComponent,
    ViewSentComponent,
    MessageListComponent,
    FormUploadComponent,
    SentboxComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useValue: AuthHeaderInterceptor.getInstance(),
      multi: true,
    },
    AuthGuard,
    AlertService,
    AuthenticationService,
    ActivityService,
    ConfigService,
    UserService,
    StatusService,
    BaseRequestOptions,
    UploadFileService,
    MessageService,
    MaintenanceService,
    AnnouncementService,
    LoginService,
    SessionService,
    SortService,
    SiteService,
    CompanyService,
    ThemeService,
    {
      provide: AuthHeaderInterceptor,
      useValue: AuthHeaderInterceptor.getInstance(),
    }
  ],
  entryComponents: [ComposeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
