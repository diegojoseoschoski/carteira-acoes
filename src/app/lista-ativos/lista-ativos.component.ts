import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-ativos',
  templateUrl: './lista-ativos.component.html',
  styleUrls: ['./lista-ativos.component.css']
})
export class ListaAtivosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  share() {
    window.alert("Action fired");
  }
}
