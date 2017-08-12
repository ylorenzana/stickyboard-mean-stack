import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StickyService } from './stickies/sticky.service';
import { UserService } from './auth/user.service';
import { AuthGuard } from './auth/auth.guard';
import { StickyHeaderComponent } from './stickies/sticky-header.component';
import { StickyListComponent } from './stickies/sticky-list.component';
import { StickyListItemComponent } from './stickies/sticky-list-item.component';
import { ApiService } from './api.service';
import { UserRegistrationComponent } from './auth/user-registration.component';
import { StickyComponent } from './stickies/sticky.component';
import { UserLoginComponent } from './auth/user-login.component';

const appRoutes: Routes = [
  {path: '', component: StickyComponent, canActivate: [AuthGuard]},
  {path: 'register', component: UserRegistrationComponent},
  {path: 'login', component: UserLoginComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    StickyHeaderComponent,
    StickyListComponent,
    StickyListItemComponent,
    UserRegistrationComponent,
    StickyComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ StickyService, UserService, ApiService, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
