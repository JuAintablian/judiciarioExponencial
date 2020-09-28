import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-processos',
  templateUrl: './meus-processos.component.html',
  styleUrls: ['./meus-processos.component.css'],
})
export class MeusProcessosComponent implements OnInit {
  processos = [
    {
      numero: '123456789-0',
      local: '3º CAMARA CIVIL',
      classe: 'PROCEDIMENTO COMUM',
      data: '20/09/2020',
      status: 'BAIXA DEFINITIVA',
    },
    {
      numero: '123456789-0',
      local: '4º VARA FAZENDA PUBLICA',
      classe: 'APELAÇÃO',
      data: '20/09/2020',
      status: 'DECORRIDO DO PRAZO DE 30 DIAS',
    },
    {
      numero: '123456789-0',
      local: 'VARA DO TRABALHO',
      classe: 'AÇÃO TRABALHISTA',
      data: '20/09/2020',
      status: 'JULGADO',
    },
  ];

  constructor(private route: Router) {}

  ngOnInit(): void {}

  redirect(item){
    this.route.navigate(['/meus-processos/detalhes']);
  }
}
