require('../src/config');
const Database = require('../src/database');
const dbConfig = require('../src/config/database');

let db;

export default class TestHelpers {
  static async startDb() {
    db = new Database('test', dbConfig);
    await db.connect();
    return db;
  }

  static async stopDb() {
    await db.disconnect();
  }

  static async syncDb() {
    await db.sync();
  }

  static async createNewStock(options = {}) {
    const models = require('../src/models').default;
    const {
      riskScore = 5,
      nigerianStocks = 'Test Nigerian Stocks',
      foreignStocks = 'Test Foreign Stocks',
      techStocks = 'Test Tech Stocks',
      emergingStocks = 'Test Emerging Stocks',
      nigerianBonds = 'Test Nigerian Bonds',
      foreignBonds = 'Test Foreign Bonds',
      commodities = 'Test Commodities',
      realEstate = 'Test Real Estate',
      tBills = 'Test T-Bills',
      alternative = 'Test Alternative',
    } = options;

    const { Stocks } = models;
    const data = {
      'Risk Score': riskScore,
      'Nigerian Stocks': nigerianStocks,
      'Foreign Stocks': foreignStocks,
      'Tech Stocks': techStocks,
      'Emerging Stocks': emergingStocks,
      'Nigerian Bonds': nigerianBonds,
      'Foreign Bonds': foreignBonds,
      'Commodities': commodities,
      'Real Estate': realEstate,
      'T-Bills': tBills,
      'Alternative': alternative,
    };

    return Stocks.create(data);
  }

  static getApp() {
    const App = require('../src/app').default;
    return new App().getApp();
  }

  static async createStock(options = {}) {
    const {
      riskScore = 5,
      nigerianStocks = 'Test Nigerian Stocks',
      // ... add other properties as needed
    } = options;

    const models = require('../src/models').default;
    const { Stocks } = models;

    const stock = await Stocks.create({
      'Risk Score': riskScore,
      'Nigerian Stocks': nigerianStocks,
      // ... add other properties as needed
    });

    return stock;
  }
}
