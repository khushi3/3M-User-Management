import { Injectable,Inject } from '@angular/core';
import { HttpModule, Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import * as globalConfig from './../../global.config';

/**
	Service class to call REST apis to do operations pertaining to userGroups
*/
@Injectable()
export class UserGroupService {

 public headers: Headers;
 public response: Response;

constructor(@Inject(Http) private http: Http) {
	this.http = http;
	this.headers = new Headers();
	this.headers.append('Content-Type', 'application/json');
}

public getUserGroups(): Observable<any>  {
	return this.http.get(globalConfig.server_url + globalConfig.usergroup_api_url)
		.map(response => response.json());
}

public getStations(): Observable<any> {
  return this.http.get('http://localhost:7000/users')
		.map(response => response.json());
}


public addUserGroup(userGroupName, roles, users): Observable<any> {
		var currDate = new Date().toJSON();

		var userGroup = {
			"userGroupName" : userGroupName,
			"roles" : roles,
			"users" : users,
			"dateCreated" : currDate
		}

		return this.http.post(globalConfig.server_url + globalConfig.usergroup_api_url ,JSON.stringify(userGroup), { headers: this.headers })
						.map(response=> response.json());
		}
		public saveUsers(users): Observable<any> {
		console.log("inside service")
		//var currDate = new Date().toJSON();

		var userGroup = {
			"users" : users
		}

		return this.http.post('http://localhost:7000/usergrp' ,JSON.stringify(userGroup), { headers: this.headers })
						.map(response=> response.json());
		}

	}
