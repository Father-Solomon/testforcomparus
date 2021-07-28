import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FieldService } from 'services/field.service';
import { NewGameBtnService } from 'services/new-game-btn.service';

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
  field: ElementRef | undefined;
  stream$ = new Subject();
  constructor(
    private modalService: NgbModal,
    private fieldService: FieldService,
    private newGameBtnService: NewGameBtnService
  ) {}

  ngOnInit(): void {
    this.gameField = this.fieldService.create();
    this.newGameBtnService.newGameBtn$.subscribe((event) => {
      this.start();
    });
  }
  start(): void {
    console.log(this.field);
  }

  open() {
    const modalRef = this.modalService.open(MeModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.name = 'The Program is WIN!';
    modalRef.result.then(
      (data) => {
        console.log(data);
      },
      (reason) => {
        console.log(reason);
      }
    );
  }
}
