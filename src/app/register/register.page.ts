import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService: AuthService,private router:Router,private alrtCtrl: AlertController) { }


  ngOnInit() {
  }

  async signUpUser(form): Promise<void>{
    this.authService.signUpUser(form.value.email, form.value.password).
    then(
      () =>{
        this.router.navigateByUrl('home');
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
