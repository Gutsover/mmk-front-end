import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isAdm = false;
  constructor(private auth: AuthGuardService) {}

  ngOnInit(): void {
    this.isAdm = this.auth.getCurrentUser().role.indexOf('ROLE_ADMIN') >= 0;
    console.log(this.isAdm);
  }
}
