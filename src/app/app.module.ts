import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule,DatePipe } from '@angular/common';  
import { LoginService } from 'src/services/login.service';
import { AuthGuard } from 'src/services/auth.guard';
import { AuthInterceptor } from 'src/services/auth.interceptor';
import {MatTableModule} from '@angular/material/table';
import { NgSelectModule } from '@ng-select/ng-select';
import { MasterTableComponent } from './components/master-table/master-table.component';
import { DependentTableComponent } from './components/dependent-table/dependent-table.component';
import { SearchMemberComponent } from './components/search-member/search-member.component';
import { SearchDependentsComponent } from './components/search-dependents/search-dependents.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpdateMemberComponent } from './components/update-member/update-member.component';
import { UpdateDependentComponent } from './components/update-dependent/update-dependent.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { AddDependentComponent } from './components/add-dependent/add-dependent.component';
import { RegisterComponent } from './components/register/register.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CheckMediclaimSubscriptionComponent } from './components/check-mediclaim-subscription/check-mediclaim-subscription.component';
import { PastPaymentComponent } from './components/past-payment/past-payment.component';
import { RenewMembershipComponent } from './components/renew-membership/renew-membership.component';
import { RenewSubscriptionComponent } from './components/renew-subscription/renew-subscription.component';
import { PastSubscriptionComponent } from './components/past-subscription/past-subscription.component';
import { CheckSubscriptionStatusComponent } from './components/check-subscription-status/check-subscription-status.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    DashboardComponent,
    LoginComponent,
    AppComponent,
    MasterTableComponent,
    DependentTableComponent,
    SearchMemberComponent,
    SearchDependentsComponent,
    FooterComponent,
    UpdateMemberComponent,
    UpdateDependentComponent,
    AddMemberComponent,
    AddDependentComponent,
    RegisterComponent,
    CheckMediclaimSubscriptionComponent,
    PastPaymentComponent,
    RenewMembershipComponent,
    RenewSubscriptionComponent,
    PastSubscriptionComponent,
    CheckSubscriptionStatusComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    NgSelectModule,
    MatDatepickerModule
  ],
  providers: [DatePipe,LoginService,AuthGuard,[{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
