import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() btnClickHeader = new EventEmitter();

  title: string = 'Venues in Amsterdam';

  onClickHeader() {
    this.btnClickHeader.emit();
    console.log('click header works')
  }

}
