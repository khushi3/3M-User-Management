import { Injectable }       from '@angular/core';
import { DropdownUi } from '../../../../global_class/ui-dropdown';
import { UiBase }     from '../../../../global_class/ui-base';
import { TextboxUi }  from '../../../../global_class/ui-textbox';
import { CheckboxUi }  from '../../../../global_class/ui-checkbox';
import { Http } from '@angular/http';
@Injectable()
export class UiService2 {
   
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  
   /*constructor( private http:Http){
     this.http.get('../../../../../config_json/sample.json')
              .subscribe(data => {
      this.ui_data = data;
      console.log(data)
    }, error => console.log('Could not load List of Service'));

  }*/
  ui;
  checkbox = {}
  constructor( private http:Http){ 
/*this.getJSON().subscribe(data => {
      this.obj = data;
      console.log(this.obj.textbox.email.key)
    }, error => console.log(error));*/
  }
 /* getdata() {
    return this.http.get('./app/config_json/checkbox.json').map(response => response.json());
  } */
  
  /*getdata(): Promise<any> {
    return  new Promise ();            
  }*/

  /*getdata(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.http.get('./app/config_json/checkbox.json').map(response => response.json()));
      }, 3000);
    });
  }*/


 getdata(): Promise<any> {
    return this.http.get('./app/config_json/checkbox.json')
               .toPromise()
               .then(response => response.json());
  }


  getUis() {

    this.getdata().then(data=> { this.ui = data;
      console.log(this.ui.checkbox)
      console.log(data)
      var obj = new CheckboxUi(this.ui.checkbox);
    var obj2 = new CheckboxUi(this.ui.checkbox2);
  console.log(obj)
   let uis : UiBase<any>[] = [obj, obj2];
    return uis.sort((a, b) => a.order - b.order);
    //return data;
    }, error => console.log('Could not load List of Service'));
    

  }
}

/*getUis() {
  console.log(3333333)
 
  let obj: any;
  let obj2: any;
  //let dataValue: any[];
     this.http.get('./app/config_json/checkbox.json').map(response => response.json())
     .subscribe(data => {

       this.ui = data;
       //console.log(this.ui);
       if(this.ui != undefined){
      console.log(this.ui.checkbox)
      console.log(data)
      var obj = new CheckboxUi(this.ui.checkbox);
    var obj2 = new CheckboxUi(this.ui.checkbox2);
  console.log(obj)
   let uis : UiBase<any>[] = [obj, obj2];
    //return uis.sort((a, b) => a.order - b.order);
    return data;
  }*/
     /* // dataValue= this.ui.length();
       for(var i=0; i< this.ui.length(); i++){
          
          dataValue= this.ui[i];

          console.log("check value"+dataValue);
         let uis : UiBase<any>[] = [obj, obj2];
  //console.log(this.box.textbox.email.key)
           return uis.sort((a, b) => a.order - b.order);
       }
       */
     
        /*console.log(data+"11111111")
        if(this.ui != undefined){
    console.log(this.ui.checkbox)
    console.log(data)
    var obj = new CheckboxUi(this.ui.checkbox);
  var obj2 = new CheckboxUi(this.ui.checkbox2);
console.log(obj)
   let uis : UiBase<any>[] = [obj, obj2];
  //console.log(this.box.textbox.email.key)
      return uis.sort((a, b) => a.order - b.order);
    }else{
      console.log(565656565)
    }
*/
      //}, error => console.log('Could not load List of Service'));
    
 //this.loadData();
  //this.loadData();
  //console.log(ui['key'])
  //var myJSON = JSON.stringify(ui);
  //var obj = JSON.parse(ui)
  
  //let obj1 = JSON.parse(myJSON);
//console.log(obj1.key);

//console.log(obj1.myNumber);
/*console.log("222")
console.log(this.ui);
if(this.ui != undefined){
  console.log(this.ui.checkbox+ "2222222")
  var obj = new CheckboxUi(this.ui.checkbox);
var obj2 = new CheckboxUi(this.ui.checkbox2);



let uis : UiBase<any>[] = [obj, obj2];
  //console.log(this.box.textbox.email.key)
    return uis.sort((a, b) => a.order - b.order);
  }
  else{
    console.log("data not found")
  }

  }*/



  
