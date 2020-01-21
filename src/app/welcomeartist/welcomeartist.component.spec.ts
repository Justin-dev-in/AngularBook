import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeartistComponent } from './welcomeartist.component';

describe('WelcomeartistComponent', () => {
  let component: WelcomeartistComponent;
  let fixture: ComponentFixture<WelcomeartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
