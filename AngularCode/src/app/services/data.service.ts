import { Ibook } from './../ibook';
import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

@Injectable()
export class DataService {

  _booksUrl:string = 'http://waelsbookservice.azurewebsites.net/books';

  constructor(private _http: Http) { }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ?
    `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
    }

    search(terms: Observable<string>) {
      return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.getBooks(term));
      }


      getBooks(query?: string): Observable<Ibook[]> 
      {
        return this._http.get(this._booksUrl+"/GetBooks")
        .map((response: Response) => {
          let data: Ibook[] = <Ibook[]>response.json();
          if (query != null && query.length > 0) {
            data = data.filter(
              data =>
              data.author.includes(query) ||
              data.title.includes(query))
            }
            return data;
          })
          .catch(this.handleError);
        }
      }

