import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';


import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { UsersMap } from './usersMap';
import { UsersMapService } from './usersMap/usersMap.service';
import { UserGroupService  } from './usergroup.service';
import { PaginationModule } from 'ng2-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    ModalModule,
    BootstrapModalModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    UsersMap,
    Dashboard
  ],
  providers: [
    UsersMapService,
    UserGroupService
  ]
})
export class DashboardModule {}
