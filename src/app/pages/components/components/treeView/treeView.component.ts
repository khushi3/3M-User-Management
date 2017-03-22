import {Component, OnInit} from '@angular/core';
import {TreeModel} from 'ng2-tree';
import { UiService } from './ui.service';
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
   providers:  [UiService]
})


export class TreeView {
	
ui : any;

uis : UiBase<any>[];
//uis: this.uiss.sort((a, b) => a.order - b.order);

constructor(private service: UiService) {
	console.log('constr')
    
    //this.ui = this.service.getJSON();
    //console.log('constr 2' + this.ui.checkbox) 
    this.service.getJSON().subscribe(
    	data => 
    	{   this.ui=data,
    		this.getUis()
    		//getUis()
    	}, 
    	error => console.log(error));


   // console.log(this.ui)
   /*if(this.ui != undefined){
		this.getUis();
	}*/
   
 }

 /*ngOnInit() {

console.log('on init')

    console.log('constr')
    this.ui = this.service.getJSON();

    //this.service.getJSON().subscribe(data => this.ui=data, error => console.log(error));
    console.log('after const ' + this.ui)
    console.log(JSON.stringify(this.ui))
    this.getUis();
  }*/

 getUis(){

 	console.log('in method ' + this.ui)
 	console.log(this.ui)
 	/*if(data != undefined){
	  	var obj = new CheckboxUi(data.checkbox);
		var obj2 = new CheckboxUi(data.checkbox2);
	}*/
	if(this.ui != undefined){
		this.uis = [new CheckboxUi(this.ui.checkbox), new CheckboxUi(this.ui.checkbox2),
    new TextboxUi(this.ui.textbox), new TextboxUi(this.ui.textbox2)];
		//this.uis.sort((a, b) => a.order - b.order);
		console.log('data populated ' + this.ui)
		console.log(this.uis)
	}
 	

  //console.log(this.box.textbox.email.key)
   

    //return uis; //.sort((a, b) => a.order - b.order);
  }

}