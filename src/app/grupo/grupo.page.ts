import { Component, OnInit } from '@angular/core';
import { ChatService, Grupo } from '../chat.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.page.html',
  styleUrls: ['./grupo.page.scss'],
})
export class GrupoPage implements OnInit {

  grupos = [];

  constructor(private chatService: ChatService) {  }

  ngOnInit() { 
    this.listarGrupo();
   }

  listarGrupo(){
    this.chatService.listarGrupo().subscribe(elemento => {
      this.grupos = elemento,
      console.log(elemento);
    });
  }

}
