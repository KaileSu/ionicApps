import { NgModule } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalPageModule } from './modal/modal.module';
import { AddcontactPageModule } from './addcontact/addcontact.module';
import {IonicStorageModule} from '@ionic/storage';
import { WelcomePageModule } from './welcome/welcome.module';
// import { WelcomePage } from './welcome/welcome.page';
// import { AddcontactPage } from './addcontact/addcontact.page';
// import this modual in the following @NgModule for using storage

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
 imports: [IonicStorageModule.forRoot(), BrowserModule,
    IonicModule.forRoot(), AppRoutingModule,
    ModalPageModule, AddcontactPageModule, WelcomePageModule],
  providers: [
    // NavParams,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
