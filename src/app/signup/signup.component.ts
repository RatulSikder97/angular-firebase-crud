import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm =  this.formBuilder.group({
      email :['',Validators.required],
      password :['',Validators.required]
    })
  }

  get getControl() {
    return  this.signupForm.controls
  }
 
  signUp() {
    this.authService.signUp(this.getControl.email.value, this.getControl.password.value)
  }

}
