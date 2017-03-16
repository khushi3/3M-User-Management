import { Component } from '@angular/core';
import { BasicTablesService  } from './basicTables.service'

import 'style-loader!./basicTables.scss';

@Component({
  selector: 'basic-tables',
   providers: [BasicTablesService],
  templateUrl: './basicTables.html'
})
export class BasicTables  {

public items = [];
public getData: any;
constructor(private basicTableService: BasicTablesService) {
this.basicTableService.getJSON().subscribe(data => {
this.items = data;
console.log(data);
}, error => console.log('Could not load List of Service'));
}
}
