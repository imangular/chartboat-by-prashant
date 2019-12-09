import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { chatboatComponent } from './chatboat.component';

describe('chatboatComponent', () => {
  let component: chatboatComponent;
  let fixture: ComponentFixture<chatboatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ chatboatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(chatboatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
