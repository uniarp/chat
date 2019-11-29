import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatCollection: AngularFirestoreCollection<Grupo>;
  grupos: Observable<Grupo[]>;
  private grupo: Grupo;
  private usuario: any;

  constructor( private afs: AngularFirestore ) {
    this.chatCollection = afs.collection<Grupo>('conversas');
    this.grupos = this.chatCollection.valueChanges();
  }

  escolherGrupo(grupo) {
    return this.grupo = {
      id: '1',
      nome: 'Zueira',
      imagem: '',
      regras: ['blablá']
    };
  }

  listarGrupo(): Observable<Grupo[]> {
    return this.grupos;
  }

  sortearUsuario() {
    const usuario = {
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
export class Grupo {
  id: string;
  nome: string;
  imagem: string;
  regras: [string];
}