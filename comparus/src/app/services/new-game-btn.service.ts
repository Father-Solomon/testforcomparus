import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NewGameBtnService {
  newGameBtn$ = new Subject<number>();
  endGame$ = new Subject();
  constructor() {}
}
