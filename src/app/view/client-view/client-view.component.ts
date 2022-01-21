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
  @Input()
  currentUserId: number = 1;

  userList: any;
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((res) => {
      this.route.queryParams.subscribe((params: any) => {
        this.userList = res;
        const paramIsEnterprise = params.isEnterprise === 'true';
        const r = res.filter((client: any) => {
          return client.isEnterprise === paramIsEnterprise;
        });
        this.currentUserId = r[0].id;
      });
    });
  }
  updateClientInfo(id: any): void {
    this.currentUserId = id;
  }
}
