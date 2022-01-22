import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.scss'],
})
export class CreateNewAccountComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateNewAccountComponent>) {}

  ngOnInit(): void {}

  typeAccount(typeA: string) {
    // this.accountService.createAccount();
    this.dialog.close(typeA);
  }
}
