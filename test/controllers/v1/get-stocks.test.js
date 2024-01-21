const TestHelpers = require('../../test-helpers');
const  request  =require('supertest');

describe('Stocks Controller', () => {
  let app;

  beforeAll(async () => {
    await TestHelpers.startDb();
    app = TestHelpers.getApp();
  });

  afterAll(async () => {
    await TestHelpers.stopDb();
  });

  beforeEach(async () => {
    await TestHelpers.syncDb();
  });

  describe('GET /stocks', () => {
    it('should get all stocks', async () => {
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
      await TestHelpers.createNewStock(data);

      const response = await request(app).get('/v1/stocks').expect(200);

      expect(response.body.data.stocks).toHaveLength(1);
    });

    it('should return 404 if no stocks found', async () => {
      const response = await request(app).get('/v1/stocks');
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('No stock found');
    });
  });
    
});
