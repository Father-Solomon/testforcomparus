import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject, timer, interval, fromEvent, Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FieldService } from 'services/field.service';
import { NewGameBtnService } from 'services/new-game-btn.service';
import { RandomCellService } from 'services/random-cell.service';

import { FieldCell } from 'models/field.model';
import { MeModalComponent } from 'components/me-modal/me-modal.component';

@Component({
  selector: 'app-me-game-field',
  templateUrl: './me-game-field.component.html',
  styleUrls: ['./me-game-field.component.scss'],
})
export class MeGameFieldComponent implements OnInit {
  gameField: FieldCell[][] | null = null;
  @ViewChild('field', { static: false })
  field: ElementRef | undefined = undefined;
  stream$ = new Subject();
  chosenCell: { row: number; col: number } = { row: 0, col: 0 };
  timerInMs: number = 0;
  constructor(
    private modalService: NgbModal,
    private fieldService: FieldService,
    private newGameBtnService: NewGameBtnService,
    private randomCellService: RandomCellService
  ) {}
  ngOnInit(): void {
    this.newGameBtnService.newGameBtn$.subscribe((v) => {
      this.timerInMs = v;
      this.start();
    });
  }

  gameStream$ = new Observable((observer) => {
    observer.next('First value');
    const timerStream$ = timer(this.timerInMs).subscribe((v) => {
      this.gameField = this.fieldService.changeField(
        this.gameField!,
        'program',
        this.chosenCell
      );
      observer.complete();
      eventStream$.unsubscribe();
      this.moveEndController(this.gameField);
    });
    const eventStream$ = fromEvent(document, 'click').subscribe({
      next: (v) => {
        const chosenElement: HTMLElement =
          this.field!.nativeElement.children[this.chosenCell.row].children[
            this.chosenCell.col
          ];
        if (v.target === chosenElement) {
          this.gameField = this.fieldService.changeField(
            this.gameField!,
            'player',
            this.chosenCell
          );
          timerStream$.unsubscribe();
          eventStream$.unsubscribe();
          observer.unsubscribe();
          this.moveEndController(this.gameField);
        }
      },
      complete: () => console.log('Complete'),
    });
  });

  makeAMove(gameField: FieldCell[][]): void {
    const chosenCell = this.randomCellService.randomize(gameField);
    if (!chosenCell || !this.field || !this.gameField) {
      return;
    }
    this.chosenCell = chosenCell;
    this.gameField = this.fieldService.changeField(
      this.gameField,
      'active',
      this.chosenCell
    );
    this.gameStream$.subscribe();
  }

  start(): void {
    this.gameField = null;
    this.gameField = this.fieldService.create();
    this.makeAMove(this.gameField);
  }

  endCurrentGame(playerScore: number): void {
    const winner: string = playerScore === 10 ? ' player ' : ' program ';
    this.newGameBtnService.endGame$.next('');
    this.open(winner);
  }

  moveEndController(gameField: FieldCell[][]): void {
    const squares: FieldCell[] = [];
    gameField.map((row) => {
      row.map((col) => squares.push(col));
    });
    const playerScore = squares.filter((square) => square.player).length;
    const programScore = squares.filter((square) => square.program).length;
    this.fieldService.score$.next({
      player: playerScore,
      program: programScore,
    });
    if (playerScore === 10 || programScore === 10) {
      this.endCurrentGame(playerScore);
      return;
    } else {
      this.makeAMove(this.gameField!);
    }
  }

  open(winner: string) {
    const modalRef = this.modalService.open(MeModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.name = 'The' + winner + 'is WIN!';
    modalRef.result.then(
      () => {
        this.fieldService.score$.next({
          player: 0,
          program: 0,
        });
        this.gameField = null;
        this.start();
      },
      () => {
        this.fieldService.score$.next({
          player: 0,
          program: 0,
        });
        this.gameField = null;
      }
    );
  }
}
