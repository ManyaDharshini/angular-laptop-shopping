import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,HttpClientModule],
      declarations: [LoginComponent,NavbarComponent,FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should not allow empty email and password', () => {
    const emailControl = component.loginForm.get('emailId');
    const passwordControl = component.loginForm.get('password');
  
    emailControl.setValue('');
    passwordControl.setValue('');
    
    expect(component.loginForm.valid).toBeFalsy();
    expect(emailControl.hasError('required')).toBeTruthy();
    expect(passwordControl.hasError('required')).toBeTruthy();
  });

  it('should mark the form as valid when email and passwords are valid', () => {
    const emailControl = component.loginForm.get('emailId');
    const passwordControl = component.loginForm.get('password');
  
    emailControl.setValue('test_email@example.com');
    passwordControl.setValue('test@123');
  
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should mark the form as invalid when email and password are invalid', () => {
    const emailControl = component.loginForm.get('emailId');
    const passwordControl = component.loginForm.get('password');
  
    emailControl.setValue('invalid_email');
    passwordControl.setValue('123');
  
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should call submitLogin method when the form is submitted', () => {
    spyOn(component, 'submitLogin');
    const emailControl = component.loginForm.get('emailId');
    const passwordControl = component.loginForm.get('password');
  
    emailControl.setValue('test_email@example.com');
    passwordControl.setValue('test@123');
  
    fixture.detectChanges();
  
    const formElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
  
    expect(component.submitLogin).toHaveBeenCalled();
  });


  
});
