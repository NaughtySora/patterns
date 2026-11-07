"use strict";

const { stream: { read } } = require("naughty-util");

class Letter {
  #message;
  #type;

  constructor(message, type) {
    this.set(message, type);
  }

  set(message, type) {
    this.#message = message;
    this.#type = type;
  }

  get message() {
    return this.#message;
  }

  get type() {
    return this.#type;
  }
}

class Attachment {
  #buffer;
  #encoding;

  set(buffer, encoding) {
    this.#buffer = buffer;
    this.#encoding = encoding;
  }

  get buffer() {
    return this.#buffer;
  }

  get encoding() {
    return this.#encoding;
  }

  static async from(stream, encoding) {
    const attachment = new Attachment();
    attachment.#buffer = await read(stream);
    attachment.#encoding = encoding;
    return attachment;
  }
}

class Message {
  #attachments = null;
  #body = null;

  constructor(body) {
    this.#body = body;
    this.#attachments = [];
  }

  attach(attachment) {
    this.#attachments.push(attachment);
    return this;
  }

  get body() {
    return { message: this.#body.message, type: this.#body.type };
  }


  get attachments() {
    return this.#attachments.map(attachment => ({
      encoding: attachment.encoding,
      buffer: attachment.buffer,
    }));
  }
}

class MailerClient {
  constructor(options) {
    this.options = options;
  }

  async send({ from, to, body, attachments }) {
    console.log({ from, to, body, attachments });
  }
}

class Mailer {
  constructor(options) {
    this.client = new MailerClient(options.credentials);;
    this.from = options.from;
  }

  async send(to, message) {
    await this.client.send({
      from: this.from,
      to,
      body: message.body,
      attachments: message.attachments,
    });
  }
}

// 1. Message knows about both letter and attachment and their interfaces.
// I intentionally made letter and attachment creation separately to not make a
// Facade example, which is one of the special cases of indirection, which concentrates
// more towards clean concise interface, rather then just indirection.

// 2. Mailer knows about Message and MailerClient interfaces.

const mailer = new Mailer({
  credentials: { domain: "abc.com", key: "secret" },
  from: "abc@support.com",
});

const attachment = new Attachment();
attachment.set(Buffer.from("abc"), "utc-8");
const letter = new Letter("hello", "text");
const message = new Message(letter)
  .attach(attachment);

mailer.send("someone.com", message);