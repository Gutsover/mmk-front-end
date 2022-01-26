import { Component, Input, OnInit } from '@angular/core';
import { ModalAdvisorsIdentity } from '../../modals/modal-advisors-identity/modal-advisors-identity.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAdvisorComponent } from '../../modals/delete-advisor/delete-advisor.component';
import { AdvisorsService } from 'src/app/services/advisors.service';

@Component({
  selector: 'app-advisors-identity',
  templateUrl: './advisors-identity.component.html',
  styleUrls: ['./advisors-identity.component.scss'],
})
export class AdvisorsIdentityComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private advisorService: AdvisorsService
  ) {}
  currentAdvisor: any = null;

  @Input()
  currentAdvisorId: number = 1;

  openModalUpdateAdvisor() {
    const dialogRef = this.dialog.open(ModalAdvisorsIdentity, {
      data: {
        currentAdvisor: this.currentAdvisor,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res === '' || res === undefined) {
        return;
      } else {
        res.id = this.currentAdvisorId;
        this.advisorService.updateAdvisor(res).subscribe();
      }
    });
  }

  deleteAdvisor() {
    const dialogRef = this.dialog.open(DeleteAdvisorComponent);
  }

  ngOnInit(): void {
    this.advisorService
      .getAdvisor(this.currentAdvisorId)
      .subscribe((res: any) => {
        this.currentAdvisor = res;
      });
  }
}
