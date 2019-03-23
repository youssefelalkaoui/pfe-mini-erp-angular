import { Component, OnInit } from '@angular/core';
import {DetailsApprovisionnement} from '../../../model/modele.detailsApprovisionnement';
import {ActivatedRoute, Router} from '@angular/router';
import {CommercialService} from '../../../services/commercial.service';
import {CommandeApprovisionnement} from '../../../model/modele.commandeApprovisionnement';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-imprimer-achat',
  templateUrl: './imprimer-achat.component.html',
  styleUrls: ['./imprimer-achat.component.css']
})
export class ImprimerAchatComponent implements OnInit {
  today: number = Date.now();
  idAchat: number;
  pageDetailsAchats: Array<any>;
  commandeApp: CommandeApprovisionnement = new CommandeApprovisionnement();
  detailsApp: DetailsApprovisionnement = new DetailsApprovisionnement();
  commandeId: number;
  constructor(public activatedRoute: ActivatedRoute,
              public commercialService: CommercialService,
              public router: Router) {
    this.idAchat = activatedRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.commercialService.getAchat(this.idAchat)
      .subscribe(data => {
        this.commandeApp = data;
      }, err => {
        console.log(err);
      });
    this.commercialService.getDetailsApp(this.idAchat)
      .subscribe(dt => {
        this.pageDetailsAchats = dt;
      }, err => {
        console.log(err);
      });
  }

  imprimer(id: number) {
    this.router.navigate(['imprimer-achat', id]);
  }
  print() {
    let data = document.getElementById('bon');
    html2canvas(data).then(canvas => {
      let imgWidth = 208;
      let pageHeight = 295;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('bon.pdf');
    });
  }
}
