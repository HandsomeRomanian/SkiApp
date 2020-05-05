import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    public toastController: ToastController,
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * Manages an error from a HTTP response
   * @param err Error message
   */
  public async manageError(err) {

    console.table(err)

    let toast = await this.toastController.create({
      message: 'Une erreur est survenue.',
      duration: 2000
    });
    if (err.status == 504) {
      toast = await this.toastController.create({
        message: 'Une erreur est survenu lors de la connection au serveur.',
        duration: 3000,
        color: "danger"
      });
    }
    else if (err.status == 500) {
      toast = await this.toastController.create({
        message: 'Une erreur s\'est produite lors du traitement de la demande par le serveur.',
        duration: 3000,
        color: "danger"
      });
    }
    else if (err.status == 400) {
      if (err.error == "InvalidToken" || err.error == "InvalidatedToken") {
        toast = await this.toastController.create({
          message: 'Votre connexion n\'est plus valide, veuillez vous reconnecter.',
          duration: 3000,
          color: "warning"
        });
        this.authService.logout();
        this.router.navigate(["/auth/login"]);
      }
      else if (err.error == "InvalidObject") {

      }
      else if (err.error == "InexistentUser") {
        toast = await this.toastController.create({
          message: 'L\'identifiant que vous avez entre n\'existe pas.',
          duration: 3000,
          color: "danger"
        });
      }
      else if (err.error == "InvalidLogin") {

        toast = await this.toastController.create({
          message: 'Les informations de connection que vous avez fournis sont invalides.',
          duration: 3000,
          color: "danger"
        });
      }
      else if (err.error == "NotAuthorized") {

        toast = await this.toastController.create({
          message: 'Vous n\'avez pas l\'authorisation d\'effectuer cette action.',
          duration: 3000,
          color: "danger"
        });
      }
      else if (err.error == "InvalidOldGroup") {

        toast = await this.toastController.create({
          message: 'Le group duquel vous essayer de retirer un eleve n\'existe pas.',
          duration: 3000,
          color: "danger"
        });
      }
      else if (err.error == "InvalidNewGroup") {

        toast = await this.toastController.create({
          message: 'Le group dans lequel vous essayez de deplacer cet eleve n\'existe pas',
          duration: 3000,
          color: "danger"
        });
      }
      else if (err.error == "InvalidStudentGroup") {

        toast = await this.toastController.create({
          message: 'Cet etudiant n\'est pas inscrit dans le groupe fournis.',
          duration: 3000,
          color: "danger"
        });
      }
      else if (err.error == "GroupFull") {

        toast = await this.toastController.create({
          message: 'Le group dans lequel vous essayez de deplacer cet eleve est deja plein.',
          duration: 3000,
          color: "danger"
        });
      }
    }
    toast.present();
  }
}
