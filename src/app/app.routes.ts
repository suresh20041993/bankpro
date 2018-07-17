import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Routes,RouterModule} from '@angular/router';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { SharedComponent } from './login/shared/shared.component';


export const Approute:Routes = [
   
    {
        path : 'login',
        component : LoginComponent,
    },
    {
        path : 'dashboard',
        component : DashboardComponent,
    },
    
    {
        path: 'signup', 
        component: LoginComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'signIn',
        component: LoginComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { 
        path : '',
        redirectTo:'/login', 
        pathMatch : 'full'
    }

];