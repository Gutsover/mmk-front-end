import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.scss'],
})
export class AddCreditCardComponent implements OnInit {
  constructor(private cardService: CardService) {}

  chooseCardType(cardType: string) {
    this.cardService.addNewCard(cardType).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {}
}
