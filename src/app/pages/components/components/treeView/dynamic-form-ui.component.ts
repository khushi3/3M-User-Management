
import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { UiBase }     from '../../../../global_class/ui-base';
@Component({
  //moduleId: module.id,
  selector: 'df-ui',
  templateUrl: './dynamic-form-ui.component.html'
})
export class DynamicFormUIComponent {
  @Input() ui: UiBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.ui.key].valid; }
}
