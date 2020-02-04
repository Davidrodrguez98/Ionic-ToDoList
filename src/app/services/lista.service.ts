import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
    // const lista1 = new Lista('Recolectar piedras del infinito');
    // const lista2 = new Lista('Matar Vengadores');

    // this.listas.push(lista1, lista2);
  }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  borrarLista(lista: Lista) {
    this.listas = this.listas.filter( listaData => {
      return listaData.id !== lista.id;
    });
    this.guardarStorage();
  }

  obtenerLista(id: string | number) {
    id = Number(id);
    return this.listas.find( listaData => {
      return listaData.id === id;
    });
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }
}
