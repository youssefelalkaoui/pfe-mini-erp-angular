import { Component, OnInit } from '@angular/core';
import {CommercialService} from '../../../services/commercial.service';
import {NgFlashMessageService} from 'ng-flash-messages';
import {ActivatedRoute, Router} from '@angular/router';
import {CommandeVente} from '../../../model/modele.commandeVente';
import {DetailsVente} from '../../../model/modele.detailsVente';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-details-vente',
  templateUrl: './details-vente.component.html',
  styleUrls: ['./details-vente.component.css']
})
export class DetailsVenteComponent implements OnInit {
  idVente: number;
  pageDetailsVentes: Array<any>;
  commandeVente: CommandeVente = new CommandeVente();
  produits: any;
  detailsVente: DetailsVente = new DetailsVente();
  commandeId: number;
  constructor(public activatedRoute: ActivatedRoute,
              public commercialService: CommercialService,
              public router: Router,
              public flashMessage: NgFlashMessageService) {
    this.idVente = activatedRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.commercialService.getVente(this.idVente)
      .subscribe(data => {
        this.commandeVente = data;
      }, err => {
        console.log(err);
      });
    this.commercialService.getProduits()
      .subscribe(produits => {
        this.produits = produits;
      }, err => {
        console.log(err);
      });
    this.commercialService.getDetailsVente(this.idVente)
      .subscribe(dt => {
        this.pageDetailsVentes = dt;
      }, err => {
        console.log(err);
      });
  }
  onEditVente(id: number) {
    this.router.navigate(['edit-vente', id]);
  }
  onDeleteVente(v: CommandeVente) {
    const confirm = window.confirm('Etes-vous sûr ?');
    if (confirm === true) {
      this.commercialService.deleteVente(v.idVente)
        .subscribe(data => {
          this.router.navigate(['/ventes']);
        }, err => {
          console.log(err);
        });
    }
  }
  addDetails() {
    this.detailsVente.commandeId = this.commandeVente.idVente;
    this.commercialService.addDetailsVente(this.detailsVente)
      .subscribe(data => {
        this.commercialService.getDetailsVente(this.idVente)
          .subscribe(dt => {
            this.pageDetailsVentes = dt;
          }, err => {
            console.log(err);
          });
        this.flashMessage.showFlashMessage({
          messages: ['Félicitations, les détails ont été ajoutés avec succées'],
          dismissible: true,
          timeout: 2000,
          type: 'success'
        });
      }, err => {
        console.log(err);
      });
  }
  public imprimer() {
      let data = document.getElementById('contentToConvert');
      html2canvas(data).then(canvas => {
        let imgWidth = 208;
        let pageHeight = 295;
        let imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('p', 'mm', 'a4');
        let position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('MYPdf.pdf');
      });
    }
  }

