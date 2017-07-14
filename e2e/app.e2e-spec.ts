import { MtgRosterPage } from './app.po';

describe('mtg-roster App', () => {
  let page: MtgRosterPage;

  beforeEach(() => {
    page = new MtgRosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
