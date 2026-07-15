'use strict';

// hierarchy 1
class Document { }
class HTMLDocument extends Document { }

// hierarchy 2
class Transport {
  async send() {
    throw new Error('Method is not implemented');
  }
}
class SMTPTransport {
  async send(letter) { }
}

class Mailer {
  Document;
  transport;
  constructor(Document, Transport) {
    this.Document = Document;
    this.transport = new Transport();
  }

  async send(letter) {
    await this.transport.send(letter);
  }

  async accountCreated() {
    const letter = new this.Document();
    letter.header('Hi');
    letter.paragraph('account is created');
    await this.send(letter);
  }
}

// class as first class citizen, DI of classes
const mailer = new Mailer(HTMLDocument, SMTPTransport);