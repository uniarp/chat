import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-regras',
  templateUrl: './regras.page.html',
  styleUrls: ['./regras.page.scss'],
})
export class RegrasPage implements OnInit {
regras: string;
  constructor(
    private servico:ChatService
  ) { }

  ngOnInit() {
    this.servico.escolherGrupo(1);
  
    this.regras=this.servico.buscarRegras();
  }

}
