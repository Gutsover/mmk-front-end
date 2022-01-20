import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../AppSettings';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}
  addNewCard(cardType: string, clientId: Number) {
    let url = '';
    switch (cardType) {
      case 'premium':
        console.log('Premium');
        url = `${AppSettings.API_ENDPOINT}card/vpc`;
        break;
      case 'electron':
        url = `${AppSettings.API_ENDPOINT}card/vec`;
        break;
      default:
        break;
    }
    return this.http.post(url, clientId);
  }
  deleteCard(id: Number) {
    return this.http.delete(`${AppSettings.API_ENDPOINT}card/${id}`);
  }
}
