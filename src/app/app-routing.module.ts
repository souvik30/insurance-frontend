import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MasterTableComponent } from './components/master-table/master-table.component';

import { SearchMemberComponent } from './components/search-member/search-member.component';

import { AddMemberComponent } from './components/add-member/add-member.component';

import { RegisterComponent } from './components/register/register.component';
import { UpdateMemberComponent } from './components/update-member/update-member.component';

import { PastSubscriptionComponent } from './components/past-subscription/past-subscription.component';
import { CheckSubscriptionStatusComponent } from './components/check-subscription-status/check-subscription-status.component';
import { RenewSubscriptionComponent } from './components/renew-subscription/renew-subscription.component';

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
  path:'search-member',
  component:SearchMemberComponent,
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
  path:'update-member/:id',
  component:UpdateMemberComponent,
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
{
  path:'renew-subscription/:id',
  component:RenewSubscriptionComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



exports: [RouterModule]
})
export class AppRoutingModule { }
