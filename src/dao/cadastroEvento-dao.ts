import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class CadastroEventoDao {
    constructor(private storage: Storage) {
        this.storage = new Storage({
            name: "bdDamian",
            storeName: "evento"
        })
    }

    create(key: string, evento: any) {
        return this.storage.set(key, evento)
    }

    getAll() {
        let eventos: any[] = []
        return this.storage.forEach(evento => {
            eventos.push(evento)
        }).then(() => {
            return eventos
        })
    }

}