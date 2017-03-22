import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { UiBase } from '../../../../global_class/ui-base';
import { UiControlService } from './ui-control.service';
@Component({
  //moduleId: module.id,
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ UiControlService ]
})
export class DynamicFormComponent implements OnInit {
  @Input() uis: UiBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  constructor(private uics: UiControlService) {  }
  ngOnInit() {
    this.form = this.uics.toFormGroup(this.uis);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}