import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('aby-root h1')).getText() as Promise<string>;
  }

  getFooterText() {
    return element(by.css('address')).getText() as Promise<string>;
  }
}
