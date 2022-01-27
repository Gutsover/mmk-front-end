import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';
import { ClientService } from 'src/app/services/client.service';
import { DeleteCreditCardComponent } from '../modals/delete-credit-card/delete-credit-card.component';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackComponent } from '../snack/snack.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input()
  card: any = {};
  @Input()
  currentUserId: number = 0;
  durationInSeconds = 5;
  constructor(
    private cardService: CardService,
    private clientService: ClientService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  deleteCreditCard(id: Number) {
    const dialogRef = this.dialog.open(DeleteCreditCardComponent);
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res === true) {
          this.cardService.deleteCard(id).subscribe(
            () => {
              this.clientService.getClientAJAX(this.currentUserId);
            },
            (err) => {
              console.log(err.error.message);
              this.openSnackBar(err.error.message, "error");
            }
          );
          this.openSnackBar("Carte supprimée !", "success")
        } else {
          return;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
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
  activateOrDeactivate() {
    this.cardService.changeCardState(
      !this.card.isActive,
      this.card.id,
      this.currentUserId
    );
  }
  ngOnInit(): void {}
}
