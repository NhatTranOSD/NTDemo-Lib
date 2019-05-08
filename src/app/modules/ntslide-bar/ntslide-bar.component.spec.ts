import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NTSlideBarComponent } from './ntslide-bar.component';

describe('NTSlideBarComponent', () => {
  let component: NTSlideBarComponent;
  let fixture: ComponentFixture<NTSlideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NTSlideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NTSlideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
