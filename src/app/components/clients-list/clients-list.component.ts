import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { AuthGuardService } from '../../services/auth-guard.service';

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
    private route: ActivatedRoute,
    private authguard: AuthGuardService
  ) {}
  @Output()
  clientupdate: EventEmitter<any> = new EventEmitter();

  updateClientInfo(id: number) {
    this.clientupdate.emit(id);
    this.selectedItem = id;
  }

  ngOnInit(): void {
    if (this.authguard.getCurrentUser().role.indexOf('ROLE_ADMIN') >= 0) {
      this.clientService.getClientAdm().subscribe((res) => {
        this.userList = res;
      });
    } else {
      this.clientService.getClients().subscribe((res) => {
        this.userList = res;
      });
    }

    this.route.queryParams.subscribe((params) => {
      const isEnterprise = params.isEnterprise;
      this.isEnterprise = isEnterprise === 'true';
    });
  }
}
