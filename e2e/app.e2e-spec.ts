import { Angular4ObservablesPage } from './app.po';

describe('angular4-observables App', () => {
  let page: Angular4ObservablesPage;

  beforeEach(() => {
    page = new Angular4ObservablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
