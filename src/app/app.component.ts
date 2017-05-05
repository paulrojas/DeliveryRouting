import { Component, OnInit } from '@angular/core';

import { OrdersService } from './services/orders.service';

declare var google:any;
declare var _:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Delivery Routing Problem';
  private map: any;
  private directionsService: any;
  private directionsDisplay: any;
  public orders: Array<any> = [];
  private truck_start_pos = { "lat":30.7188978,"lng":76.8102981 }; //This value was obtained from the specs
  private truck_end_pos = { "lat":30.7188978,"lng":76.8102981 }; //This value was obtained from the specs
  public maxVisits = 6;
  private dp = [];

  constructor(private ordersService:OrdersService) {
  }

  ngOnInit() {
    //Initializing Google Map
    this.directionsService = new google.maps.DirectionsService;
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: {lat: 0, lng: -180},
      mapTypeId: 'terrain'
    });
  }

  getOrders(btnData) {
    this.ordersService.getOrders().subscribe(
      (orders: any) => {
        this.orders = orders;
        let min_lat = _.minBy(this.orders, 'delivery_latitude').delivery_latitude;
        let max_lat = _.maxBy(this.orders, 'delivery_latitude').delivery_latitude;
        let min_lng = _.minBy(this.orders, 'delivery_longitude').delivery_longitude;
        let max_lng = _.maxBy(this.orders, 'delivery_longitude').delivery_longitude;

        let pan_lat = min_lat + (max_lat - min_lat) / 2;
        let pan_lng = min_lng + (max_lng - min_lng) / 2;

        //Centering the map, according with the data obtained from the orders
        this.map.panTo({ lat: pan_lat, lng: pan_lng });
        this.map.setZoom(12);
        
        for (let order of this.orders) {
          let infowindow = new google.maps.InfoWindow({
            content: order.delivery_address
          });

          let marker = new google.maps.Marker({
            position: { lat: order.delivery_latitude, lng: order.delivery_longitude },
            map: this.map,
          });
          marker.addListener('click', function() {
            infowindow.open(this.map, marker);
          });
        }

        //Displaying the truck's initial and end locations on the map
        let image = 'https://cdn3.iconfinder.com/data/icons/classic-icons-1/48/01.png';
        let infowindow_truck = new google.maps.InfoWindow();
        let truck_marker_start = new google.maps.Marker({
          position: this.truck_start_pos,
          map: this.map,
          icon: image
        });
        truck_marker_start.addListener('click', function() {
          infowindow_truck.setContent('Start position');
          infowindow_truck.open(this.map, truck_marker_start);
        });

        let truck_marker_end = new google.maps.Marker({
          position: this.truck_end_pos,
          map: this.map,
          icon: image
        });
        truck_marker_end.addListener('click', function() {
          infowindow_truck.setContent('Start position');
          infowindow_truck.open(this.map, truck_marker_end);
        });
      },
      err => alert('Error loading the data.')
    )
  }

  getRoutes(btnRoutes) {
    if (isNaN(this.maxVisits) || this.maxVisits <=0 ) {
      alert('Enter a valid number of visits.'); return;
    }

    if (this.orders instanceof Array && this.orders.length) {
      let _orders = this.orders;
      let _t1 = this.truck_start_pos;
      let _t2 = this.truck_end_pos;

      if (this.dp.length) {
        for (let dpel of this.dp) {
          dpel.setMap(null);
          dpel = null;
        }
        this.dp.splice(0, this.dp.length);
      }

      this.ordersService.getRoutes(this.orders, this.maxVisits, _t1, _t2).subscribe(
        (response: any) => {
          if (response.error == null) {
            if (response.data.solutions != null) {
              let n = response.data.solutions['1'].length;
              for (let ix=0; ix < n - 1; ix++) {
                let id_origin = response.data.solutions['1'][ix].id.split(':')[1];
                let origin = _.find(_orders, { 'order_id': parseInt(id_origin) });
                let latlng_origin = { lat: origin.delivery_latitude, lng: origin.delivery_longitude };

                let id_destination = response.data.solutions['1'][ix+1].id.split(':')[1];
                let destination = _.find(_orders, { 'order_id': parseInt(id_destination) });
                let latlng_destination = { lat: destination.delivery_latitude, lng: destination.delivery_longitude };
                if (ix == 0) {
                  //Draw the route from the truck's start position to the first customer
                  this.displayRoute(_t1, latlng_origin);
                }
                //Draw the route from each node of the solution found by the API
                this.displayRoute(latlng_origin, latlng_destination);
                if (ix == n - 2) {
                  //Draw the route from the last customer's position to the truck's end position
                  this.displayRoute(latlng_destination, _t2);
                }
              }
              
            } else {
              alert('There was no possible to get a feasible route.');
            }
          }
        },
        err => alert('Error obtaining the routes. Please try again later.')
      );
    } else {
      alert('Please click on the "Get Data" first');
    }
  }

  displayRoute(org, dst) {
    let _map = this.map;
    let _dp = this.dp;
    this.directionsService.route({
      origin: org,
      destination: dst,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        let _directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
        _directionsDisplay.setMap(_map);
        _directionsDisplay.setDirections(response);
        _dp.push(_directionsDisplay);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
