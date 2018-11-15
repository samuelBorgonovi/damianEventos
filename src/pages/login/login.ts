import { Component } from "@angular/core";
import { NavController, AlertController, ToastController, MenuController } from "ionic-angular";
import { HomePage } from "../home/home";
import { RegisterPage } from "../register/register";
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioDao } from "../../dao/usuario-dao";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm: any;
  messageEmail = ""
  messagePassword = "";
  errorEmail = false;
  errorPassword = false;

  usuario: any = {
    email: "",
    name: "",
    senha: ""
  }

  constructor(public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController, public formBuilder: FormBuilder,
    private usuarioDao: UsuarioDao) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),
      Validators.required])],
    });
  }
  //this.menu.swipeEnable(false);

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    let { email, password } = this.loginForm.controls;

    if (!this.loginForm.valid) {
      if (!email.valid) {
        this.errorEmail = true;
        this.messageEmail = "Ops! Email inválido";
      } else {
        this.messageEmail = "";
      }

      if (!password.valid) {
        this.errorPassword = true;
        this.messagePassword = "A senha precisa ter de 6 a 20 caracteres"
      } else {
        this.messagePassword = "";
      }
      alert("linha58")
    }
    else {
      if (this.usuarioDao.login(email, password)) {
        this.nav.setRoot(HomePage);
      } else {
        this.messagePassword = "Usuario ou senha não cadastrados"
      }
    }
    //
  }
  //

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
