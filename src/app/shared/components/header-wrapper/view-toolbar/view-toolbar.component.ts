import { UserData } from './../../../../models/main-models';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-toolbar',
  templateUrl: './view-toolbar.component.html'
})
export class ViewToolbarComponent implements OnInit {
  @Input() user: UserData
  @Input() showSide: boolean;
  @Input() selectedItemFromMenu: string;
  @Output() toggleSideMenu = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  hideSide() {
    this.showSide = !this.showSide;
    this.toggleSideMenu.emit(this.showSide);
  }

  reload() {
    //sessionStorage.removeItem('mes');
    location.reload()
  }

}
