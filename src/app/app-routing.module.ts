import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MasterTableComponent } from './components/master-table/master-table.component';
import { DependentTableComponent } from './components/dependent-table/dependent-table.component';
import { SearchMemberComponent } from './components/search-member/search-member.component';
import { SearchDependentsComponent } from './components/search-dependents/search-dependents.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { AddDependentComponent } from './components/add-dependent/add-dependent.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateMemberComponent } from './components/update-member/update-member.component';
import { UpdateDependentComponent } from './components/update-dependent/update-dependent.component';
import { CheckMediclaimSubscriptionComponent } from './components/check-mediclaim-subscription/check-mediclaim-subscription.component';
import { PastPaymentComponent } from './components/past-payment/past-payment.component';
import { RenewMembershipComponent } from './components/renew-membership/renew-membership.component';
import { PastSubscriptionComponent } from './components/past-subscription/past-subscription.component';
import { CheckSubscriptionStatusComponent } from './components/check-subscription-status/check-subscription-status.component';

const routes: Routes = [
  {
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
},
{
  path:'register-admin',
  component:RegisterComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'dashboard',
  component:DashboardComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'master-table',
  component:MasterTableComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'dependent-table',
  component:DependentTableComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'search-member',
  component:SearchMemberComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'search-dependent',
  component:SearchDependentsComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'add-member',
  component:AddMemberComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'add-dependent',
  component:AddDependentComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'update-member/:id',
  component:UpdateMemberComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'update-dependent/:id',
  component:UpdateDependentComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'check-mediclaim-membership',
  component:CheckMediclaimSubscriptionComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'past-payment',
  component:PastPaymentComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'renew-membership/:id',
  component:RenewMembershipComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'past-subscription',
  component:PastSubscriptionComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'check-subscription-status',
  component:CheckSubscriptionStatusComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



exports: [RouterModule]
})
export class AppRoutingModule { }
