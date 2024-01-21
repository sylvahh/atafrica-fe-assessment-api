import TestHelpers from '../test-helpers';
import models from '../../src/models';

describe('Stocks', () => {
  beforeAll(async () => {
    await TestHelpers.startDb();
  });

  afterAll(async () => {
    await TestHelpers.stopDb();
  });

  beforeEach(async () => {
    await TestHelpers.syncDb();
  });

  describe('createNewStock', () => {
    it('should create a new stock successfully', async () => {
      const { Stocks } = models;
      const data = {
        riskScore: 7,
        nigerianStocks: 'Test Nigerian Stocks',
        foreignStocks: 'Test Foreign Stocks',
        techStocks: 'Test Tech Stocks',
        emergingStocks: 'Test Emerging Stocks',
        nigerianBonds: 'Test Nigerian Bonds',
        foreignBonds: 'Test Foreign Bonds',
        commodities: 'Test Commodities',
        realEstate: 'Test Real Estate',
        tBills: 'Test T-Bills',
        alternative: 'Test Alternative',
      };

      const newStock = await TestHelpers.createNewStock(data);
      const stocksCount = await Stocks.count();

      expect(stocksCount).toEqual(1);
      expect(newStock['Risk Score']).toEqual(data.riskScore);
      expect(newStock['Nigerian Stocks']).toEqual(data.nigerianStocks);
      expect(newStock['Foreign Stocks']).toEqual(data.foreignStocks);
      expect(newStock['Tech Stocks']).toEqual(data.techStocks);
      expect(newStock['Emerging Stocks']).toEqual(data.emergingStocks);
      expect(newStock['Nigerian Bonds']).toEqual(data.nigerianBonds);
      expect(newStock['Foreign Bonds']).toEqual(data.foreignBonds);
      expect(newStock['Commodities']).toEqual(data.commodities);
      expect(newStock['Real Estate']).toEqual(data.realEstate);
      expect(newStock['T-Bills']).toEqual(data.tBills);
      expect(newStock['Alternative']).toEqual(data.alternative);
    });
  });
});
