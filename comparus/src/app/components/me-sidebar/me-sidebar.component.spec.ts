import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeSidebarComponent } from './me-sidebar.component';

describe('MeSidebarComponent', () => {
  let component: MeSidebarComponent;
  let fixture: ComponentFixture<MeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeSidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
