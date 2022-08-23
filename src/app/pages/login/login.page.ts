import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_user: string = '';
  mdl_pass: string = '';

  constructor(private router: Router,
    private alertController: AlertController, 
    private toastController: ToastController,
    private db: DbService ) { }

  ngOnInit() {
  }

  ingresar() {
    if(!this.db.validarRuta(this.mdl_user, this.mdl_pass)){
      this.presentToast();
    }
  }
  async mostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'información',
      message: 'Credenciales inválidas',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o Clave incorrecta',
      duration: 2000
    });
    toast.present();
  }
}