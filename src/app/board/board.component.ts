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
    return this.XisNext ? 'X' : 'Os';
  }

  playerMove(ind : number){
    if(!this.squares[ind]){
      this.squares.splice(ind, 1, this.player);
      this.XisNext = !this.XisNext;
    }

    this.winner = this.winnerCalculate();

  }

  winnerCalculate() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
