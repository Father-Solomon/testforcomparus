import { Component, OnInit } from '@angular/core';
import { NewGameBtnService } from 'services/new-game-btn.service';
import { FieldService } from 'services/field.service';

@Component({
  selector: 'app-me-sidebar',
  templateUrl: './me-sidebar.component.html',
  styleUrls: ['./me-sidebar.component.scss'],
})
export class MeSidebarComponent implements OnInit {
  score = { player: 0, program: 0 };
  gameIsActive: boolean = false;
  constructor(private newGameBtnService: NewGameBtnService, private fieldService: FieldService) {}

  ngOnInit(): void {
    this.newGameBtnService.endGame$.subscribe(() => {
      this.gameIsActive = false;
    });
    this.fieldService.score$.subscribe((v)=> console.log(v)
    )
  }
  startGame(event: MouseEvent): void {
    this.gameIsActive = true;
    this.newGameBtnService.newGameBtn$.next('');
  }

}
