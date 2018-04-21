import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getFontSize() {
    return element(by.css('app-root')).getCssValue('font-size');
  }
}
