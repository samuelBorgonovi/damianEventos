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

    login(usuario: any) {
        let user = {}
        return this.storage.forEach(dbuser => {
            if (usuario.login == dbuser.login && usuario.senha == dbuser.senha) {
                user = usuario
            }
        }).then(() => {
            return user
        })
    }
}