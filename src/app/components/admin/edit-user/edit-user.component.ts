import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Employe} from '../../../model/modele.employe';
import {AdminService} from '../../../services/admin.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  idUser: number;
  employe: Employe = new Employe();
  constructor(public activatedRoute: ActivatedRoute,
              public adminService: AdminService,
              public router: Router) {
    this.idUser = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.adminService.getUser(this.idUser)
      .subscribe(data => {
        this.employe = data;
      }, err => {
        console.log(err);
      });
  }
  private dateChanged(newDate) {
    this.employe.dateNaissance = new Date(newDate);
  }


  updateUser() {
    this.adminService.updateUser(this.employe)
      .subscribe(data => {
        console.log(data);
        alert('Mise à jour effectuée');
        this.router.navigate(['users']);
      }, err => {
        console.log(err);
        alert('Erreur');

      });
  }
}
