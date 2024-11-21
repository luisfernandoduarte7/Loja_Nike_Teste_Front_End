import { Component,OnInit } from '@angular/core';
import { lojaService } from '../model/services/loja.service';
import { CommonModule } from '@angular/common';
import { Iloja } from '../model/services/loja';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers:[lojaService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
    constructor(private lojaServices:lojaService){}
    loja: Iloja[] = [];
    buttonColor = '#ff6452';

  
    ngOnInit(): void {
        this.loja = this.lojaServices.getLoja();
    }
    changeColor() {
      this.buttonColor = '#ff4500';
  }
}
