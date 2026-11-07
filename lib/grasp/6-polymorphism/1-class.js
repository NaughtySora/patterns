"use strict";

class AbstractPayment {
  constructor(provider) { }
  async pay(amount) { }
}

class SubscriptionPayment extends AbstractPayment {
  constructor(provider, options) {
    super(provider);
    this.options = options;
  }

  async pay(amount, credentials) {
    const payment = this.provider.session(credentials);
    await payment.send(amount);
  }

  async tier1(credentials) {
    await this.pay(credentials, this.options.tier1);
  }
}

class TaxPayment extends AbstractPayment {
  constructor(provider, credentials) {
    super(provider);
    this.credentials = credentials;
    this.session = provider.open(credentials);
  }

  async pay(amount) {
    await this.session.pay(amount);
  }

  async debt() {
    return await this.session.getInfo({ action: "debt" });
  }
}