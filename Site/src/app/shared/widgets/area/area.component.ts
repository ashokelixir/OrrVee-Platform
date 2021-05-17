import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Total No. Of Employee tested'
      },
      subtitle: {
        text: ''
      },
      tooltip: {
        split: true,
        valueSuffix: 'employees'
      },
      xAxis: {
        type:'datetime',
        dateTimeLabeFormat:{
          day: '%e/ %b',
          month: '%b \'%y'
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,        
        csv: {
          itemDelimiter: ';'
        }
      },
      series: this.data
    };

    HC_exporting(Highcharts);
    HC_exportData(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
