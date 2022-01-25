import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  @Input()
  clientList: any;
  isEnterprise: any = false;

  constructor(public clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((res) => {
      this.clientList = res;
    });
  }

}
