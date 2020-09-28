import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
})
export class NoticiasComponent implements OnInit {
  materias = [
    {
      titulo: 'CNJ da 24 hrs pra TJ explicar reeleição',
      resumo: 'Assista a matéria ',
      foto: 'materia1',
    },
    {
      titulo:
        'TJ-SP  reduz 90% multa devida a shopping por loja que fechou na pandemia',
      resumo:
        'O Tribunal de Justiça de SP ( TJSP)  decidiu reduzir em 90% o valor da multa devida por uma loja no shopping em Campinas. Continue Lendo..',
      foto: 'materia2',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
