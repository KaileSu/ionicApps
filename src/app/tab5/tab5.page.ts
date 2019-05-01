import { Component, OnInit, ViewChild } from '@angular/core';
declare let google;
// tab5.page.scss neededs

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  @ViewChild('map') mapElement;
  map: any;

  constructor() { }

  ngOnInit() {
    console.log('ng OnInit MapPage');
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let mapOptions = {
     center: latLng,
     zoom: 15,
     mapTypeId: google.maps.MapTypeId.ROADMAP
     };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        
        this.map.setCenter(pos);
        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.map.getCenter()
        });
       
        let infoWindow = new google.maps.InfoWindow({
          content: '<h4>2701ICT Headquarters</h4>'
        });
      
       google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
        });

      });
    } else {
      alert('Geolocation not supported');
    }

    
  
    
  
  }

}
