import { CodeInMultiChunksPage } from './app.po';

describe('code-in-multi-chunks App', () => {
  let page: CodeInMultiChunksPage;

  beforeEach(() => {
    page = new CodeInMultiChunksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
