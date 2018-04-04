import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputSwitchComponent } from './inputswitch.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('InputSwitchComponent', () => {

  let inputswitch: InputSwitchComponent;
  let fixture: ComponentFixture<InputSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [
        InputSwitchComponent
      ]
    });

    fixture = TestBed.createComponent(InputSwitchComponent);
    inputswitch = fixture.componentInstance;
  });
});
