import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Employe} from '../model/modele.employe';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: Http) {
  }

  addUser(employe: Employe) {
    if (employe.typeEmploye == 'admin') {
      return this.http.post('http://localhost:8080/add_admin', employe)
        .pipe(map(resp => resp.json()));
    } else
    if (employe.typeEmploye == 'commercial') {
      return this.http.post('http://localhost:8080/add_commercial', employe)
        .pipe(map(resp => resp.json()));
    } else
    if (employe.typeEmploye == 'rh') {
      return this.http.post('http://localhost:8080/add_rh', employe)
        .pipe(map(resp => resp.json()));
    }
  }
  getUsers(motCle: string, page: number, size: number) {
    return this.http.get('http://localhost:8080/chercherUsers?mc=' + motCle + '&size=' + size + '&page=' + page)
      .pipe(map(resp => resp.json()));
  }
  getUser(id: number) {
    return this.http.get('http://localhost:8080/users/' + id)
      .pipe(map(resp => resp.json()));
  }
  updateUser(employe: Employe) {
    if (employe.typeEmploye == 'admin') {
      return this.http.put('http://localhost:8080/edit-admin/' + employe.idUtilisateur, employe)
        .pipe(map(resp => resp.json()));
    } else
    if (employe.typeEmploye == 'commercial') {
      return this.http.put('http://localhost:8080/edit-commercial/' + employe.idUtilisateur, employe)
        .pipe(map(resp => resp.json()));
    } else
    if (employe.typeEmploye == 'rh') {
      return this.http.put('http://localhost:8080/edit-rh/' + employe.idUtilisateur, employe)
        .pipe(map(resp => resp.json()));
    }
  }
  deleteUser(id: number) {
    return this.http.delete('http://localhost:8080/user/' + id)
      .pipe(map(resp => resp.json()));
  }
  deleteConge(id: number) {
    return this.http.delete('http://localhost:8080/conge/' + id)
      .pipe(map(resp => resp.json()));
  }
}
