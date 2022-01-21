import { Route } from '@angular/compiler/src/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss'],
})
export class ClientViewComponent implements OnInit {
  currentUserId: number = 1;
  isEnterprise: Boolean = false;
  userList: any;
  
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((res) => {
      this.userList = res;
    });
  }

  updateClientInfo(id: any): void {
    this.currentUserId = id;
    this.clientService.getClientAJAX(id);
  }
}
