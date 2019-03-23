import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommercialService} from '../../../services/commercial.service';
import {NgFlashMessageService} from 'ng-flash-messages';
import {CommandeApprovisionnement} from '../../../model/modele.commandeApprovisionnement';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-add-achat',
  templateUrl: './add-achat.component.html',
  styleUrls: ['./add-achat.component.css']
})
export class AddAchatComponent implements OnInit {
  commandeApp: CommandeApprovisionnement = new CommandeApprovisionnement();
  fournisseurs: any;
  idUser: any;
  constructor(
    public authService: AuthService,
    public activatedRoute: ActivatedRoute,
              public commercialService: CommercialService,
              public router: Router,
              public flashMessage: NgFlashMessageService) { }

  ngOnInit() {
    this.authService.idUser.subscribe(value => this.idUser = value);
    this.commercialService.getFournisseurs()
      .subscribe(data => {
        console.log('commande prd', data);
        this.fournisseurs = data;
      }, err => {
        console.log(err);
      });
  }
addAchat() {
    this.commandeApp.id_utilisateur = Number(this.idUser);
  console.log('commande App', this.commandeApp);
  this.commercialService.addAchats(this.commandeApp)
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
