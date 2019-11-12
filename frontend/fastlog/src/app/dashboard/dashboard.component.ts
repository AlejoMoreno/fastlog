import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // google maps zoom level
  zoom: number = 15;
  
  // initial center position for the map
  lat: number = 4.6259377;
  lng: number = -74.122047;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  /*markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }*/
  
  markers: marker[] = [
	  {
		  lat: 4.6259377,
		  lng: -74.122047,
		  label: '',
		  draggable: true
	  }
  ]

  constructor() { }

  ngOnInit() {
  }

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
