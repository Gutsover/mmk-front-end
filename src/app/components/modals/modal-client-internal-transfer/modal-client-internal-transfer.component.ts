import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-modal-client-internal-transfer',
  templateUrl: './modal-client-internal-transfer.component.html',
  styleUrls: ['./modal-client-internal-transfer.component.scss'],
})
export class ModalClientInternalTransferComponent implements OnInit {
  @Input()
  amount: any = 0;
  accountA: any = null;
  accountB: any = null;
  currentAccount: any = null;
  savingAccount: any = null;

  constructor(
    private accountService: AccountService,
    private dialogRef: MatDialogRef<ModalClientInternalTransferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  sendData() {
    if (!this.accountB && !this.accountA) return;
    if (
      (this.accountA == 'current' && this.accountB == 'current') ||
      (this.accountA == 'saving' && this.accountB == 'saving')
    ) {
      return;
    }

    let sender: any = null;
    let receiver: any = null;

    switch (this.accountA) {
      case 'current':
        sender = this.currentAccount.iban;
        receiver = this.savingAccount.iban;
        break;
      case 'saving':
        sender = this.savingAccount.iban;
        receiver = this.currentAccount.iban;
        break;
    }

    // switch (this.accountB) {
    //   case 'current':
    //     receiver = this.currentAccount.iban;
    //     break;
    //   case 'saving':
    //     receiver = this.savingAccount.iban;
    //     break;
    // }

    this.dialogRef.close({
      ibanA: sender,
      ibanB: receiver,
      amount: this.amount,
    });
  }

  ngOnInit(): void {
    this.currentAccount = this.data.currentAccount;
    this.savingAccount = this.data.savingAccount;
  }
}
