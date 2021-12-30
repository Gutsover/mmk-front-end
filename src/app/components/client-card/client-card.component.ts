import { Component, OnInit } from '@angular/core';

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
    console.log(this.isActive);

    if (this.isActive) {
      this.isActivateText = ' activée';
      this.statusCard = "Active";
    } else {
      this.isActivateText = "désactivée";
      this.statusCard = "X";
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
