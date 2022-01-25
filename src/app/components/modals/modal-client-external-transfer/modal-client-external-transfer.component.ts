import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-modal-client-external-transfer',
  templateUrl: './modal-client-external-transfer.component.html',
  styleUrls: ['./modal-client-external-transfer.component.scss'],
})
export class ModalClientExternalTransferComponent implements OnInit {
  @Input()
  accountType: any = null;
  amount: any = 0;
  iban: any = null;
  currentAccount: any = null;
  savingAccount: any = null;
  constructor(
    private accountService: AccountService,
    private dialogRef: MatDialogRef<ModalClientExternalTransferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  sendData() {
    if (!this.accountType || !this.iban || this.amount <= 0) return;
    let sender: any = null;

    switch (this.accountType) {
      case 'current':
        sender = this.currentAccount.iban;
        break;
      case 'saving':
        sender = this.savingAccount.iban;
        break;
    }
    this.dialogRef.close({
      ibanA: sender,
      ibanB: this.iban.trim(),
      amount: this.amount,
    });
  }

  ngOnInit(): void {
    this.currentAccount = this.data.currentAccount;
    this.savingAccount = this.data.savingAccount;
  }
}
