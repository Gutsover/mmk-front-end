import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCreditCardComponent } from '../modals/add-credit-card/add-credit-card.component';
import { DeleteCreditCardComponent } from '../modals/delete-credit-card/delete-credit-card.component';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
})
export class ClientCardComponent implements OnInit {
  isActive = false;
  isActivateText = "désactivée";
  statusCard = "X";

  activateOrDeactivate() {
    this.isActive = !this.isActive;

    if (this.isActive) {
      this.isActivateText = ' activée';
      this.statusCard = "Active";
    } else {
      this.isActivateText = "désactivée";
      this.statusCard = "X";
    }
  }

  constructor(public dialog: MatDialog) {}

  openModalAddCreditCard() {
    const dialogRef = this.dialog.open(AddCreditCardComponent);
  }

  deleteCreditCard() {
    const dialogRef = this.dialog.open(DeleteCreditCardComponent);
 }
  ngOnInit(): void {}
}
