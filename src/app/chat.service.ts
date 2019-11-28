import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private grupo: any;
  private usuario: any;

  constructor() { }

  escolherGrupo(grupo) {
    return this.grupo =  {
      id: 1,
      nome: 'Zueira',
      imagem: '',
      regras: 'blablabla'
    };
  }

  listarGrupo() {
    return [
      {
        id: 1,
        nome: 'Zueira',
        imagem: '',
        regras: 'blablabla'
      },
      {
        id: 2,
        nome: 'Sério',
        imagem: '',
        regras: 'blablabla 123'
      },
    ];
  }

  sortearUsuario() {
    const usuario =  {
      id: 1,
      nome: 'Zorro',
      image: ''
    };
    this.usuario = usuario;
    return usuario;
  }

  buscarRegras() {
    return this.grupo.regras;
  }

  listarMensagens() {
    return [
      {
        texto: 'Olá',
        dataHora: 1234567,
        usuario: {
          id: 1,
          nome: 'Zorro',
          image: ''
        }
      },
      {
        texto: 'Boa tarde',
        dataHora: 1234567,
        usuario: {
          id: 1,
          nome: 'Zorro',
          image: ''
        }
      }
    ];
  }

  enviarMensagem(texto) {
    console.log(texto);
    return true;
  }

}
