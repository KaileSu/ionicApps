import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

// for modal page
import { AddcontactPage } from '../addcontact/addcontact.page';
// import { ModalPage } from '../modal/modal.page';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  contact = {firstName: '', lastName: '', email: ''};
  contactList = [{firstName: 'Fran', lastName: 'Jipani', email: 'f.jipan@griffith.edu.au'}, 
  {firstName: 'Fran2', lastName: 'Jipani2', email: 'f.jipan3@griffith.edu.au'}, 
  {firstName: 'Fran3', lastName: 'Jipani3', email: 'f.jipan3@griffith.edu.au'}];
  imageFile: any;
  constructor(private storage: Storage, 
    private modalController: ModalController) {
      this.storage.get('avatar').then(val => {
        this.imageFile = val;
      });
    }
  // not inject NavParams here
  
  async addContact() {
    const modal = await this.modalController.create({
      component: AddcontactPage,
      componentProps: {"firstName": '', "lastName": '', "email": ''}
    });

    modal.onDidDismiss()
      .then((retval) => {
        this.contact = retval.data;
        this.contactList.push(this.contact);
      });
    return modal.present();
  }

  async editContact(index) {
    let editContact = this.contactList[index];
    let modal = await this.modalController.create({
      component: AddcontactPage,
      componentProps: {"firstName": editContact.firstName,
        "lastName": editContact.lastName,
        "email": editContact.email},
    });

    modal.onDidDismiss()
      .then((retval) => {
      
        this.contactList[index] = retval.data;
      });
    return modal.present();
  

     
  }

  deleteContact(index) {
     if (confirm("Delete" + this.contactList[index].firstName) + "?") {
       this.contactList.splice(index, 1);
     }
  }
}
