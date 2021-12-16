import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-form-signin-home',
  templateUrl: './form-signin-home.component.html',
  styleUrls: ['./form-signin-home.component.scss']
})
export class FormSigninHomeComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  username:string = "";
  password:string = "";

  validation(){
    const toSend = {
      username: "",
      password: ""
    }
    toSend.username = this.username;
    toSend.password = this.password;
    this.loginService.login(toSend).subscribe((employee) => console.log(employee));
    
  }

  
  ngOnInit(): void {
  }

}
