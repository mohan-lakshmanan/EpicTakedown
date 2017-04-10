import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

export const firebaseConfig = {
  apiKey: "AIzaSyCPkz3nj3ZeTQLM9hGBkcnjxSRd_MrgAI0",
    authDomain: "epictakedown-eada0.firebaseapp.com",
    databaseURL: "https://epictakedown-eada0.firebaseio.com",
    projectId: "epictakedown-eada0",
    storageBucket: "epictakedown-eada0.appspot.com",
    messagingSenderId: "182759919280"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }




