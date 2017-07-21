import { RxjsSamplePage } from './app.po';

describe('rxjs-sample App', () => {
  let page: RxjsSamplePage;

  beforeEach(() => {
    page = new RxjsSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
