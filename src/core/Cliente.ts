export default class Cliente {
  constructor(
    private _nome: string,
    private _idade: number, 
    private _id: string = null
    ){}

    get id(): string {
      return this._id;
    }

    get nome(): string {
      return this._nome;
    }

    get idade(): number {
      return this._idade;
    }

    // ele vai servir para estanciar um Cliente
    static vazio() {
      return new Cliente('', 0);
    }

}