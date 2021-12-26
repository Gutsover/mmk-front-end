import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from 'src/app/services/client.service';
import { ModalClientIdentityComponent } from '../modals/modal-client-identity/modal-client-identity.component';

@Component({
  selector: 'app-client-identity',
  templateUrl: './client-identity.component.html',
  styleUrls: ['./client-identity.component.scss'],
})
export class ClientIdentityComponent implements OnInit {
  constructor(public dialog: MatDialog, public clientService: ClientService) {}

  openModalUpdateClient() {
    const dialogRef = this.dialog.open(ModalClientIdentityComponent);
  }

  fetchClientInfo(id: Number) {
    this.clientService.getClient(1).subscribe((res) => console.log(res));
  }

  ngOnInit(): void {}
}
