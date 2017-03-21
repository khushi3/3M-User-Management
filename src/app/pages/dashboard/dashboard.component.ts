import { Component } from '@angular/core';
import { TablesService  } from './tables.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  public items = [];
   recentlyRemoveUsers: any[];
  constructor(private tableService: TablesService) {
    this.tableService.getJSON().subscribe(data => {
      this.items = data;
      console.log(data);
    }, error => console.log('Could not load List of Service'));
    
  }
  removeRecordPlugin(item) {
        // this.recentlyRemoveUsers = this.table.items.remove(item);
    }
}
