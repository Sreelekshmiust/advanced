import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an h1 element with the correct title', () => {
    const h1Element = fixture.debugElement.query(By.css('h1'));
    expect(h1Element).toBeTruthy();
    expect(h1Element.nativeElement.textContent).toBe(component.title);
  });

  it('should contain a button element with the correct label', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.nativeElement.textContent).toBe('Show Alert');
  });

  it('should not display the alert message initially', () => {
    const alertElement = fixture.debugElement.query(By.css('.alert'));
    expect(alertElement).toBeFalsy();
  });

  it('should display the alert message when the button is clicked', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.nativeElement.click();
    fixture.detectChanges();
    const alertElement = fixture.debugElement.query(By.css('.alert'));
    expect(alertElement).toBeTruthy();
    expect(alertElement.nativeElement.textContent).toBe(component.message);
  });
});
