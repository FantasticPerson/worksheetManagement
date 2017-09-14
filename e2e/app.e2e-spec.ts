import { WorksheetManagementPage } from './app.po';

describe('worksheet-management App', function() {
  let page: WorksheetManagementPage;

  beforeEach(() => {
    page = new WorksheetManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
