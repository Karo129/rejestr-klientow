import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm = new FormGroup({
    email: new FormControl('', ),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    // this.registerForm.controls.email.valueChanges.subscribe((text) => {
    //   console.log(text);
    // })
    this.registerForm.controls['email'].disable();
  }
  enableControl() {
    this.registerForm.controls['email'].enable();
  }

  onRegister() {
    console.log(this.registerForm.value);
    console.log(this.registerForm.getRawValue);
  }
}
