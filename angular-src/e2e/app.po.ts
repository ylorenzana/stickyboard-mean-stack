import { browser, element, by } from 'protractor';

export class StickyboardiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sb-root h1')).getText();
  }
}
