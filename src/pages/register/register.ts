import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { HomePage } from "../home/home";
import { UsuarioDao } from "../../dao/usuario-dao";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  usuario: any = {
    email: "",
    name: "",
    senha: ""
  }
  constructor(public nav: NavController, private usuarioDao: UsuarioDao) {
  }

  // register and go to home page
  register() {
    this.usuarioDao.create(new Date().toISOString(), this.usuario).then(
      () => {
        this.nav.setRoot(HomePage);
      }
    )
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
