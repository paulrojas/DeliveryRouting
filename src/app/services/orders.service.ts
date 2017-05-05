import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OrdersService {

  constructor(private http: Http) { }

  getOrders(): Observable<any> {
    return this.http.get('/DeliveryRouting/assets/data/orders.json')
      .map((res: any) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  getRoutes(orders: any, maxVisits: number, t1:any, t2:any) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', '772ea600-78ad-11e6-a56b-0bff586a75e5');

    let services = [];
    for (let item of orders) {
      let obj = { id: item.order_id, lat: item.delivery_latitude, lng: item.delivery_longitude, name: "OrderID:" + item.order_id }
      services.push(obj);
    }

    let payload = {
      "service": services,
      "fleet": [ {"id":1,"lat":t1.lat,"lng":t1.lng,"latEnd":t2.lat,"lngEnd":t2.lng,"returnToStart":0} ],
      "maxVisits": maxVisits,
      "polylines":false,
      "distanceCalculation":false,
      "speed":40,
      "decideFleetSize":0
    }
    return this.http.post('https://api.flightmap.io/api/v1/vrp', JSON.stringify(payload) , { headers: headers })
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    var applicationError = error.headers.get('Application-Error');
    var serverError = error.json();
    var modelStateErrors: string = '';

    if (!serverError.type) {
      console.log(serverError);
      for (var key in serverError) {
        if (serverError[key])
          modelStateErrors += serverError[key] + '\n';
      }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

    return Observable.throw(applicationError || modelStateErrors || 'Server error');
  }
}
