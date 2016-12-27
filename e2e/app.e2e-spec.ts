import { AsanocorpGithubIoPage } from './app.po';

describe('asanocorp-github-io App', function() {
  let page: AsanocorpGithubIoPage;

  beforeEach(() => {
    page = new AsanocorpGithubIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
