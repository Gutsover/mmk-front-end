import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AdvisorsService } from 'src/app/services/advisors.service';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.scss'],
})
export class AdvisorsComponent implements OnInit {
  @Input()
  advisors: any;
  selectedItem: any = null;

  constructor(private advisorService: AdvisorsService) {}

  @Output()
  advisorUpdate: EventEmitter<any> = new EventEmitter();

  updateAdvisorInfo(id: any): void {
    console.log(id);
    this.advisorUpdate.emit(id);
    this.selectedItem = id;
  }

  ngOnInit(): void {
    this.advisorService.getAdvisors().subscribe((data) => {
      this.advisors = data;
    });
  }
}
