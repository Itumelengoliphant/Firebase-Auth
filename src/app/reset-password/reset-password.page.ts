import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(private authService: AuthService, private router: Router, private alrtCtrl: AlertController) { }

  ngOnInit() {
  }

  async resetPassword(form): Promise<void>{
    this.authService.resetPassword(form.value.email).
    then(
     async () =>{
      const alert = await this.alrtCtrl.create({
        message: 'Check your email to reset password',
        buttons:[{text:'Ok',role:'cancel',handler:() =>{
          this.router.navigateByUrl('login');
        },},],
      });
      await alert.present();
    },
    async error => {
      const errorAlert = await this.alrtCtrl.create({
        message: error.message,
        buttons:[{text:'Ok',role:'cancel'}],
        
      });
      await errorAlert.present();
    }
    );
  }

}
