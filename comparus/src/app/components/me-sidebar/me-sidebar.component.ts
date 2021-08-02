import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  intervalForm : FormGroup;
  constructor(
    private newGameBtnService: NewGameBtnService,
    private fieldService: FieldService
  ) {
    this.intervalForm = new FormGroup({
      "interval": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(4)]),
  });
  }


  ngOnInit(): void {
    this.newGameBtnService.endGame$.subscribe(() => {
      this.gameIsActive = false;

    });
    this.fieldService.score$.subscribe((v) => {
      this.score.player = v.player;
      this.score.program = v.program;
    });
  }
  submit() {
    console.log(this.intervalForm);
  }

  startGame(event: MouseEvent): void {
    this.gameIsActive = true;
    this.newGameBtnService.newGameBtn$.next(this.intervalForm.controls['interval'].value);
  }
}
