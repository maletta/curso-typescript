const funcaoExterna2 = () => {
  console.log('funcaoExterna2');
  console.log(this);
};

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
  }

  static ligar() {
    console.dir(this);
    funcaoExterna2();
  }
}

ControleRemoto.ligar();
