import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  opened = false;

  toggleSideBar() {
    this.opened = !this.opened;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
