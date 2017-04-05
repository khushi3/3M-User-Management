import { Component } from '@angular/core';
import { UserGroupService  } from './usergroup.service';
import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import {Http, Response} from '@angular/http';
import { PaginationModule } from 'ng2-bootstrap';


@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {


  public userGroups = [];
  public userGroupName : string;

  public users=  [ {
          active: false,
          userId: 5,
          userName: "A1237ZZ",
          firstName: "Sandeep",
          lastName: "N"
        },
        {
          active: false,
          userId: 6,
          userName: "A1238ZZ",
          firstName: "Saurah",
          lastName: "S"
        }];
  public roles=[ {
      active: false,
      roleId: 3,
      roleName: "Super Admin",
      roleDesc: "Super Admin",
      permissions: null
    },
    {
      active: false,
      roleId: 4,
      roleName: "Approver",
      roleDesc: "Approves concepts",
      permissions: null
    }
    ];

  public items = [];
  public item: string;
 


  constructor(private userGroupService : UserGroupService) {

    this.userGroupService.getUserGroups().subscribe(data => {
      this.userGroups = data;

      console.log(data);
    }, error => console.log('Could not load userGroups '));
    
  }

  removeRecordPlugin(item) {
        // this.recentlyRemoveUsers = this.table.items.remove(item);
    }
 
  addUserGroup() { //userGrpName : string
    //console.log("inside add")
        if (this.userGroupName) {
            //this.userGroupName = userGrpName;

            console.log( "func "+this.userGroupName);
            this.userGroupService.addUserGroup(this.userGroupName,this.users,this.roles).
                subscribe((r:Response)=>{
                  console.log(r);
                });
            console.log("user group saved successfully!!");
            
            window.location.reload();
        }
    }


  onEdit(){
    console.log("clicking on edit")
  }
 
 


  }
