import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FieldCell } from 'models/field.model';

@Injectable({
  providedIn: 'root',
})
export class RandomCellService {
  constructor() {}

  randomize(field: FieldCell[][]): { row: number; col: number } {
    const row = Math.floor(Math.random() * (field.length - 1));
    const col = Math.floor(Math.random() * (field.length - 1));
    if (field[row][col].player || field[row][col].program) {
      this.randomize(field);
    }
    return { row: row, col: col };
  }
}
