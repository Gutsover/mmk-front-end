import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  currentClient: any = null;

  @Input()
  currentUserId: number = 0;

  constructor(
    public dialog: MatDialog,
    private clientService: ClientService,
    private cardService: CardService,
    private router: Router
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
    this.fetchClientInfo(this.currentUserId);
  }

  openModalAddCreditCard() {
    const dialogRef = this.dialog.open(AddCreditCardComponent);
    dialogRef.afterClosed().subscribe((res) => {
      this.cardService.addNewCard(res, this.currentUserId).subscribe(() => {
        this.clientService.getClient(this.currentUserId);
      });
    });
  }
}
