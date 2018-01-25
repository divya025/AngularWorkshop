import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class BookGuardService {

  constructor(
    private _router: Router,
    private _dataService:DataService) { }

  canActivate(route: ActivatedRouteSnapshot) {
    // parse the book id from the route
    let id = +route.url[1].path;
    if (isNaN(id)) {
    // start a new navigation to redirect to list page
    this._router.navigate(['/collection']);
    // abort current navigation
    return false;
    };
     
    return this._dataService.canActivate(id).map(result => {
    if (result) {
    return true;
    }
      
    this._router.navigate(['/collection']);
    return Observable.of(false);
  }).catch(() => {
  
    this._router.navigate(['/collection']);
    return Observable.of(false);
      
  });

}
}
