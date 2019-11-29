import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.chatService.enviarMensagem('Jesuis');
  }
}
