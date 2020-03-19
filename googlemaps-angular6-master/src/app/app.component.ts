import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  isHidden = false;

  ngOnInit() {

  }

  ngAfterContentInit() {
    let mapProp = {
      center: new google.maps.LatLng(1.3542925, 103.7918169),
      zoom: 10.6,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.setMarkers()
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
  }

  setMarkers() {
    let location = new google.maps.LatLng(1.3542925, 103.7918169);
    let url = "http://maps.google.com/mapfiles/ms/icons/";
    url += "orange" + "-dot.png";

    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!',
      icon: {
        url: url
      }
    });

    //marker.addListener('click', this.simpleMarkerHandler);

    marker.addListener('click', () => {
      this.markerHandler(marker);
    });
  }

  addMarker(color) {
    let location = new google.maps.LatLng(1.3542925, 103.7918169);
    let url = "http://maps.google.com/mapfiles/ms/icons/";
    url += color + "-dot.png";
  
    let marker = new google.maps.Marker({
      map: this.map,
      position: location,
      icon: {
        url: url
      }
    });
  }

  // simpleMarkerHandler() {
  //   alert('Simple Component\'s function...');
  // }

  markerHandler(marker: google.maps.Marker) {
    alert('You have completed giving invitation to Nazar'); // + marker.getTitle()
    marker.setMap(null);
    this.addMarker("green");
  }

  toggleMap() {
    this.isHidden = !this.isHidden;

    this.gmapElement.nativeElement.hidden = this.isHidden;
  }
}

//https://developers.google.com/maps/documentation/javascript/markers