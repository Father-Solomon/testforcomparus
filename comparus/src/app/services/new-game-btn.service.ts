import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NewGameBtnService {
  newGameBtn$ = new Subject();
  endGame$ = new Subject();
  constructor() {}
}
