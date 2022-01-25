import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss'],
})
export class HomeLoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  username: string = '';
  password: string = '';

  validation() {
    const toSend = {
      username: '',
      password: '',
    };
    toSend.username = this.username;
    toSend.password = this.password;

    this.loginService.login(toSend).subscribe(
      (data) => {
        if (data.accessToken) {
          localStorage.setItem('id_token', data.accessToken);
          this.loginService.currentUser = data;
          this.router.navigate(['/adm/dashboard']);
        }
      },
      (error) => alert('No user found, please check your password / username')
    );
  }

  ngOnInit(): void {}
}
