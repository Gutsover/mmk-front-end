import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalClientIdentityComponent } from '../modals/modal-client-identity/modal-client-identity.component';

@Component({
  selector: 'app-client-identity',
  templateUrl: './client-identity.component.html',
  styleUrls: ['./client-identity.component.scss'],
})
export class ClientIdentityComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openModalUpdateClient() {
    const dialogRef = this.dialog.open(ModalClientIdentityComponent)
  }

  ngOnInit(): void {}
}
