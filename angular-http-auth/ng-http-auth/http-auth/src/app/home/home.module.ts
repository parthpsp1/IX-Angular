import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http'
import { AuthService } from '../core/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FetchedDataComponent } from './fetched-data/fetched-data.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    FetchedDataComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService]
})
export class HomeModule { }
