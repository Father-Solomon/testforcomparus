import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FieldCell } from 'models/field.model';

@Injectable({
  providedIn: 'root',
})
export class FieldService {
  sideLength = 10;
  readyField: FieldCell[][] | null = null;
  constructor() {}

  score$ = new Subject<{ player: number; program: number }>();

  create(): FieldCell[][] {
    this.readyField = Array.from({ length: this.sideLength }, () =>
      Array(this.sideLength).fill({
        player: false,
        program: false,
        isActive: false,
      })
    );
    return this.readyField;
  }

  changeField(
    field: FieldCell[][],
    variant: 'player' | 'program' | 'active',
    chosenCell: { row: number; col: number }
  ): FieldCell[][] {
    const newField: FieldCell[][] = field.map((row, i) => {
      if (i === chosenCell.row) {
        return row.map((col, index) => {
          const activeCol = {
            player: variant === 'player' ? true : false,
            program: variant === 'program' ? true : false,
            isActive: variant === 'active' ? true : false,
          };
          return index === chosenCell.col ? activeCol : col;
        });
      }
      return row;
    });

    return newField;
  }
}
