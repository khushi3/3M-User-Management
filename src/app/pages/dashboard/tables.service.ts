import { Injectable,Inject } from '@angular/core';
import { HttpModule, Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TablesService {
 public headers: Headers;
 public response: Response;

constructor(@Inject(Http) private http: Http) {
this.http = http;
this.headers = new Headers();
this.headers.append('Content-Type', 'application/json');

}

public getJSON(): Observable<any>  {
return this.http.get('data/users.json')
.map(response => response.json());

}

addItem(item): Observable<any>{

		console.log("inside service")

		//let headers=new Headers({'Content-Type': 'application/json'});
		var usrgrp= item;
		  
	
		console.log("usrgrp "+usrgrp)

		//let posted = this.http.post('data/users',JSON.stringify(usrgrp),{ headers: this.headers }).map(response=> response.json());

		//console.log("returns "+posted)
		// http://localhost:3000
		return this.http.post('http://localhost:3000/data/usergrp' ,JSON.stringify(usrgrp), { headers: this.headers }).map(response=> response.json());



	}

	/*headers = new Headers({
    'Content-Type': 'application/json'
  });

	AddUserGrp(url: 'data/usergrp.json', data: any): Observable<Response> {
    return this.http.post(
      url,
      JSON.stringify(data),
      {headers: this.headers}
    )

}*/

}
