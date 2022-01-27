import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-history-transactions',
  templateUrl: './history-transactions.component.html',
  styleUrls: ['./history-transactions.component.scss'],
})
export class HistoryTransactionsComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Historique des transactions',
          data: [
            1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09,
            0.34, 3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8,
            -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6,
            -29.4, -21.4, -2.4,
          ],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: -100,
                to: -46,
                color: '#F15B46',
              },
              {
                from: -45,
                to: 0,
                color: '#FEB019',
              },
            ],
          },
          columnWidth: '80%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        title: {
          text: 'Growth',
        },
        labels: {
          formatter: function (y: number) {
            return y.toFixed(0) + '%';
          },
        },
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2020-01-01',
          '2020-02-01',
          '2020-03-01',
          '2020-04-01',
          '2020-05-01',
          '2020-06-01',
          '2020-07-01',
          '2020-08-01',
          '2020-09-01',
          '2020-10-01',
          '2020-11-01',
          '2020-12-01',
          '2021-01-01',
          '2021-02-01',
          '2021-03-01',
          '2021-04-01',
          '2021-05-01',
          '2021-06-01',
          '2021-07-01',
          '2021-08-01',
          '2021-09-01',
          '2021-10-01',
          '2021-11-01',
          '2021-12-01',
          '2022-01-01',
        ],
        labels: {
          rotate: -90,
        },
      },
    };
  }

  // public validateOptions(options: ChartOptions): any {
  //   return (
  //     options?.series && options?.chart && options?.title && options?.xaxis
  //   );
  // }

  ngOnInit(): void {}
}
