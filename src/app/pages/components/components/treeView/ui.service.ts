import { Injectable }       from '@angular/core';
import { DropdownUi } from '../../../../global_class/ui-dropdown';
import { UiBase }     from '../../../../global_class/ui-base';
import { TextboxUi }  from '../../../../global_class/ui-textbox';
import { CheckboxUi }  from '../../../../global_class/ui-checkbox';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UiService {
   
   ui : any;

constructor(private http: Http) {
         //var obj;
         //this.getJSON().subscribe(data => this.ui=data, error => console.log(error));
        // this.ui = this.getJSON();
    }

	public getJSON() { //: Observable<any> {
         return this.http.get('./app/config_json/checkbox.json')
                         .map((res:any) => res.json());
                        // .catch((error:any) => console.log(error));

     }

     /*public getUI(){
     	return this.ui;
     }*/
}