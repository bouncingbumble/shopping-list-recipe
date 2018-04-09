import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() nav: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  tabClicked(tab: string){
    this.nav.emit(tab);
  }
}
