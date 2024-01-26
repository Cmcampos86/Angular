import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.route';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})] //Aponta para o módulo principal
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'} //Aponta para a navegação inicial
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
