import { Component } from '@angular/core';
import {Employe} from '../../../model/modele.employe';
import {AdminService} from '../../../services/admin.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent {
  selectedFile: File = null;
  employe: Employe = new Employe();
  constructor (public adminService: AdminService, public flashMessage: NgFlashMessageService)  { }

  onSave() {
    this.adminService.addUser(this.employe)
      .subscribe(data => {
        this.employe = data;
        this.flashMessage.showFlashMessage({
          messages: ['Félicitations, le profil a été crée avec succées'],
          dismissible: true,
          timeout: 2000,
          type: 'success'
        });
      }, err => {
        console.log(err);
      });
  }
}
