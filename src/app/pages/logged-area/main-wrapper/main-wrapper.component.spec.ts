import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWrapperComponent } from './main-wrapper.component';

describe('InitialComponent', () => {
  let component: MainWrapperComponent;
  let fixture: ComponentFixture<MainWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
