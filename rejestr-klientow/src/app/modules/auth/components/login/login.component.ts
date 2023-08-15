import { Component, OnInit } from '@angular/core';
import { UserLoginData } from 'src/app/modules/core/models/user.model';
import { AuthService } from 'src/app/modules/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide =true;
  userData: UserLoginData = {
    username: '',
    password: '',
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.authService.login(this.userData).subscribe({
      next: value => {
        console.log(value);
      }
    })
  }

}
