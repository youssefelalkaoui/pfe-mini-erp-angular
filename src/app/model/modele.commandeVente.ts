export class CommandeVente {
  idVente: number;
  dateCommande: Date;
  etatCommande = 'en cours';
  etatFacture = 'non paye';
  id_utilisateur: number;
  nomClient: string;
  prenomClient: string;
  tel: string;
  adresseLivraison: string;
}
