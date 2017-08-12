import { StickyboardiPage } from './app.po';

describe('stickyboardi App', () => {
  let page: StickyboardiPage;

  beforeEach(() => {
    page = new StickyboardiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sb works!');
  });
});
