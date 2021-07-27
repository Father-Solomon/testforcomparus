import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeModalComponent } from './me-modal.component';

describe('MeModalComponent', () => {
  let component: MeModalComponent;
  let fixture: ComponentFixture<MeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
