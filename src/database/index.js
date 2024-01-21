import cls from 'cls-hooked';
import { Sequelize } from 'sequelize';
import { registerModels } from '../models';
import models from '../models';
// const Stocks = require('../models/stocks')(Sequelize);

const {Stocks}= models
const StockData = [
  {
    'Risk Score': 0,
    'Nigerian Stocks': '18%',
    'Foriegn Stocks': '4%',
    'Tech Stocks': '2%',
    'Emerging Stocks': '7%',
    'Nigerian Bonds': '35%',
    'Foriegn Bonds': '15%',
    'Commodities': '7%',
    'Real Estate': '12%',
    'T-Bills': '0%',
    'Alternative': '0%',
  },

  {
    'Risk Score': 0,
    'Nigerian Stocks': '18%',
    'Foriegn Stocks': '4%',
    'Tech Stocks': '2%',
    'Emerging Stocks': '7%',
    'Nigerian Bonds': '35%',
    'Foriegn Bonds': '15%',
    'Commodities': '7%',
    'Real Estate': '12%',
    'T-Bills': '0%',
    'Alternative': '0%',
  },
  {
    'Risk Score': 0,
    'Nigerian Stocks': '18%',
    'Foriegn Stocks': '4%',
    'Tech Stocks': '2%',
    'Emerging Stocks': '7%',
    'Nigerian Bonds': '35%',
    'Foriegn Bonds': '15%',
    'Commodities': '7%',
    'Real Estate': '12%',
    'T-Bills': '0%',
    'Alternative': '0%',
  },
  {
    'Risk Score': 0,
    'Nigerian Stocks': '18%',
    'Foriegn Stocks': '4%',
    'Tech Stocks': '2%',
    'Emerging Stocks': '7%',
    'Nigerian Bonds': '35%',
    'Foriegn Bonds': '15%',
    'Commodities': '7%',
    'Real Estate': '12%',
    'T-Bills': '0%',
    'Alternative': '0%',
  },
  {
    'Risk Score': 0,
    'Nigerian Stocks': '18%',
    'Foriegn Stocks': '4%',
    'Tech Stocks': '2%',
    'Emerging Stocks': '7%',
    'Nigerian Bonds': '35%',
    'Foriegn Bonds': '15%',
    'Commodities': '7%',
    'Real Estate': '12%',
    'T-Bills': '0%',
    'Alternative': '0%',
  },
  {
    'Risk Score': 0,
    'Nigerian Stocks': '18%',
    'Foriegn Stocks': '4%',
    'Tech Stocks': '2%',
    'Emerging Stocks': '7%',
    'Nigerian Bonds': '35%',
    'Foriegn Bonds': '15%',
    'Commodities': '7%',
    'Real Estate': '12%',
    'T-Bills': '0%',
    'Alternative': '0%',
  },
  {
    'Risk Score': 0,
    'Nigerian Stocks': '18%',
    'Foriegn Stocks': '4%',
    'Tech Stocks': '2%',
    'Emerging Stocks': '7%',
    'Nigerian Bonds': '35%',
    'Foriegn Bonds': '15%',
    'Commodities': '7%',
    'Real Estate': '12%',
    'T-Bills': '0%',
    'Alternative': '0%',
  },
  {
    'Risk Score': 0,
    'Nigerian Stocks': '18%',
    'Foriegn Stocks': '4%',
    'Tech Stocks': '2%',
    'Emerging Stocks': '7%',
    'Nigerian Bonds': '35%',
    'Foriegn Bonds': '15%',
    'Commodities': '7%',
    'Real Estate': '12%',
    'T-Bills': '0%',
    'Alternative': '0%',
  },
  {
    'Risk Score': 0,
    'Nigerian Stocks': '18%',
    'Foriegn Stocks': '4%',
    'Tech Stocks': '2%',
    'Emerging Stocks': '7%',
    'Nigerian Bonds': '35%',
    'Foriegn Bonds': '15%',
    'Commodities': '7%',
    'Real Estate': '12%',
    'T-Bills': '0%',
    'Alternative': '0%',
  },
  {
    'Risk Score': 0,
    'Nigerian Stocks': '18%',
    'Foriegn Stocks': '4%',
    'Tech Stocks': '2%',
    'Emerging Stocks': '7%',
    'Nigerian Bonds': '35%',
    'Foriegn Bonds': '15%',
    'Commodities': '7%',
    'Real Estate': '12%',
    'T-Bills': '0%',
    'Alternative': '0%',
  },
];
export default class Database {
  constructor(environment, dbConfig) {
    this.environment = environment;
    this.dbConfig = dbConfig;
    this.isTestEnvironment = this.environment === 'test';
  }

  async connect() {
    // Set up the namespace for transactions
    const namespace = cls.createNamespace('transactions-namespace');
    Sequelize.useCLS(namespace);

    // Create the connection
    const { username, password, host, port, database, dialect } =
      this.dbConfig[this.environment];
    this.connection = new Sequelize({
      username,
      password,
      host,
      port,
      database,
      dialect,
      logging: this.isTestEnvironment ? false : console.log,
    });

    // Check if we connected successfully
    await this.connection.authenticate({ logging: false });

    if (!this.isTestEnvironment) {
      console.log(
        'Connection to the database has been established successfully'
      );
    }

    // Register the models
    registerModels(this.connection);

    // Sync the models
    await this.sync();
  }

  async disconnect() {
    await this.connection.close();
  }

  async sync() {
    await this.connection.sync({
      logging: false,
      force: this.isTestEnvironment,
    });
    if (!this.isTestEnvironment) {
      console.log('Stock data inserted successfully.');
      console.log('Connection synced successfully');
    }
  }
}
