import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {AdminService} from '../../../services/admin.service';
import {Router} from '@angular/router';
import {Employe} from '../../../model/modele.employe';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  pageUsers: any;
  motCle = '';
  currentPage = 0;
  size = 4;
  pages: Array<number>;

  constructor(private http: Http, public adminService: AdminService, public router: Router) { }

  ngOnInit() {
    this.doSearch();
  }
  doSearch() {
    this.adminService.getUsers(this.motCle, this.currentPage, this.size)
      .subscribe(data => {
        console.log('data', data);
        this.pageUsers = data;
        this.pages = new Array(data.totalPages);
      }, err => {
        console.log(err);
      });
  }
  chercher() {
    this.doSearch();
  }
  gotoPage(i: number) {
    this.currentPage = i;
    this.doSearch();
  }
  onEditUser(id: number) {
    this.router.navigate(['edit-user', id]);
  }
  onDeleteUser(e: Employe) {
    const confirm = window.confirm('Etes-vous sûr ?');
    if (confirm === true) {
      this.adminService.deleteUser(e.idUtilisateur)
        .subscribe(data => {
          this.pageUsers.content.splice(
            this.pageUsers.content.indexOf(e), 1
          );
        }, err => {
          console.log(err);
        });
    }
  }
  getdetailsUser(id: number) {
    this.router.navigate(['details-user', id]);
  }
}
