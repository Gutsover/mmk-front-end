import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss'],
})
export class DeleteAccountComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DeleteAccountComponent>) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close(false);
  }
  deleteAccount() {
    this.dialogRef.close(true);
  }
}
