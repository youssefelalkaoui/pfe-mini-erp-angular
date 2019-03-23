import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AddProfilComponent} from './components/admin/add-profil/add-profil.component';
import {UsersComponent} from './components/admin/users/users.component';
import {EditUserComponent} from './components/admin/edit-user/edit-user.component';
import {DetailsUserComponent} from './components/admin/details-user/details-user.component';
import {StatistiquesComponent} from './components/admin/statistiques/statistiques.component';
import {LoginComponent} from './components/login/login.component';
import {AchatsComponent} from './components/commercial/achats/achats.component';
import {EditAchatComponent} from './components/commercial/edit-achat/edit-achat.component';
import {DetailsAchatComponent} from './components/commercial/details-achat/details-achat.component';
import {ProfilsComponent} from './components/rh/profils/profils.component';
import {AddAchatComponent} from './components/commercial/add-achat/add-achat.component';
import {VentesComponent} from './components/commercial/ventes/ventes.component';
import {AddVenteComponent} from './components/commercial/add-vente/add-vente.component';
import {EditVenteComponent} from './components/commercial/edit-vente/edit-vente.component';
import {DetailsVenteComponent} from './components/commercial/details-vente/details-vente.component';
import {AbsencesComponent} from './components/rh/absences/absences.component';
import {CongeComponent} from './components/rh/conge/conge.component';
import {RecrutementsComponent} from './components/rh/recrutements/recrutements.component';
import {PaiementsComponent} from './components/rh/paiements/paiements.component';
import {AddCongeComponent} from './components/rh/add-conge/add-conge.component';
import {AddAbsencesComponent} from './components/rh/add-absences/add-absences.component';
import {AddRecrutementComponent} from './components/rh/add-recrutement/add-recrutement.component';
import {FraisComponent} from './components/rh/frais/frais.component';
import {AddFraisComponent} from './components/rh/add-frais/add-frais.component';
import {AddPaiementComponent} from './components/rh/add-paiement/add-paiement.component';
import {ImprimerAchatComponent} from './components/commercial/imprimer-achat/imprimer-achat.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'add-profil', component: AddProfilComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuard] },
  { path: 'details-user/:id', component: DetailsUserComponent, canActivate: [AuthGuard] },
  { path: 'admin-statistiques', component: StatistiquesComponent, canActivate: [AuthGuard] },
  //achats
  { path: 'achats', component: AchatsComponent, canActivate: [AuthGuard] },
  { path: 'add-achat', component: AddAchatComponent, canActivate: [AuthGuard] },
  { path: 'edit-achat/:id', component: EditAchatComponent, canActivate: [AuthGuard] },
  { path: 'details-achat/:id', component: DetailsAchatComponent, canActivate: [AuthGuard] },
  { path: 'imprimer-achat/:id', component: ImprimerAchatComponent, canActivate: [AuthGuard] },

  //ventes
  { path: 'ventes', component: VentesComponent, canActivate: [AuthGuard] },
  { path: 'add-vente', component: AddVenteComponent, canActivate: [AuthGuard] },
  { path: 'edit-vente/:id', component: EditVenteComponent, canActivate: [AuthGuard] },
  { path: 'details-vente/:id', component: DetailsVenteComponent, canActivate: [AuthGuard] },
  //rh
  { path: 'profils', component: ProfilsComponent, canActivate: [AuthGuard] },
  { path: 'conge', component: CongeComponent, canActivate: [AuthGuard] },
  { path: 'add-conge/:id', component: AddCongeComponent, canActivate: [AuthGuard] },
  { path: 'absences', component: AbsencesComponent, canActivate: [AuthGuard] },
  { path: 'add-absences', component: AddAbsencesComponent, canActivate: [AuthGuard] },
  { path: 'paiements', component: PaiementsComponent, canActivate: [AuthGuard] },
  { path: 'add-paiement/:id', component: AddPaiementComponent, canActivate: [AuthGuard] },
  { path: 'recrutements', component: RecrutementsComponent, canActivate: [AuthGuard] },
  { path: 'add-recrutement', component: AddRecrutementComponent, canActivate: [AuthGuard] },
  { path: 'frais', component: FraisComponent, canActivate: [AuthGuard] },
  { path: 'add-frais', component: AddFraisComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
