import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    const client = this.clientService.getClientAJAX(clientId);
    this.cards$.next(client);
    return this.http.post(url, clientId);
  }

  getCards(): Observable<any> {
    this.clientService.clientInfo$.subscribe((res) => {
      this.cards$.next(res);
    });
    return this.cards$.asObservable();
  }

  changeCardState(newState: Boolean, id: number, clientId: Number) {
    this.http
      .get(`${AppSettings.API_ENDPOINT}card/activate/${id}`)
      .subscribe(() => {
        this.clientService.getClientAJAX(clientId);
      });
  }
  deleteCard(id: Number) {
    return this.http.delete(`${AppSettings.API_ENDPOINT}card/${id}`);
  }
}
