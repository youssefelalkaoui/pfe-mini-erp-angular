import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {CommercialService} from '../../../services/commercial.service';
import {CommandeApprovisionnement} from '../../../model/modele.commandeApprovisionnement';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit {

  pageAchats: any;
  motCle = '';
  currentPage = 0;
  size = 4;
  pages: Array<number>;

  constructor(private http: Http, public commercialService: CommercialService, public router: Router) { }

  ngOnInit() {
    this.doSearch();
  }
  doSearch() {
    this.commercialService.getAchats(this.motCle, this.currentPage, this.size)
      .subscribe(data => {
        this.pageAchats = data;
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


  onEditAchat(id: number) {
    this.router.navigate(['edit-achat', id]);
  }
  onDeleteAchat(e: CommandeApprovisionnement) {
    const confirm = window.confirm('Etes-vous sûr ?');
    if (confirm === true) {
      this.commercialService.deleteAchat(e.idApprovisionnement)
        .subscribe(data => {
          this.pageAchats.content.splice(
            this.pageAchats.content.indexOf(e), 1
          );
        }, err => {
          console.log(err);
        });
    }
  }
  getdetailsAchat(id: number) {
    this.router.navigate(['details-achat', id]);
  }
}
