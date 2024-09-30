import { TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MockComponent } from 'ng-mocks';

// Test suite
// f für focus
// x für ausschließen, exclude  (xdescribe, xit)
describe('AppComponent', () => {

  // Wird vor jedem Test ausgeführt
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterOutlet
      ],
      declarations: [
        AppComponent,
        MockComponent(NavigationComponent)
      ],
    }).compileComponents();
  });


  // Testfall
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Erwartung gefolgt von einem Matcher
    expect(app).toBeTruthy();
  });


/* 
  // Testfall
  it(`should have as title 'crm'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('crm');
  });

  // Unit-Tests oder Testfall
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, crm');
  }); */
});
