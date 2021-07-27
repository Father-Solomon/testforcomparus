import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeHeaderComponent } from './me-header.component';

describe('MeHeaderComponent', () => {
  let component: MeHeaderComponent;
  let fixture: ComponentFixture<MeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
