import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';
import { ClientService } from 'src/app/services/client.service';
import { AddCreditCardComponent } from '../modals/add-credit-card/add-credit-card.component';
import { DeleteCreditCardComponent } from '../modals/delete-credit-card/delete-credit-card.component';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
})
export class ClientCardComponent implements OnInit {
  isActive = false;
  isActivateText = 'désactivée';
  statusCard = 'X';
  currentClient: any = null;

  @Input()
  currentUserId: number = 1;

  activateOrDeactivate() {
    this.isActive = !this.isActive;

    if (this.isActive) {
      this.isActivateText = ' activée';
      this.statusCard = 'Active';
    } else {
      this.isActivateText = 'désactivée';
      this.statusCard = 'X';
    }
  }

  constructor(
    public dialog: MatDialog,
    private clientService: ClientService,
    private cardService: CardService
  ) {}
  fetchClientInfo(id: Number) {
    this.clientService
      .getClient(id)
      .subscribe((res) => (this.currentClient = res));
  }

  ngOnInit(): void {
    this.fetchClientInfo(this.currentUserId);
  }
  ngOnChanges(): void {
    console.log(this.currentUserId);
    this.fetchClientInfo(this.currentUserId);
  }

  openModalAddCreditCard() {
    const dialogRef = this.dialog.open(AddCreditCardComponent);
  }

  deleteCreditCard(id: Number) {
    const dialogRef = this.dialog.open(DeleteCreditCardComponent);
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res === true) {
          this.cardService.deleteCard(id).subscribe();
        } else {
          return;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
