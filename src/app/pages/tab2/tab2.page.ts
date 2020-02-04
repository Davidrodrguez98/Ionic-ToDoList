import { Component } from '@angular/core';
import { ListaService } from '../../services/lista.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public listaService: ListaService) {}

}
