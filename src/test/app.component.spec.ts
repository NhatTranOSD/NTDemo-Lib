import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NTheaderModule } from '../app/modules/ntheader/ntheader.module';
import { NTSlideBarModule } from '../app/modules/ntslide-bar/ntslide-bar.module';
import { NTFooterModule } from '../app/modules/ntfooter/ntfooter.module';
import { NTLoginModule } from '../app/modules/ntlogin/ntlogin.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        NTheaderModule,
        NTSlideBarModule,
        NTFooterModule,
        NTLoginModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NT-Demo-lib'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('NT-Demo-lib');
  });

});
