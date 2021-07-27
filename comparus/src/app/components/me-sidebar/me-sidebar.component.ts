import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me-sidebar',
  templateUrl: './me-sidebar.component.html',
  styleUrls: ['./me-sidebar.component.scss'],
})
export class MeSidebarComponent implements OnInit {
  scoreMock = { player: 0, program: 1 };
  constructor() {}

  ngOnInit(): void {}
}
