import { Component } from '@angular/core';
// import {NavParams } from '@ionic/angular';



import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage'; // for using storage module
import { WelcomePage } from './welcome/welcome.page';
import { ModalPage } from './modal/modal.page';
import {ModalController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  username = 'test'; // for test
  constructor(
   // private navParams: NavParams,
    private modalController: ModalController,
    private storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.presentModal();
  }

  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    let settingsObject = {
       name: 'Kaile Su',
       showNotifications: false,
       dateTime: 'Jan 01, 2000 00:00'
    };

    if ( await this.storage.get("settings") ==  null ) {
      await this.storage.set("settings", settingsObject);
    }

    if ( await this.storage.get("name") ==  null ) {
      await this.storage.set("name", "Kaile");
    }

    if ( await this.storage.get("showNotifications") ==  null ) {
      await this.storage.set("showNotifications", true);
    }

    if ( await this.storage.get("dateTime") ==  null ) {
      await this.storage.set("dateTime", "Jan 01, 2000 00:00");
    }



  }
  async presentModal() {
    if ( await this.storage.get("welcome1") ==  null ) {
      const modal = await this.modalController.create({
      component: ModalPage,
       componentProps: { username: this.username} // no need for this task
     });
     modal.onDidDismiss().then((data) => {
                    this.username = data.data;
     });
     await this.storage.set("welcome1", "Done");
     return modal.present();
    }
  }
  
}
