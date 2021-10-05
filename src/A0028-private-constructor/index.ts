// Singleton - GoF | Factory Method - GoF

// Singleton é ter apenas uma instância da classe
// Factory Method é ter um método para criação do objeto dentro da classe
export class Database {
  private static databasae: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.databasae) {
      console.log('retornando instância já criada');
      return Database.databasae;
    }

    console.log('criando nova instância');
    Database.databasae = new Database(host, user, password);
    return Database.databasae;
  }
}

const db1 = Database.getDatabase('locahost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('locahost', 'root', '123456');
db2.connect();

console.log(db1 === db2);
