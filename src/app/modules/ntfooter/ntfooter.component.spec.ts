import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NTFooterComponent } from './ntfooter.component';

describe('NTFooterComponent', () => {
  let component: NTFooterComponent;
  let fixture: ComponentFixture<NTFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NTFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NTFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
