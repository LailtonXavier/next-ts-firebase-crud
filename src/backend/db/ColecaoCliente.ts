import firebase from '../config';
import Cliente from '../../core/Cliente';
import ClienteRepositorio from '../../core/ClienteRepositorio';

export default class ColecaoCliente implements ClienteRepositorio {
  
  // no firebase existe um conversor de dois metodos
  // vai receber um cliente e devolver um obj p firestore
  /// pq nossa classe n retorna um json
  // resumindo: transformando uma classe para objeto
  #conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      }
    }, 
    // recebo os dados do firebase e retorno um cliente
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot,
       options: firebase.firestore.SnapshotOptions): Cliente {
      // foi colocado o OPtional pra ter certeza os dados corretos
      const dados = snapshot?.data(options);
      // snapshot id pq vem do firebase
      return new Cliente(dados.nome, dados.idade, snapshot?.id);
    }
  }

  async salvar(cliente: Cliente): Promise<Cliente> {
    // pra salvar teremos dois cenarios
    // se o id do cliente estiver setado, vms alterar
    if(cliente?.id){
      // alterar, setamos o cliente, ja q ele vai estar em json
      await this.colecao().doc(cliente.id).set(cliente);
      return cliente;
    } else {
      // se n tiver id, vamos salvar
      // docRef pq é a referencia do obj nosso
      const docRef = await this.colecao().add(cliente);
      const doc = await docRef.get();
      return doc.data(); // vai retorna um Cliente
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    // consigo acessar um cliente atravez do ID dele
    return this.colecao().doc(cliente.id).delete();
  }

  async obterTodos(): Promise<Cliente[]> {
    // com a query vou ter acesso aos documentos
    const query = await this.colecao().get();

    // com obj data, ele vai me dar todos os Clientes
    // caso n obtenha nada, me rotarna um array vazio
    return query.docs.map((doc) => doc.data()) ?? [];
  }

  private colecao() {
    return firebase
      .firestore().collection('clientes')
      .withConverter(this.#conversor);
  }
}