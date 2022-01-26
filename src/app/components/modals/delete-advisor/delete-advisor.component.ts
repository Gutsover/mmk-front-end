import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-advisor',
  templateUrl: './delete-advisor.component.html',
  styleUrls: ['./delete-advisor.component.scss'],
})
export class DeleteAdvisorComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DeleteAdvisorComponent>) {}
  close() {
    this.dialogRef.close(false);
  }

  deleteClient() {
    this.dialogRef.close(true);
  }

  ngOnInit(): void {}
}
