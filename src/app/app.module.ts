import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProfilComponent } from './components/admin/add-profil/add-profil.component';
import { StatistiquesComponent } from './components/admin/statistiques/statistiques.component';
import { DetailsUserComponent } from './components/admin/details-user/details-user.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { UsersComponent } from './components/admin/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { TemplateComponent } from './components/template/template.component';
import {ChartModule} from 'angular-highcharts';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AchatsComponent } from './components/commercial/achats/achats.component';
import { VentesComponent } from './components/commercial/ventes/ventes.component';
import { EditAchatComponent } from './components/commercial/edit-achat/edit-achat.component';
import { DetailsAchatComponent } from './components/commercial/details-achat/details-achat.component';
import { ProfilsComponent } from './components/rh/profils/profils.component';
import { AddAchatComponent } from './components/commercial/add-achat/add-achat.component';
import { AddVenteComponent } from './components/commercial/add-vente/add-vente.component';
import { DetailsVenteComponent } from './components/commercial/details-vente/details-vente.component';
import { EditVenteComponent } from './components/commercial/edit-vente/edit-vente.component';
import { CongeComponent } from './components/rh/conge/conge.component';
import { AddCongeComponent } from './components/rh/add-conge/add-conge.component';
import { RecrutementsComponent } from './components/rh/recrutements/recrutements.component';
import { AddRecrutementComponent } from './components/rh/add-recrutement/add-recrutement.component';
import { AbsencesComponent } from './components/rh/absences/absences.component';
import { AddAbsencesComponent } from './components/rh/add-absences/add-absences.component';
import { FraisComponent } from './components/rh/frais/frais.component';
import { AddFraisComponent } from './components/rh/add-frais/add-frais.component';
import { PaiementsComponent } from './components/rh/paiements/paiements.component';
import { AddPaiementComponent } from './components/rh/add-paiement/add-paiement.component';
import { ImprimerAchatComponent } from './components/commercial/imprimer-achat/imprimer-achat.component';
@NgModule({
  declarations: [
    AppComponent,
    AddProfilComponent,
    StatistiquesComponent,
    DetailsUserComponent,
    EditUserComponent,
    UsersComponent,
    DashboardComponent,
    LoginComponent,
    TemplateComponent,
    AchatsComponent,
    VentesComponent,
    EditAchatComponent,
    DetailsAchatComponent,
    ProfilsComponent,
    AddAchatComponent,
    AddVenteComponent,
    DetailsVenteComponent,
    EditVenteComponent,
    CongeComponent,
    AddCongeComponent,
    RecrutementsComponent,
    AddRecrutementComponent,
    AbsencesComponent,
    AddAbsencesComponent,
    FraisComponent,
    AddFraisComponent,
    PaiementsComponent,
    AddPaiementComponent,
    ImprimerAchatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ChartModule, NgFlashMessagesModule.forRoot(), AngularFontAwesomeModule, HttpModule, FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
