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
      id: 'CeUrfUZFEjfrDObqNesP',
      nome: 'Zueira',
      imagem: '',
      regras: ['blablabla']
    };
  }

  listarGrupo(): Observable<Grupo[]> {
    return this.grupos;
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

  listarMensagens(grupo): Observable<Grupo> {
    return this.afs.doc<Grupo>('conversas/' + grupo.id).valueChanges();
  }

  enviarMensagem(textoMensagem) {
    this.sortearUsuario();
    const idMensagem = this.afs.createId();
    const timestamp = new Date();
    const mensagem = {
      arquivo: '',
      dataHora: timestamp,
      texto: textoMensagem,
      usuario: this.usuario
    };

    return this.afs.doc('conversas/' + this.grupo.id + '/mensagens/' + idMensagem).set({ ...mensagem });
  }

}
export class Grupo {
  id: string;
  nome: string;
  imagem: string;
  regras: [string];
}