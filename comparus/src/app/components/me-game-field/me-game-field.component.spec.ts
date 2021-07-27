import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeGameFieldComponent } from './me-game-field.component';

describe('MeGameFieldComponent', () => {
  let component: MeGameFieldComponent;
  let fixture: ComponentFixture<MeGameFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeGameFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeGameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
