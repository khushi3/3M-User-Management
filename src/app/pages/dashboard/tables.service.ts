import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TablesService {
constructor(private http: Http) {
this.http = http;
}

public getJSON(): Observable<any>  {
return this.http.get('data/users.json')
.map(response => response.json());

}
}
