import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { MeusProcessosComponent } from './pages/meus-processos/meus-processos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetalhesProcessoComponent } from './pages/detalhes-processo/detalhes-processo.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    InicioComponent,
    MenuComponent,
    ChatComponent,
    ConsultasComponent,
    MeusProcessosComponent,
    HeaderComponent,
    FooterComponent,
    DetalhesProcessoComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
