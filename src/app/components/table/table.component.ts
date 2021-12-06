import { Component, OnInit, Input } from '@angular/core';
import { Venue } from "../../Venue";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() venuesJs: Venue[];
  searchValue: string;

  displayStartdate (startdate: string): string {
    if(startdate) {
      return startdate.slice(startdate.length - 4);
  } else {
      return '-';
    }
  }
  showHide(venue: Venue) {
    venue.visible = !venue.visible;
  }
  buttonText(venue: Venue) {
    return venue.visible ? 'Close details' : 'Details'
  }
}
