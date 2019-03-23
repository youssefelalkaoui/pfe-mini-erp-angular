import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Conge} from '../model/modele.conge';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RhService {
  constructor(public http: Http) {
}
  addConge(conge: Conge) {
    return this.http.post('http://localhost:8080/add_conge/' + conge.id_utilisateur, conge)
      .pipe(map(resp => resp.json()));
  }
  getConge(id: number) {
    return this.http.get('http://localhost:8080/conges/' + id)
      .pipe(map(resp => resp.json()));
  }
}
