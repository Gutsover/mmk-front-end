import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';
import { ClientService } from 'src/app/services/client.service';
import { DeleteCreditCardComponent } from '../modals/delete-credit-card/delete-credit-card.component';

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
  isActive = false;
  isActivateText = 'désactivée';
  statusCard = 'X';

  constructor(
    private cardService: CardService,
    private clientService: ClientService,
    private dialog: MatDialog
  ) {}

  deleteCreditCard(id: Number) {
    const dialogRef = this.dialog.open(DeleteCreditCardComponent);
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res === true) {
          this.cardService.deleteCard(id).subscribe(() => {
            this.clientService
              .getClient(this.currentUserId)
              .subscribe((res) => {
                console.log(res);
              });
          });
        } else {
          return;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
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
  ngOnInit(): void {}

  ngOnChanges(): void {
    this.cardService.deleteCard(this.currentUserId).subscribe(() => {
      this.clientService.getClient(this.currentUserId);
    });
  }
}
