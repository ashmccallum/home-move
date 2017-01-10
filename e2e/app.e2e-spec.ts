import { HomeMovePage } from './app.po';

describe('home-move App', function() {
  let page: HomeMovePage;

  beforeEach(() => {
    page = new HomeMovePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
