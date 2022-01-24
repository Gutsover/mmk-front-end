import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';
import { CreateNewAccountComponent } from '../modals/create-new-account/create-new-account.component';
import { DeleteAccountComponent } from '../modals/delete-account/delete-account.component';
import { ModalClientExternalTransferComponent } from '../modals/modal-client-external-transfer/modal-client-external-transfer.component';
import { ModalClientInternalTransferComponent } from '../modals/modal-client-internal-transfer/modal-client-internal-transfer.component';

@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.scss'],
})
export class ClientAccountComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public accountService: AccountService,
    private clientService: ClientService
  ) {}

  currentClient: any = null;
  @Input()
  currentUserId: number = 1;
  accountId: number = 1;
  accounts: any = [];

  openModalCreateAccount() {
    const dialogRef = this.dialog.open(CreateNewAccountComponent);
    dialogRef.afterClosed().subscribe((res) => {
      this.accountService
        .createAccount(res, this.currentUserId)
        .subscribe(() => {
          this.accountService.getAccountAJAX(this.currentUserId);
        });
    });
  }

  openModalInternalTransfer() {
    const dialogRef = this.dialog.open(ModalClientInternalTransferComponent);
  }
  openModalExternalTransfer() {
    const dialogRef = this.dialog.open(ModalClientExternalTransferComponent);
  }

  openModalDeleteAccount(accountId: Number) {
    const dialogRef = this.dialog.open(DeleteAccountComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res === true) {
        this.accountService.deleteAccount(accountId).subscribe(() => {
          this.accountService.getAccountAJAX(this.currentUserId);
        });
      }
    });
  }

  fetchClientInfo(id: Number) {
    this.clientService
      .getClient(id)
      .subscribe((res) => (this.currentClient = res));
  }

  ngOnInit(): void {
    this.clientService.clientInfo$.subscribe((client) => {
      this.currentClient = client;
      this.currentUserId = client.id;
    });

    this.accountService.getAccounts(this.currentUserId).subscribe((res) => {
      this.accounts = [];
      this.accounts = res;
    });
  }
}
