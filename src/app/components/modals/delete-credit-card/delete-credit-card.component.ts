import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-credit-card',
  templateUrl: './delete-credit-card.component.html',
  styleUrls: ['./delete-credit-card.component.scss'],
})
export class DeleteCreditCardComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DeleteCreditCardComponent>) {}

  close() {
    this.dialogRef.close(false);
  }
  deleteCard() {
    this.dialogRef.close(true);
  }
  ngOnInit(): void {}
}
