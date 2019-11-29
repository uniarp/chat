import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatCollection: AngularFirestoreCollection<Grupo>
  grupos: Observable<Grupo[]>;
  private grupo: any;
  private usuario: any;

  constructor(
    private afs: AngularFirestore
  ) {
    this.chatCollection = afs.collection<Grupo>('conversas');
  }

  escolherGrupo(grupo) {
    return this.grupo = {
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
      nome: 'Zorro',
      image: "https://static.pr.ricmais.com.br/ricmaispr/uploads/2019/08/zorrodisney1957-1024x632.jpg"
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
export class Grupo {

}