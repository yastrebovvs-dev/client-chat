import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipsCardComponent } from './flips-card.component';

describe('FlipsCardComponent', () => {
  let component: FlipsCardComponent;
  let fixture: ComponentFixture<FlipsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
