import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackComponent} from "../../snack/snack.component";

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.scss'],
})
export class AddCreditCardComponent implements OnInit {
  constructor(private dialog: MatDialogRef<AddCreditCardComponent>, private _snackBar: MatSnackBar) {}

  chooseCardType(cardType: string) {
    this.dialog.close(cardType);
    this.openSnackBar("Carte créée !", "success");
  }

  ngOnInit(): void {}

  openSnackBar(text: string, css: string) {
    this._snackBar.openFromComponent(SnackComponent, {
      data: {
        text: text,
        css: css
      },
      horizontalPosition: 'right',
      duration: 5 * 1000,
    });
  }
}
