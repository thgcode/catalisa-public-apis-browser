import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAPIsComponent } from './view-categories.component';

describe('ViewAPIsComponent', () => {
  let component: ViewAPIsComponent;
  let fixture: ComponentFixture<ViewAPIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAPIsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAPIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
