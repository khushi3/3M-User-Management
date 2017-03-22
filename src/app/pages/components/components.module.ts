import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeModule } from 'ng2-tree';

import { routing }       from './components.routing';
import { Components } from './components.component';
import { TreeView } from './components/treeView/treeView.component';
import { DynamicFormComponent }         from './components/treeView/dynamic-form.component';
import { DynamicFormUIComponent } from './components/treeView/dynamic-form-ui.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    NgaModule,
    TreeModule,
    routing
  ],
  declarations: [
    Components,
    TreeView,
    DynamicFormComponent,
    DynamicFormUIComponent
  ]
})
export class ComponentsModule {}
