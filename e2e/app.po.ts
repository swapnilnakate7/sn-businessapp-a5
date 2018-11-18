import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToHome() {
    return browser.get('/');
  }
  navigateToProducts() {
    return browser.get('/products');
  }

  getFontSize() {
    return element(by.css('app-root')).getCssValue('font-size');
  }

  getHeaderElement() {
    return element(by.tagName('app-sn-header')).getAttribute('class');
  }

  getProductsList() {
    return element(by.tagName('app-sn-products')).isElementPresent;
  }

}
