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
import * as globalConfig from './../../global.config';

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

  settings = {

    hideHeader: false,
    doEmit: true,
    silent: true,

    pager: {
      perPage: 10,
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
        title: globalConfig.label_group_name,
        type: 'string',
        sort: false
      },
      roleNames: {
        title: globalConfig.label_roles,
        type: 'string',
        sort: false
      },
      usersCount: {
        title: globalConfig.label_users_coount,
        type: 'number',
        sort: false
      },
      dateCreated: {
        title: globalConfig.label_date_created,
        type: 'string',
        sort: false
      },
      lastActive : {
        title: globalConfig.label_last_active,
        type: 'string',
        filter: false,
        sort:false
      }
    },
    actions: {
      columnTitle: globalConfig.label_actions,
      type: 'html',
      add: false,
      edit: false,
      position: 'right'
    }

  };

  source: LocalDataSource;

  public filteredcount;

  public newUserGroup: UserGroup = new UserGroup(); 
 
  public userGroups: Array<any>= [];

  public lastActions : Array<string> = [ 
  'Created Region',
  'Edited Region',
  'Created Concept',
  'Edited Concept',
  'Created Branch',
  'Released Branch'
  ];


  constructor(private userGroupService : UserGroupService,public modal: Modal,private ref: ChangeDetectorRef,
    private _sanitizer: DomSanitizer) {

    this.source = new LocalDataSource();
    // calling service to get userGroups
    this.userGroupService.getUserGroups().subscribe(data => {

      let groups: Array<any>= data;
      let userGrp: UserGroup;

      // iterate over all userGroups returned from server and create UserGroup objects
      for (var i = 0; i<groups.length; i++) {

        userGrp = new UserGroup();

        userGrp.userGroupName = groups[i].userGroupName;
        userGrp.roleNames = this.getRoleNamesAsCSV(groups[i].roles);
        userGrp.usersCount = groups[i].users.length;
        userGrp.dateCreated = groups[i].dateCreated.substring(0,19);
        userGrp.lastActive = this.getLastActive(groups[i]);
        userGrp.id = groups[i].id;
        //console.log(userGrp);

        this.userGroups.push(userGrp);
      }
      // sort the userGroups to get recent one first
       this.userGroups.sort((a, b) => b.id - a.id);

    }, error => console.log('Could not load List of Service'));

    this.getData().then((data) => {
      this.source.load(data); 
      this.filteredcount = this.source.count();
    });

  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.userGroups);
      }, 2000);
    });
  }

  public addUserGroup() {  
    if (this.newUserGroup.userGroupName) {
      this.userGroupService.addUserGroup(this.newUserGroup.userGroupName,
        this.newUserGroup.users,this.newUserGroup.roles)
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

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
       
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  
  // iterate over all roles of a group and return Comma Separated roles
  private getRoleNamesAsCSV(groupRoles){
    var roleNames : string = '';
    for(var j = 0; j<groupRoles.length; j++){
      roleNames += groupRoles[j].roleName + ', ';
    }

    if (roleNames.endsWith(', ')) {
      roleNames = roleNames.substring(0, roleNames.length - 2);
    } 
    return roleNames;
  }

  // method to get last operation done by any user in a group
  // this is a place holder, as of now, hence returning static data
  private getLastActive(usergrp) : string {

    var lastActive;
    // get random user + random actions , only if group contains users
    if((usergrp.users != undefined || null) && (usergrp.users.length != 0)){
      console.log('inside ');
      lastActive = usergrp.users[Math.floor((Math.random() * usergrp.users.length))].userName + ' : ' +
      this.lastActions[Math.floor((Math.random() * this.lastActions.length))];
    }
    return lastActive;
  }

}