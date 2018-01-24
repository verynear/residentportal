import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './auth.guard';
import { StatusComponent } from './pages/status/status.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ApplicantComponent } from './pages/applicant/applicant.component';
import { UnitSelectionComponent } from './pages/unit-selection/unit-selection.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { InboxComponent } from './pages/messages/inbox/inbox.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { MessageComponent } from './pages/messages/message/message.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentsComponent, canActivate: [AuthGuard] },
  { path: 'maintenance', component: MaintenanceComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'status', component: StatusComponent, canActivate: [AuthGuard] },
  { path: 'applicant', component: ApplicantComponent },
  { path: 'unit-selection', component: UnitSelectionComponent },
  { path: 'announcements', component: AnnouncementsComponent, canActivate: [AuthGuard] },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [AuthGuard],
    // TODO create a page/component for each children
    children: [
      { path: '', redirectTo: '/messages/inbox', pathMatch: 'full' },
      { path: 'inbox', component: InboxComponent },
      { path: 'view/:id', component: MessageComponent },
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
