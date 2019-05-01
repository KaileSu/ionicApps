import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
// npm install @types@/chart.js --save


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  numList = [];
  labelList = [];
  @ViewChild('healthCanvas') healthCanvas;
  chart: any;
  options = {
    scales: {
        yAxes: [{
            ticks: {
              beginAtZero: true
            }
        }]
    }
};

  constructor() { }

  ngOnInit() {
    this.chart = new Chart(this.healthCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.labelList,
        datasets: [{
          label: '# of heart rate',
          data: this.numList
        }]
      },
      options: this.options
    });
  }
   
  numPush(num, lab) {
    this.labelList.push(lab);
    this.numList.push(num);
    this.chart.data.labels = this.labelList;
    this.chart.data.datasets[0].data = this.numList;
    this.chart.update();
  }
}
