require('./config');
const Database = require('./database');
const environment = require('./config/environments');
const dbConfig = require('./config/database');

// IIFE = immediately invoking function expression

(async () => {
  try {
    const db = new Database(environment.nodeEnv, dbConfig);
    await db.connect();
    const App = require('./app');
    const app = new App();
    app.listen();
  } catch (error) {
    console.error(
      'something went wrong while connecting to the server:\n',
      error.stack
    );
  }
})();
