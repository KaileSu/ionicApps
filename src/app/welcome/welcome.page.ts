import { Component, OnInit, Inject } from '@angular/core';
import { NavParams, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  username = 'Kaile';
  constructor(private navParams: NavParams, private modalController: ModalController) { }
  closemodal() {
     this.modalController.dismiss(this.username);
  }
  ngOnInit() {
    this.username = this.navParams.get('username');
  }

}
