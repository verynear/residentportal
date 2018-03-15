import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './auth.guard';
import { StatusComponent } from './pages/status/status.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UnitSelectionComponent } from './pages/unit-selection/unit-selection.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { InboxComponent } from './pages/messages/inbox/inbox.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { ViewReceivedComponent } from './pages/messages/viewreceived/viewreceived.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { InvalidDomainComponent } from './pages/invalid-domain/invalid-domain.component';
import { BrandingComponent } from './pages/branding/branding.component';
import { AccountComponent } from './pages/account/account.component';
import { ViewSentComponent } from './pages/messages/viewsent/viewsent.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'maintenance', component: MaintenanceComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'status', component: StatusComponent, canActivate: [AuthGuard] },
  { path: 'unit-selection', component: UnitSelectionComponent },
  { path: 'announcements', component: AnnouncementsComponent, canActivate: [AuthGuard] },
  { path: 'activity', component: ActivityComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [AuthGuard],
    // TODO create a page/component for each children
    children: [
      { path: '', redirectTo: '/messages/inbox', pathMatch: 'full' },
      { path: 'inbox', component: InboxComponent },
      { path: 'view/:id', component: ViewReceivedComponent },
      { path: 'sent/:id', component: ViewSentComponent }
    ]
  },
  { path: 'branding', component: BrandingComponent },
  { path: 'invalid-domain', component: InvalidDomainComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
