import { Component } from '@angular/core';

import { icon, latLng, marker, polyline, tileLayer, circle, CircleMarker, Map, Layer, circleMarker, point } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



route = polyline([[ 36.8650635,10.231044899999999 ],
  [ 36.8481502, 10.2695116 ],])

  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&amp;copy; &lt;a href="https://www.openstreetmap.org/copyright"&gt;OpenStreetMap&lt;/a&gt; contributors'
  });

  Naxxum = marker([ 36.8481502, 10.2695116 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });
  Home = marker([ 36.8650635,10.231044899999999 ], {
    icon: icon({
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  circle =  circleMarker(latLng(36.8481502, 10.2695116), {
    weight:150,
    color: 'green',
    radius: 1,
    opacity:0.5
  })

  
  options = {
    layers: [ this.streetMaps,this.route,this.Naxxum, this.Home ,this.circle],
    zoom: 15,
    center: latLng([ 36.855, 10.25])
  };
  langlat: any;

  getPosition(event){
    console.log(event.latlng)
    this.langlat=event.latlng
  } 
}
