import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class UsuarioDao {

    constructor(private storage: Storage) {
        this.storage = new Storage({
            name: "bdDamian",
            storeName: "usuario"
        })
    }

    get() {
        let user = {}
        return this.storage.forEach(usuario => {
            user = usuario
        }).then(() => {
            return user
        })
    }

    create(key: string, usuario: any) {
        return this.storage.set(key, usuario)
    }

    login(email,password) {
        let user = {}
        return this.storage.forEach(dbuser => {
            if (email == dbuser.login && password == dbuser.senha) {
                return true;
            }
        });
    }
}