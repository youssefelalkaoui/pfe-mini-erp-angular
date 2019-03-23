import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Employe} from '../../../model/modele.employe';
import {AdminService} from '../../../services/admin.service';
import {Conge} from '../../../model/modele.conge';
import {NgFlashMessageService} from 'ng-flash-messages';
import {RhService} from '../../../services/rh.service';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.css']
})
export class AddCongeComponent implements OnInit {
  pageDetailsConges: Array<any>;
  idUser: number;
  employe: Employe = new Employe();
  conge: Conge = new Conge();

  constructor(public activatedRoute: ActivatedRoute,
              public adminService: AdminService,
              public rhService: RhService,
              public router: Router,
  public flashMessage: NgFlashMessageService) {
    this.idUser = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.adminService.getUser(this.idUser)
      .subscribe(data => {
        console.log(data);

        this.employe = data;
      }, err => {
        console.log(err);
      });
    this.rhService.getConge(this.idUser)
      .subscribe(dt => {
        console.log('conge : ', dt);
        this.pageDetailsConges = dt;
      }, err => {
        console.log(err);
      });
  }
  onEditConge(id: number) {
    this.router.navigate(['edit-user', id]);
  }
  onDeleteConge(id: number) {
    const confirm = window.confirm('Etes-vous sûr ?');
    if (confirm === true) {
      this.adminService.deleteConge(id)
        .subscribe(data => {
          this.ngOnInit();
        }, err => {
          console.log(err);
        });
    }
  }
  addConge() {
    this.conge.id_utilisateur = this.employe.idUtilisateur;
    this.rhService.addConge(this.conge)
      .subscribe(data => {
        this.rhService.getConge(this.idUser)
          .subscribe(dt => {
            this.pageDetailsConges = dt;
          }, err => {
            console.log(err);
          });
        this.flashMessage.showFlashMessage({
          messages: ['Félicitations, le congé ont été ajouté avec succées'],
          dismissible: true,
          timeout: 2000,
          type: 'success'
        });
      }, err => {
        console.log(err);
      });
  }
}
