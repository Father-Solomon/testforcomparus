import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MeModalComponent } from 'components/me-modal/me-modal.component';

@Component({
  selector: 'app-me-game-field',
  templateUrl: './me-game-field.component.html',
  styleUrls: ['./me-game-field.component.scss'],
})
export class MeGameFieldComponent implements OnInit {
  gameFieldMock = [
    [
      {
        player: false,
        program: false,
        isActive: true,
      },
      {
        player: true,
        program: false,
        isActive: false,
      },
      {
        player: false,
        program: true,
        isActive: false,
      },
    ],
    [
      {
        player: false,
        program: false,
        isActive: false,
      },
      {
        player: false,
        program: false,
        isActive: false,
      },
      {
        player: false,
        program: false,
        isActive: false,
      },
    ],
    [
      {
        player: false,
        program: false,
        isActive: false,
      },
      {
        player: false,
        program: true,
        isActive: false,
      },
      {
        player: false,
        program: false,
        isActive: false,
      },
    ],
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

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
