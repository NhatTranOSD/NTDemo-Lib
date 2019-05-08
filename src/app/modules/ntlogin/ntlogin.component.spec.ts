import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NTLoginComponent } from './ntlogin.component';

describe('NTLoginComponent', () => {
  let component: NTLoginComponent;
  let fixture: ComponentFixture<NTLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NTLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NTLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
