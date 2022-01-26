import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  today = new Date().toLocaleDateString();
  name = '';
  constructor(private authGuard: AuthGuardService) {}

  ngOnInit(): void {
    this.name = this.authGuard.getCurrentUser().sub;
  }
}
