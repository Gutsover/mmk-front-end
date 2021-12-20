
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {

  today = new Date().toLocaleDateString();
  time!: string;
  
  constructor() {

    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
   }, 1000);

  }

  ngOnInit(): void {}
}
