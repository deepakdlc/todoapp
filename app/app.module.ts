import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC-YdZWtwPQSWBjlcAy_FuJRNi3wFiS-K4",
      authDomain: "todoapp-39ca7.firebaseapp.com",
      projectId: "todoapp-39ca7",
      storageBucket: "todoapp-39ca7.appspot.com",
      messagingSenderId: "531189885129",
      appId: "1:531189885129:web:e9f9ea643c28d3839b8518"  
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
