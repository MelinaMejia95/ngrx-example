import { WorkshopVipPage } from './app.po';

describe('workshop-vip App', () => {
  let page: WorkshopVipPage;

  beforeEach(() => {
    page = new WorkshopVipPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
