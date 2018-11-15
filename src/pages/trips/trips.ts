import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { TripDetailPage } from "../trip-detail/trip-detail";
import { CadastroEventoDao } from "../../dao/cadastroEvento-dao";

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage implements OnInit {
  eventos: any[] = []
  constructor(public nav: NavController, private cadastroEventoDao: CadastroEventoDao) {

  }

  ngOnInit(): void {
    this.cadastroEventoDao.getAll().then(
      response => {
        this.eventos = response
      }
    )
  }
  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, { id: id });
  }
}
