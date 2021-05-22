//importa o módulo apontando aonde esta o arquivo
import {Spacecraft, Containership} from './base-ships'

//Como só tem uma classe, pode usar o export na classe. Se tivesse mais de uma, usariamos o exporta no final com as classe
export class MilleniumFalcon extends Spacecraft implements Containership{

    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 4
    }

    jumpIntoHyperspace(){
        if (Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }
        else{
            console.log('Failed to jump intohypersapce')
        }
    }
}