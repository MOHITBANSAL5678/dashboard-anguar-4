import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  breadcrumbsList=['Dashboard','Data'];
  
  constructor() {

   }

  ngOnInit() {
  }
  public chartType:string = 'bar';

  public chartDatasets:Array<any> = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: ' First dataset'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: ' Second dataset'}
  ];

  public chartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  public chartColors:Array<any> = [
      {
          backgroundColor: 'rgba(220,220,220,0.2)',
          borderColor: 'rgba(220,220,220,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(220,220,220,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(220,220,220,1)'
      },
      {
          backgroundColor: 'rgba(151,187,205,0.2)',
          borderColor: 'rgba(151,187,205,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(151,187,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(151,187,205,1)'
      }
  ];

  public chartOptions:any = {
      responsive: true
  };

  
}
