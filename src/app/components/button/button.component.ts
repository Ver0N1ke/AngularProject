import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Venue } from "../../Venue";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() venue: Venue;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  showHide() {
    this.btnClick.emit();
  }
}
