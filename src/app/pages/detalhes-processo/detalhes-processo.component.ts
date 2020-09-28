import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-processo',
  templateUrl: './detalhes-processo.component.html',
  styleUrls: ['./detalhes-processo.component.css']
})
export class DetalhesProcessoComponent implements OnInit {

  processo = {
    numero: '123456789-0',
    orgaoJulgador: '4º VARA FAZENDA PUBLICA',
    classe: '7 - Procedimento Comum',
    assuntoPrincipal: '10433 -Indenização por Dano Moral',
    data: 'sexta - feira , 25 de setembro de 2020',
    processoSigiloso: 'Não',
    transitouEmJulgado: 'Não',
    assistencia: 'Não',
    valor: 'R$ 60.000,00',
    status: 'ATIVO',
    assuntosSecundarios: [
      '10671 - Onrigação de Fazer / Não Fazer',
      '10582 - Rescisão / Resolução',
      '10439 - Indenização por Dano Material'
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
