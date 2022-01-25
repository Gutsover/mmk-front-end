import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalUpdateProfilComponent } from '../modals/modal-update-profil/modal-update-profil.component';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  user = null;
  today = new Date().toLocaleDateString();
  time!: string;

  constructor(public dialog: MatDialog, private router: Router) {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['/login']);
  }

  openModalUpdateProfil() {
    const dialogRef = this.dialog.open(ModalUpdateProfilComponent);
  }

  ngOnInit(): void {}
}
