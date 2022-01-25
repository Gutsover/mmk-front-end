import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.scss'],
})
export class AddCreditCardComponent implements OnInit {
  constructor(private dialog: MatDialogRef<AddCreditCardComponent>) {}

  chooseCardType(cardType: string) {
    this.dialog.close(cardType);
  }

  ngOnInit(): void {}
}
