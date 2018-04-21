import { AppPage } from './app.po';

describe('business-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should get the font size value', () => {
    page.navigateTo();
    expect(page.getFontSize()).toEqual('16px');
  });
});
