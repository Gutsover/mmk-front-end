import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss'],
})
export class ClientViewComponent implements OnInit {
  @Input()
  currentUserId: number = 1;

  userList: any;
  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((res) => (this.userList = res));
  }
  updateClientInfo(id: any): void {
    this.currentUserId = id;
  }
}
