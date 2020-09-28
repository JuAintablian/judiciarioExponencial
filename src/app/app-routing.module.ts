import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { MeusProcessosComponent } from './pages/meus-processos/meus-processos.component';
import { DetalhesProcessoComponent } from './pages/detalhes-processo/detalhes-processo.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';

const routes: Routes = [
  {
    path: '',
    component: TelaInicialComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'consultas',
    component: ConsultasComponent,
  },
  {
    path: 'meus-processos',
    component: MeusProcessosComponent,
  },
  {
    path: 'meus-processos/detalhes',
    component: DetalhesProcessoComponent,
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
