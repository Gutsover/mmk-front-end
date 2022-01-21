import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppSettings } from '../AppSettings';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient, private clientService: ClientService) {}

  public cards$: BehaviorSubject<any> = new BehaviorSubject('');

  addNewCard(cardType: string, clientId: Number) {
    let url = '';
    switch (cardType) {
      case 'premium':
        url = `${AppSettings.API_ENDPOINT}card/vpc`;
        break;
      case 'electron':
        url = `${AppSettings.API_ENDPOINT}card/vec`;
        break;
      default:
        throw new Error('Error');
    }
    this.clientService.getClient(clientId).subscribe((client) => {
      this.cards$.next(client.card);
    });
    return this.http.post(url, clientId);
  }
  changeCardState(newState: Boolean, id: number) {
    return this.http.get(`${AppSettings.API_ENDPOINT}card/activate/${id}`);
  }
  deleteCard(id: Number) {
    return this.http.delete(`${AppSettings.API_ENDPOINT}card/${id}`);
  }
}
