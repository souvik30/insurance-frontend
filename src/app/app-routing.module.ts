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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



exports: [RouterModule]
})
export class AppRoutingModule { }
