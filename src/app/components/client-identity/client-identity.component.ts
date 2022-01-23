import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from 'src/app/services/client.service';
import { DeleteClientComponent } from '../modals/delete-client/delete-client.component';
import { ModalClientIdentityComponent } from '../modals/modal-client-identity/modal-client-identity.component';

@Component({
  selector: 'app-client-identity',
  templateUrl: './client-identity.component.html',
  styleUrls: ['./client-identity.component.scss'],
})
export class ClientIdentityComponent implements OnInit {
  constructor(public dialog: MatDialog, public clientService: ClientService) {}

  currentClient: any;
  currentUserId: Number = 0;

  openModalUpdateClient() {
    const dialogRef = this.dialog.open(ModalClientIdentityComponent, {
      data: {
        currentClient: this.currentClient,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res === '' || res === undefined) {
        return;
      } else {
        res.id = this.currentUserId;
        this.clientService.updateClient(res);
      }
    });
  }

  openModalDeleteClient() {
    const dialogRef = this.dialog.open(DeleteClientComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res == true) {
        this.clientService.deleteClient(this.currentUserId);
      }
      return;
    });
  }

  ngOnInit(): void {
    this.clientService.clientInfo$.subscribe((client) => {
      this.currentClient = client;
      this.currentUserId = client.id;
    });
    this.clientService.getClientAJAX(this.currentUserId);
  }
}
