import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalClientExternalTransferComponent } from '../modals/modal-client-external-transfer/modal-client-external-transfer.component';
import { ModalClientInternalTransferComponent } from '../modals/modal-client-internal-transfer/modal-client-internal-transfer.component';

@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.scss']
})
export class ClientAccountComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openModalInternalTransfer() {
    const dialogRef = this.dialog.open(ModalClientInternalTransferComponent);
  }
  openModalExternalTransfer() {
    const dialogRef = this.dialog.open(ModalClientExternalTransferComponent);
  }

  ngOnInit(): void {
  }

}
