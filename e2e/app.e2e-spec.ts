import { HomethingPage } from './app.po';

describe('homething App', () => {
  let page: HomethingPage;

  beforeEach(() => {
    page = new HomethingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
