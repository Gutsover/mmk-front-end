import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';
import { CreateNewAccountComponent } from '../modals/create-new-account/create-new-account.component';
import { DeleteAccountComponent } from '../modals/delete-account/delete-account.component';
import { ModalClientExternalTransferComponent } from '../modals/modal-client-external-transfer/modal-client-external-transfer.component';
import { ModalClientInternalTransferComponent } from '../modals/modal-client-internal-transfer/modal-client-internal-transfer.component';
import { SnackComponent } from '../snack/snack.component';

@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.scss'],
})
export class ClientAccountComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public accountService: AccountService,
    private clientService: ClientService,
    private _snackBar: MatSnackBar
  ) {}

  currentClient: any = null;
  @Input()
  currentUserId: number = 1;
  accountId: number = 1;
  accounts: any = [];
  savingAccount: any = null;
  currentAccount: any = null;
  canTransfer: boolean = false;

  openModalCreateAccount() {
    const dialogRef = this.dialog.open(CreateNewAccountComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res === 'current')
        if (this.currentAccount) {
          this.openSnackBar('Le client a deja un compte courant');
          return;
        } else {
          this.accountService.createAccount(res, this.currentUserId).subscribe(
            () => {
              this.accountService.getAccountAJAX(this.currentUserId);
            },
            (err) => {
              this.openSnackBar(err.error.message);
            }
          );
        }
      if (res == 'saving') {
        if (this.savingAccount) {
          this.openSnackBar('Le client a deja un compte client');
          return;
        } else {
          this.accountService.createAccount(res, this.currentUserId).subscribe(
            () => {
              this.accountService.getAccountAJAX(this.currentUserId);
            },
            (err) => {
              this.openSnackBar(err.error.message);
            }
          );
        }
      }
    });
  }
  openSnackBar(text: string) {
    this._snackBar.openFromComponent(SnackComponent, {
      data: {
        text: text,
      },
      horizontalPosition: 'right',
      duration: 5 * 1000,
    });
  }

  openModalInternalTransfer() {
    const dialogRef = this.dialog.open(ModalClientInternalTransferComponent, {
      data: {
        currentAccount: this.currentAccount,
        savingAccount: this.savingAccount,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.accountService.internalTransfer(res).subscribe(
        () => {
          this.accountService.getAccountAJAX(this.currentUserId);
        },
        (err) => {
          this.openSnackBar(err.error.message);
        }
      );
    });
  }
  openModalExternalTransfer() {
    const dialogRef = this.dialog.open(ModalClientExternalTransferComponent, {
      data: {
        currentAccount: this.currentAccount,
        savingAccount: this.savingAccount,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.accountService.internalTransfer(res).subscribe(
        () => {
          this.accountService.getAccountAJAX(this.currentUserId);
        },
        (err) => {
          this.openSnackBar(err.error.message);
        }
      );
    });
  }

  openModalDeleteAccount(accountId: Number) {
    const dialogRef = this.dialog.open(DeleteAccountComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res === true) {
        this.accountService.deleteAccount(accountId).subscribe(
          () => {
            this.accountService.getAccountAJAX(this.currentUserId);
          },
          (err) => {
            this.openSnackBar(err.error.message);
          }
        );
      }
    });
  }

  ngOnInit(): void {
    this.clientService.clientInfo$.subscribe((client) => {
      this.currentClient = client;
      this.currentUserId = client.id;
    });

    this.accountService.getAccounts(this.currentUserId).subscribe((res) => {
      const arr = Array.from(res);
      this.savingAccount = null;
      this.currentAccount = null;
      this.canTransfer = false;

      arr.forEach((account: any) => {
        if (account.interestRate) {
          this.savingAccount = account;
        }
        if (account.authorizedOverdraft) {
          this.currentAccount = account;
        }
        if (this.savingAccount && this.currentAccount) {
          this.canTransfer = true;
          return;
        }
      });

      this.accounts = [];
      this.accounts = res;
    });
  }
}
