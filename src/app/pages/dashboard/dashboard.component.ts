import { Component } from '@angular/core';
import { TablesService  } from './tables.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  public items = [];
public getData: any;
constructor(private tableService: TablesService) {
this.tableService.getJSON().subscribe(data => {
this.items = data;
console.log(data);
}, error => console.log('Could not load List of Service'));
}

}
