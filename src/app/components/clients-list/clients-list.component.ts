import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  userList: any;

  constructor(public clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((res) => (this.userList = res));
    console.log(this.userList);
  }
}
