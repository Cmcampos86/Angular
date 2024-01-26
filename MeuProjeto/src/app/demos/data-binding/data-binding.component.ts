import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: ``
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string = "";

  adicionarClique(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }
/*
  KeyUp(event: any){
    this.nome = event.target.value; //target é o objeto que eu estou referenciado que é a caixa de texto e o value é o valor
  } */
}
