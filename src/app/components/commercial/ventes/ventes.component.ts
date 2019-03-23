import { Component, OnInit } from '@angular/core';
import {CommercialService} from '../../../services/commercial.service';
import {CommandeVente} from '../../../model/modele.commandeVente';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent implements OnInit {
  pageVentes: any;
  motCle = '';
  currentPage = 0;
  size = 4;
  pages: Array<number>;

  constructor(private http: Http, public commercialService: CommercialService, public router: Router) { }

  ngOnInit() {
    this.doSearch();
  }
  doSearch() {
    console.log('data 1');
    this.commercialService.getVentes(this.motCle, this.currentPage, this.size)
      .subscribe(data => {
        this.pageVentes = data;
        this.pages = new Array(data.totalPages);
      }, err => {
        console.log(err);
      });
  }
  chercher() {
    this.doSearch();
  }
  gotoPage(i: number) {
    this.currentPage = i;
    this.doSearch();
  }


  onEditVente(id: number) {
    this.router.navigate(['edit-vente', id]);
  }
  onDeleteVente(v: CommandeVente) {
    const confirm = window.confirm('Etes-vous sûr ?');
    if (confirm === true) {
      this.commercialService.deleteVente(v.idVente)
        .subscribe(data => {
          this.pageVentes.content.splice(
            this.pageVentes.content.indexOf(v), 1
          );
        }, err => {
          console.log(err);
        });
    }
  }
  getdetailsVente(id: number) {
    this.router.navigate(['details-vente', id]);
  }
}
