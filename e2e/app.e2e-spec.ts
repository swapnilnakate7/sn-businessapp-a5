import { AppPage } from './app.po';

describe('business-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should get the font size value', () => {
    page.navigateToHome();
    expect(page.getFontSize()).toEqual('16px');
  });

  it('should get the Header Element Class Attribute', () => {
    page.navigateToHome();
    expect(page.getHeaderElement()).toEqual('border');
  });

  it('should get the ProductsList Element', () => {
    page.navigateToProducts();
    expect(page.getProductsList()).toBeTruthy();
  });


});
