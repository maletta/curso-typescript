/**
 *  Padrão de projetos da GOF - Builder
 */

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

/**
 * Padrão build permite tanto montar o objeto em cadeia ou
 * montar o objeto por etapas
 */

const request = new RequestBuilder();
request.setMethod('post').setUrl('http://www.google.com.br').send();

const request2 = new RequestBuilder();
request2.setMethod('post').setUrl('http://www.google.com.br');
request2.send();
