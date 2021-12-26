import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss'],
})
export class HomeLoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  username: string = '';
  password: string = '';

  validation() {
    const toSend = {
      username: '',
      password: '',
    };
    toSend.username = this.username;
    toSend.password = this.password;
    this.loginService
      .login(toSend)
      .subscribe((employee) => console.log(employee));
  }

  ngOnInit(): void {}
}
