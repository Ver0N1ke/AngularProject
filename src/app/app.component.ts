import {Component, OnInit } from '@angular/core';
import * as venues from '../assets/venues.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  venuesJs: any = (venues as any).default
}
