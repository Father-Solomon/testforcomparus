import { Injectable } from '@angular/core';
import { FieldCell } from 'models/field.model';

@Injectable({
  providedIn: 'root',
})
export class FieldService {
  sideLength = 10;
  readyField: FieldCell[][] | null = null;
  constructor() {}

  create(): FieldCell[][] | null {
    this.readyField = Array.from({ length: this.sideLength }, () =>
      Array(this.sideLength).fill({
        player: false,
        program: false,
        isActive: false,
      })
    );
    return this.readyField;
  }
}
