import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UiBase } from '../../../../global_class/ui-base';

@Injectable()
export class UiControlService {
  constructor() { }

  toFormGroup(uis: UiBase<any>[] ) {
    let group: any = {};

    if(uis != undefined){
      console.log("inside form control")
    	uis.forEach(ui => {
    	group[ui.key] = ui.required ? new FormControl(ui.value || '', Validators.required)
                                               : new FormControl(ui.value || '');
    	});
    }
    
    return new FormGroup(group);
  }
}
