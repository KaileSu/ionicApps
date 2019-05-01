import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';
import { WelcomePage } from '../welcome/welcome.page';
import { Storage } from '@ionic/storage'; // for using storage module

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  count = 0;
  username: string;
  constructor(private storage: Storage, 
    private router: Router, private modalController: ModalController ) {
  this.presentModal();
  }

  incrementCounter() {
    this.count++;
  }
  login() {
    this.router.navigateByUrl('/account');
  }

  loginPassVar() {
    this.router.navigateByUrl('/account/' + this.username);
  }

  async presentModal() {
           const modal = await this.modalController.create({
             component: ModalPage,
             componentProps: {username: this.username}
           });
           modal.onDidDismiss()
             .then((retval) => {
               this.username = retval.data;
             });
           return modal.present();
  }

  
}
