import { Component, OnInit } from '@angular/core';
import { NewGameBtnService } from 'services/new-game-btn.service';

@Component({
  selector: 'app-me-sidebar',
  templateUrl: './me-sidebar.component.html',
  styleUrls: ['./me-sidebar.component.scss'],
})
export class MeSidebarComponent implements OnInit {
  scoreMock = { player: 0, program: 1 };
  constructor(private newGameBtnService: NewGameBtnService) {}

  ngOnInit(): void {}
  startGame(event: any): void {
    this.newGameBtnService.newGameBtn$.next(event);
  }
}
