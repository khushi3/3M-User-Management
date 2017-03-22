import { UiBase } from './ui-base';

export class CheckboxUi extends UiBase<string>{
  controlType = 'checkbox';
  type:string;

  constructor(options:{} = {}){
    super(options);
    this.type = options['type'] || '';
  }
}