import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.page.html',
  styleUrls: ['./sorteio.page.scss'],
})
export class SorteioPage implements OnInit {
usuario;
  constructor(
    private servico:ChatService
  ) { }

  ngOnInit() {
   this.usuario = this.servico.sortearUsuario();
  }

}


