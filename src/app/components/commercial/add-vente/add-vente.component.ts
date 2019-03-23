import { Component, OnInit } from '@angular/core';
import {CommercialService} from '../../../services/commercial.service';
import {NgFlashMessageService} from 'ng-flash-messages';
import {ActivatedRoute, Router} from '@angular/router';
import {CommandeVente} from '../../../model/modele.commandeVente';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-add-vente',
  templateUrl: './add-vente.component.html',
  styleUrls: ['./add-vente.component.css']
})
export class AddVenteComponent implements OnInit {
  commandeVente: CommandeVente = new CommandeVente();
  produits: any;
  idUser: any;
  constructor(
    public authService: AuthService,
    public activatedRoute: ActivatedRoute,
              public commercialService: CommercialService,
              public router: Router,
              public flashMessage: NgFlashMessageService) { }

  ngOnInit() {
    this.authService.idUser.subscribe(value => this.idUser = value);
  }
  addVente() {
    this.commandeVente.id_utilisateur = Number(this.idUser);
    console.log('commande vente', this.commandeVente);
    this.commercialService.addVente(this.commandeVente)
      .subscribe(data => {
        this.flashMessage.showFlashMessage({
          messages: ['Félicitations, la commande a été crée avec succées'],
          dismissible: true,
          timeout: 2000,
          type: 'success'
        });
      }, err => {
        console.log(err);
      });
  }
}
