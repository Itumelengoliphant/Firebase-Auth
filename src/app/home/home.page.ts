import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService: AuthService,private router:Router,private alrtCtrl: AlertController) { }

    async logOut(form): Promise<void>{
      this.authService.logoutUser().
      then(
        () =>{
          this.router.navigateByUrl('login');
        },
        async error => {
          const alert = await this.alrtCtrl.create({
            message: error.message,
            buttons:[{text:'Ok',role:'cancel'}]
          });
          await alert.present();
        }
      );
    }
  }


