import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {CommandeApprovisionnement} from '../model/modele.commandeApprovisionnement';
import {DetailsApprovisionnement} from '../model/modele.detailsApprovisionnement';
import {CommandeVente} from '../model/modele.commandeVente';
import {DetailsVente} from '../model/modele.detailsVente';
import {Conge} from '../model/modele.conge';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {
  constructor(public http: Http) {
  }
  getAchatsEnCours() {
    return this.http.get('http://localhost:8080/getCountAchatsEnCours')
      .pipe(map(resp => resp.json()));
  }

  getAchatsRealises() {
    return this.http.get('http://localhost:8080/getCountAchats')
      .pipe(map(resp => resp.json()));
  }

  getVentesEnCours() {
    return this.http.get('http://localhost:8080/getCountVentesEnCours')
      .pipe(map(resp => resp.json()));
  }

  getVentesRealises() {
    return this.http.get('http://localhost:8080/getCountVentes')
      .pipe(map(resp => resp.json()));
  }
//Achats
  getAchats(motCle: string, page: number, size: number) {
    return this.http.get('http://localhost:8080/chercherAchats?mc=' + motCle + '&size=' + size + '&page=' + page)
      .pipe(map(resp => resp.json()));
  }
  getAchat(id: number) {
    return this.http.get('http://localhost:8080/achat/' + id)
      .pipe(map(resp => resp.json()));
  }
  getProduits() {
    return this.http.get('http://localhost:8080/produits')
      .pipe(map(resp => resp.json()));
  }

getFournisseurs() {
  return this.http.get('http://localhost:8080/fournisseurs')
    .pipe(map(resp => resp.json()));
}
  getDetailsApp(id: number) {
    return this.http.get('http://localhost:8080/detailsAchat?id=' + id)
      .pipe(map(resp => resp.json()));
  }
  updateAchat(commandeApp: CommandeApprovisionnement) {
      return this.http.put('http://localhost:8080/edit-rh/' + commandeApp.idApprovisionnement, commandeApp)
        .pipe(map(resp => resp.json()));
  }
  deleteAchat(id: number) {
    return this.http.delete('http://localhost:8080/deleteAchat/' + id)
      .pipe(map(resp => resp.json()));
  }
  addAchats(commandeApp: CommandeApprovisionnement) {
    return this.http.post('http://localhost:8080/add_achat/' + commandeApp.id_utilisateur + '/' + commandeApp.idFournisseur , commandeApp)
      .pipe(map(resp => resp.json()));
  }
  addDetailsAchat(detailsApp: DetailsApprovisionnement) {
      return this.http.post('http://localhost:8080/addDetailsAchat/' + detailsApp.commandeId + '/' + detailsApp.produitId , detailsApp)
        .pipe(map(resp => resp.json()));
    }
    acceptAchat(id: number) {
      return this.http.get('http://localhost:8080/accept-achat?id=' + id)
        .pipe(map(resp => resp.json()));
    }
//Ventes
  getVentes(motCle: string, page: number, size: number) {
    return this.http.get('http://localhost:8080/chercherVentes?mc=' + motCle + '&size=' + size + '&page=' + page)
      .pipe(map(resp => resp.json()));
  }
  getVente(id: number) {
    return this.http.get('http://localhost:8080/vente/' + id)
      .pipe(map(resp => resp.json()));
  }
  getDetailsVente(id: number) {
    return this.http.get('http://localhost:8080/detailsVente?id=' + id)
      .pipe(map(resp => resp.json()));
  }
  updateVente(commandeVente: CommandeVente) {
    return this.http.put('http://localhost:8080/edit-vente/' + commandeVente.idVente, commandeVente)
      .pipe(map(resp => resp.json()));
  }
  deleteVente(id: number) {
    return this.http.delete('http://localhost:8080/deleteVente/' + id)
      .pipe(map(resp => resp.json()));
  }
  addVente(commandeVente: CommandeVente) {
    return this.http.post('http://localhost:8080/add_vente/' + commandeVente.id_utilisateur , commandeVente)
      .pipe(map(resp => resp.json()));
  }
  addDetailsVente(detailsVente: DetailsVente) {
    return this.http.post('http://localhost:8080/addDetailsVente/' + detailsVente.commandeId + '/' + detailsVente.produitId , detailsVente)
      .pipe(map(resp => resp.json()));
  }
}

