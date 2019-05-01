import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular'; ​
​

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  username: string;
  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.username = this.navParams.get('username');
  }

  closeModal() {
    this.modalController.dismiss(this.username);
  }

}
