import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CommercialService} from '../../services/commercial.service';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  type: string;
  achatsEnCours: string;
  achatsRealises: string;
  ventesEnCours: string;
  ventesRealisees: string;
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
  constructor(public authService: AuthService, public commercialService: CommercialService) { }

  ngOnInit() {
    this.authService.type.subscribe(value => this.type = value);
    this.commercialService.getVentesEnCours().subscribe(value => this.ventesEnCours = value);
    this.commercialService.getVentesRealises().subscribe(value => this.ventesRealisees = value);
    this.commercialService.getAchatsEnCours().subscribe(value => this.achatsEnCours = value);
    this.commercialService.getAchatsRealises().subscribe(value => this.achatsRealises = value);

  }
}
