import {Injectable} from '@angular/core';
import { HttpModule, Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DualListService {

 
  constructor(private http: Http) {
  this.http = http;
}

  public getUserGroups(): Observable<any>  {
  return this.http.get('data/usergrp.json')
    .map(response => response.json());
}
}
