import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponent } from './componentes/botao/botao.component';
import { DisplayComponent } from './componentes/display/display.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    DisplayComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
