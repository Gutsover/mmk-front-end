import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  @Input()
  userList: any;
  selectedItem: any = null;
  isEnterprise: any = false;

  constructor(
    public clientService: ClientService,
    private route: ActivatedRoute
  ) {}

  @Output()
  clientupdate: EventEmitter<any> = new EventEmitter();

  updateClientInfo(id: number) {
    this.clientupdate.emit(id);
    this.selectedItem = id;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const isEnterprise = params.isEnterprise;
      this.isEnterprise = isEnterprise === 'true';
    });
  }
}
