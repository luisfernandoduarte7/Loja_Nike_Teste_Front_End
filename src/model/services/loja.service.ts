import { Injectable } from '@angular/core';
import { Iloja } from './loja';

@Injectable({
  providedIn: 'root'
})
export class lojaService {

  private loja: Iloja[] = [
   { id: 1, nome: 'Nike Air Max 90', descricao:"The insole are confortable so you can" , preco: 50.00, img:'./nikeair.png'},
   { id: 2, nome: 'Nike Air Force 90', descricao: "The insole are confortable so you can", preco:60.00,img:'./nikeforce.png'},
   { id: 3, nome: 'Nike Air Force',descricao: "The insole are confortable so you can", preco: 70.00, img:'./nikeforce2.png'},
  ];
  getLoja(): Iloja[] {
    return this.loja;
}
}

