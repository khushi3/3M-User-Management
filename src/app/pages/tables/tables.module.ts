import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing }       from './tables.routing';
import { Tables } from './tables.component';
import { BasicTables } from './components/basicTables/basicTables.component';
import { BasicTablesService } from './components/basicTables/basicTables.service';
import { SmartTables } from './components/smartTables/smartTables.component';
import { SmartTablesService } from './components/smartTables/smartTables.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
  ],
  declarations: [
    Tables,
    BasicTables,
    SmartTables,
  ],
  providers: [
    BasicTablesService,
    SmartTablesService,
  ]
})
export class TablesModule {
}
