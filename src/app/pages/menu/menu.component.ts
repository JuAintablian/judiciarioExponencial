import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  listMenu = [
    { icone: 'jurisprudencia', label: 'Jurisprudência', link: '' },
    {
      icone: 'meus-processos',
      label: 'Meus Processos',
      link: 'meus-processos',
    },
    { icone: 'consulta-publica', label: 'Consulta Publica', link: 'consultas' },
    { icone: 'cartorios', label: 'Cartórios', link: '' },
    { icone: 'diario-de-justica', label: 'Diario de Justiça', link: '' },
    { icone: 'noticias', label: 'Notícias', link: 'noticias' },
    { icone: 'duvidas-juridicas', label: 'Dúvidas Juridicas', link: '' },
    { icone: 'pauta-audiencia', label: 'Pauta de Audiência', link: '' },
    { icone: 'telefones-enderecos', label: 'Telefones e Endereços', link: '' },
    {
      icone: 'autenticidade-documentos',
      label: 'Autenticidade de Documentos',
      link: '',
    },
  ];

  constructor(private route: Router) {}

  ngOnInit(): void {}

  redirect(item) {
    switch (item) {
      case 'meus-processos':
        this.route.navigate(['/meus-processos']);
        break;
      case 'consultas':
        this.route.navigate(['/consultas']);
        break;
      case 'noticias':
        this.route.navigate(['/noticias']);
        break;
    }
  }
}
