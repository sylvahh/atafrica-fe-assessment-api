const environments = require('../../src/config/environments');
const request =require('supertest');
const express = require('express');
const errorsMiddleware = require('../../src/middlewares/errors');

describe('errorsMiddleware', () => {
  let app;

  beforeAll(() => {
    const expressApp = express();
    expressApp.use((req, res, next) => next(new Error('test error')));
    expressApp.use(errorsMiddleware);
    app = expressApp;
  });

  it('should return 500 status and error message', async () => {
    const response = await request(app).get('/v1/stocks'); 
    expect(response.status).toBe(500);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('test error');
  });

  it('should log the error in non-test environments', () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const nonTestEnv = environments.nodeEnv !== 'test';

    if (nonTestEnv) {
      request(app).get('/v1/stocks'); 
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Error in errors middleware:\n',
        expect.any(Error)
      );
    } else {
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    }

    consoleErrorSpy.mockRestore();
  });
});
