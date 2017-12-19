import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSelectionComponent } from './unit-selection.component';

describe('UnitSelectionComponent', () => {
  let component: UnitSelectionComponent;
  let fixture: ComponentFixture<UnitSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
