import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  listBtn = [
    { label: 'Consulta 1º Grau - eSaj', link: ''},
    { label: 'Consulta 2º Grau - eSaj', link: ''},
    { label: 'Consulta Trabalhista', link: ''},
    { label: 'PJe Trabalhista', link: ''},
    { label: 'Justiça Federal - Varas', link: ''},
    { label: 'Justiça Federal - PJe', link: ''},
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirect(item){
    this.route.navigate(['/meus-processos']);
  }
}
