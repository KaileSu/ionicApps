import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'; 
import { __await } from 'tslib';
// for storaging dada here

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  settings = {
    name: '',
    showNotifications: true,
    dateTime: ''
  };

  settingsUpdate = {
    name: '',
    showNotifications: true,
    dateTime: ''
  };
  
  imageFile: any;
  
  imageSelected(files) {
    if (files.length > 0) {
      alert("imageSelected: " + files[0].name);
    }

    let fileReader = new FileReader();

    fileReader.readAsDataURL(files[0]);

   fileReader.onload = e => {
     this.imageFile = fileReader.result;
     this.storage.set('avatar', this.imageFile);
   };

  }
 


  constructor(private storage: Storage) {
    // storage.get('name').then(val => { this.settingd.name = val; });
  }

  async ngOnInit() {
    this.settingsUpdate = await this.storage.get('settings');
    this.settings = await this.storage.get('settings');
  }
  async updateName() {
    this.settingsUpdate.name = this.settings.name;
    await this.storage.set('settings', this.settingsUpdate);
  }

  async updateDateTime() {
    this.settingsUpdate.dateTime = this.settings.dateTime;
    await this.storage.set('settings', this.settingsUpdate);
  }
}
