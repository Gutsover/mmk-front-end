import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-history-transactions',
  templateUrl: './history-transactions.component.html',
  styleUrls: ['./history-transactions.component.scss'],
})
export class HistoryTransactionsComponent implements OnInit {
  @ViewChild('chart')
  chart: ChartComponent = new ChartComponent();
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Historigramme',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      title: {
        text: 'Historique des transactions',
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
  }

  ngOnInit(): void {}
}
