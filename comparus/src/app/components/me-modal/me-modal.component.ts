import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-me-modal',
  templateUrl: './me-modal.component.html',
  styleUrls: ['./me-modal.component.scss'],
})
export class MeModalComponent implements OnInit {
  @Input() public name: string = '';
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
