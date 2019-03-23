import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Employe} from '../model/modele.employe';
import {NgFlashMessageService} from 'ng-flash-messages';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  emp: Employe;
  // private emp: BehaviorSubject<Employe> = new BehaviorSubject(null);
  // dataList: Observable<Employe> = this.emp.asObservable();
  private _type = new BehaviorSubject(localStorage.getItem('type'));
  type = this._type.asObservable();
  private _connected = new BehaviorSubject(localStorage.getItem('connected'));
  connected = this._connected.asObservable();
  private _idUser = new BehaviorSubject(localStorage.getItem('idUser'));
  idUser = this._idUser.asObservable();
  // constructeur
  constructor(public http: Http, public router: Router, public flashMessage: NgFlashMessageService) {
  }
// se connecter
  getUser(username: string, password: string) {
    return this.http.get('http://localhost:8080/connect?login=' + username + '&password=' + password)
      .subscribe(data => {
        this.emp = data.json();
        this._type.next(this.emp.typeEmploye);
        this._connected.next('true');
        localStorage.setItem('connected', 'true');
        localStorage.setItem('type', this.emp.typeEmploye);
        localStorage.setItem('idUser', this.emp.idUtilisateur);
        // localStorage.setItem('nom', this.emp.getValue().nom);
        this.router.navigate(['/dashboard']);
      }, err => {
        this.flashMessage.showFlashMessage({
          messages: ['login ou mot de passe incorrecte !'],
          dismissible: true,
          timeout: 2000,
          type: 'danger'
        });
      });
  }
// se déconnecter
  logout() {
    localStorage.removeItem('type');
    localStorage.clear();
    this._type.next(null);
    this._connected.next(null);
    this._idUser.next(null);
    this.router.navigate(['/login']);

  }
}
