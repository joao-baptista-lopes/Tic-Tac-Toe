import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  //propriedade que representa os 9 movimentos no game board
  squares: any[] = [];

  //propriedade que define o actual jogador 
  XisNext: boolean = false;

  //propriedade que define o vencedor 
  winner!: string | null;

  constructor() {}



  ngOnInit(): void {

    //método responsável para definir os valores iniciais quando se inicia um novo jogo
    this.newGame();

      
  }

  newGame(){
    // Square torna-se uma matriz que inicialmente tem 9 valores null
    this.squares= Array(9).fill(null);
    this.winner = null;
    this.XisNext = true;
  }

  get player(){
    return this.XisNext ? 'O' : 'X';
  }

}
