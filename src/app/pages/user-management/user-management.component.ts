//Author : Emids Offshore team - (KavipPriya, Khushboo, Parthibhan)

import { Component ,OnInit } from '@angular/core';
import { UserGroupService  } from './usergroup.service';
import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { CustomModal } from './custom-modal';
import { DomSanitizer } from '@angular/platform-browser';
//import { PaginationModule } from 'ng2-bootstrap';
import { ChangeDetectorRef } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import {PagerComponent} from 'ng2-smart-table/pager';
import {UserGroup} from './userGroup';

@Component({
  selector: 'user-management',
  styleUrls: ['./user-management.scss'],
  templateUrl: './user-management.html',
  providers: [Modal],
  entryComponents: [
  CustomModal
  ]
})

export class UserManagement {
 usergroup: UserGroup;

 public items = [];
  
 public role: string;
   
  query: string = '';
  public filteredcount;


  settings = {

    hideHeader: false,
    doEmit: true,
    silent: true,
  
    pager: {
      perPage: 5,
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    
    delete: {
      deleteButtonContent: '<i class="ion-trash-a" style="text-align: center;"></i>',
      confirmDelete: true
    },

    columns: {
      userGroupName: {
        title: 'GROUP NAME',
        type: 'string'
      },
      roleNames: {
        title: 'ROLES',
        type: 'string'
      },
      usersCount: {
        title: 'NO. OF USERS',
        type: 'number'
      },
      dateCreated: {
        title: 'DATE CREATED',
        type: 'string'
      },
      lastActive : {
        title: 'LAST ACTIVE',
        type: 'string',
        filter: false
      }
      
      },
  actions: {
      columnTitle: 'ACTIONS',
      type: 'html',
      add: false,
      edit: false,

    }

    };


    source: LocalDataSource;
    public grpitems: Array<any> = [];
    public datas: Array<any>= [];

    public lastActions : Array<string> = [ 
    'Created Region',
    'Edited Region',
    'Created Concept',
    'Edited Concept',
    'Created Branch',
    'Released Branch'
    ];
 

  public date1 : string;

  constructor(private userGroupService : UserGroupService,public modal: Modal,private ref: ChangeDetectorRef,
                private _sanitizer: DomSanitizer) {

      this.date1 = (new Date()).toJSON();
        //console.log(this.date1)
      this.source = new LocalDataSource();
      this.userGroupService.getUserGroups().subscribe(data => {
      this.grpitems = data;

      let userGrp: UserGroup;

      // iterate over all userGroups returned from server
    for (var i = 0; i<this.grpitems.length; i++) {
        this.role = '';
        userGrp = new UserGroup();

        for(var j = 0; j<this.grpitems[i].roles.length; j++){
              this.role += this.grpitems[i].roles[j].roleName+ ' ,';
        }

      if (this.role.endsWith(",")) {
        this.role = this.role.substring(0, this.role.length - 1);
      } 

      userGrp.userGroupName = this.grpitems[i].userGroupName;
      userGrp.roleNames = this.role;
      userGrp.usersCount = this.grpitems[i].users.length;
      userGrp.dateCreated = this.grpitems[i].dateCreated;
      userGrp.lastActive = this.getLastActive(this.grpitems[i]);
      console.log(userGrp);
    /*let usergrp=
    {
      userGroupName : this.grpitems[i].userGroupName,
      roles : this.role,
      usersCount : this.grpitems[i].users.length,
      dateCreated : this.grpitems[i].dateCreated,
      lastActive : this.getLastActive(this.grpitems[i])
    }*/
    this.datas.push(userGrp);
  }
    this.grpitems=this.datas;
    console.log(this.grpitems)
}, error => console.log('Could not load List of Service'));

    this.getData().then((data) => {
    this.source.load(data); 
    this.filteredcount = this.source.count();
});

}

getData(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.grpitems);
    }, 2000);
  });
}



onDeleteConfirm(event): void {
  if (window.confirm('Are you sure you want to delete?')) {
    event.confirm.resolve();
  } else {
    event.confirm.reject();
  }
}

getLastActive(usergrp) : string {

  console.log(usergrp.users);
  var lastActive
  // get random user + random actions , only if group contains users
  if((usergrp.users != undefined || null) && (usergrp.users.length != 0)){
    console.log('inside ');
    lastActive = usergrp.users[Math.floor((Math.random() * usergrp.users.length))].userName + ' : ' +
    this.lastActions[Math.floor((Math.random() * this.lastActions.length))];
  }

  return lastActive;
}
    
public  addUserGroup() {  
    if (this.usergroup.userGroupName) {
      //this.userGroupName = userGrpName;
      console.log( "func "+this.usergroup.userGroupName);
      this.userGroupService.addUserGroup(this.usergroup.userGroupName,this.usergroup.users,this.usergroup.roles)
      .subscribe((r:Response)=>{
        console.log(r);
      });
      console.log("user group saved successfully!!");

      window.location.reload();
    }
  }


  onClick() {
    this.modal.open(CustomModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }


}