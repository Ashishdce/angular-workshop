import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';

import { AppRoutingModule } from './app.routing';
import { DataService } from './services/data.service';


// import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: 'AIzaSyCedM1qQfosyQSlpdJhy4lYi01sHfScPWE',
  authDomain: 'pwa-demo-25ad5.firebaseapp.com',
  databaseURL: 'https://pwa-demo-25ad5.firebaseio.com',
  projectId: 'pwa-demo-25ad5',
  storageBucket: 'pwa-demo-25ad5.appspot.com',
  messagingSenderId: '89632963921'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
