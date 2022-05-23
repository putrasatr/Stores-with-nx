import { getCurrency } from './get-currency';

describe('getCurrency', () => {
  it('should work', () => {
    expect(getCurrency()).toEqual('store-utility');
  });
});
