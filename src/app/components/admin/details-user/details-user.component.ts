import { Component, OnInit } from '@angular/core';
import {Employe} from '../../../model/modele.employe';
import {AdminService} from '../../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
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
  onEditUser(id: number) {
    this.router.navigate(['edit-user', id]);
  }
  onDeleteUser(e: Employe) {
    const confirm = window.confirm('Etes-vous sûr ?');
    if (confirm === true) {
      this.adminService.deleteUser(e.idUtilisateur)
        .subscribe(data => {
          this.router.navigate(['/users']);
        }, err => {
          console.log(err);
        });
    }
  }
}
