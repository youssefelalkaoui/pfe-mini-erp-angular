import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent {

  ventes = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Statistiques des ventes',
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    credits: {
      enabled: false
    },
    series: [{
      type: 'column',
      name: 'Variations',
      data: [10, 20, 30, 40, 50, 70, 10, 50, 90, 60, 40, 88],
      color: 'orange'
    }]
  });
  achats = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Statistiques des achats',
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    credits: {
      enabled: false
    },
    series: [{
      type: 'line',
      name: 'Variations',
      data: [10, 20, 30, 40, 50, 70, 10, 50, 90, 60, 40, 88],
      color: 'green'
    }]
  });
}

