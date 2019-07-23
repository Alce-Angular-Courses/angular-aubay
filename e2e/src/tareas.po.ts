import { browser, by, element } from 'protractor';

export class TareasPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/tareas' ) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('h2')).getText() as Promise<string>;
  }
}
