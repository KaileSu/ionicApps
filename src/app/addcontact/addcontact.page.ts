import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
// need to add and inject in the constructor

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.page.html',
  styleUrls: ['./addcontact.page.scss'],
})
export class AddcontactPage implements OnInit {
  contact = {firstName: '', lastName: '', email: ''};

  constructor(private navParams: NavParams, private modalController: ModalController) { 
    this.contact.firstName = this.navParams.get('firstName');
    this.contact.lastName = this.navParams.get('lastName');
    this.contact.email = this.navParams.get('email');
  }


  ngOnInit() {
  }
  
  closeModal() {

    this.modalController.dismiss(this.contact);
  }


}
