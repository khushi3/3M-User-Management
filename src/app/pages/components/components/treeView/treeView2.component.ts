import {Component, OnInit} from '@angular/core';
import {TreeModel} from 'ng2-tree';
import { UiService2 } from './ui2.service';
import { DropdownUi } from '../../../../global_class/ui-dropdown';
import { UiBase }     from '../../../../global_class/ui-base';
import { TextboxUi }  from '../../../../global_class/ui-textbox';
import { CheckboxUi }  from '../../../../global_class/ui-checkbox';
@Component({
  selector: 'tree-view',
  templateUrl: `<div>
      <h2>User Management</h2>
      <dynamic-form [uis]="uis"></dynamic-form>
    </div>`,
   providers:  [UiService2]
})

export class TreeView2  {

 uis: any;
  box;
  ui:any;

  constructor(private service: UiService2) {
    console.log(44)
    this.uis = this.service.getUis();
   
}
    //service.getdata().then(data => this.getUis(data));
      /*this.box = data//      console.log("55" + this.box)
    console.log(this.box)
    })*/
    
    //this.uis = this.getUis(this.box);
   /* service.getdata().subscribe(data => {
      this.box = data;
      //this.uis = service.getUis(data);
      //this.uis = this.getUis(data);
      console.log(11111)
      //console.log(data.ui)
      console.log(this.box)
     // this.uis = this.getUis(this.box);
      if(data != undefined){
        console.log(44444111111)
        this.uis = this.getUis(this.box);
      }
      
    }, error => console.log('Could not load List of Service'));*/
    //this.uis = this.getUis(this.box);   
}

//ngOnInit(){
  //console.log(222222)

  //this.service.getdata().subscribe(data => this.getUis());
  //this.uis = this.getUis(this.box);
  /*this.service.getdata().subscribe(data => {
      this.box = data.ui.textbox;
      //this.uis = service.getUis(data);
      //this.uis = this.getUis(data);
      console.log(11111)
      console.log(data.ui.textbox)
      //this.uis = this.getUis(this.box);
      /*if(data != undefined){
        console.log(44444111111)
        this.uis = this.getUis(this.box);
      }*/
      
    //}, error => console.log('Could not load List of Service'));
//}
/*ngOnInit(){


}*/
/*loadData() {

  this.service.getdata().subscribe(data => {
      this.box = data;
      //console.log(data.ui)
      console.log("111")
      console.log(this.box)
     // this.uis = this.getUis(this.box);
     /* if(data != undefined){
        console.log(44444111111)
        //this.uis = this.getUis(this.box);
      }*/
      
   // }, error => console.log('Could not load List of Service'));
//}*/

/*getUis(data){
  console.log(3333333)

 //this.loadData();
  //this.loadData();
  //console.log(ui['key'])
  //var myJSON = JSON.stringify(ui);
  //var obj = JSON.parse(ui)
  
  //let obj1 = JSON.parse(myJSON);
//console.log(obj1.key);

//console.log(obj1.myNumber);
console.log("222")
console.log(data);
if(data != undefined){
  var obj = new CheckboxUi(data.checkbox);
var obj2 = new CheckboxUi(data.checkbox2);
}


let uis : UiBase<any>[] = [obj, obj2];
  //console.log(this.box.textbox.email.key)
    return uis.sort((a, b) => a.order - b.order);
  }*/


/*
  tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [
          {value: 'Java'},
          {value: 'C++'},
          {value: 'C#'},
        ]
      },
      {
        value: 'Prototype-based programming',
        children: [
          {value: 'JavaScript'},
          {value: 'CoffeeScript'},
          {value: 'Lua'},
        ]
      }
    ]
  };*/



