import { Component } from '@angular/core';
import { TablesService  } from './tables.service';
import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import {Http, Response} from '@angular/http';


@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  public items = [];
  public item: string;

  constructor(private tableService: TablesService) {
    this.tableService.getJSON().subscribe(data => {
      this.items = data;
      console.log(data);
    }, error => console.log('Could not load List of Service'));
    
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(this.items);
    } else {
      event.confirm.reject();
    }
  }


addItem(item: string) {
	console.log("inside add")
        if (item) {
            this.item = item;

            console.log( "func "+item);
            this.tableService.addItem(this.item);


        }
    }

}
