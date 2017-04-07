import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';


import { UserManagement } from './user-management.component';
import { routing }       from './user-management.routing';

import { UserGroupService  } from './usergroup.service';
import { DualListComponent } from './dual-list.component';
import { CustomModal } from './custom-modal';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [
    UserManagement,
    DualListComponent,
    CustomModal
  ],
  providers: [
    UserGroupService
  ]
})
export class UserManagementModule {}
