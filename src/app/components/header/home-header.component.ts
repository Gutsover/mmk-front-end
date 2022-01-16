
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  
  constructor(public dialog: MatDialog) {

    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
   }, 1000);

  }

  openModalUpdateProfil() {
    const dialogRef = this.dialog.open(ModalUpdateProfilComponent);
  }

  ngOnInit(): void {}
}
