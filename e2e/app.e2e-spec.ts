import { DeliveryRoutingPage } from './app.po';

describe('delivery-routing App', () => {
  let page: DeliveryRoutingPage;

  beforeEach(() => {
    page = new DeliveryRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
