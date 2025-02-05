import sequlize from './db';

describe('Database Connection', () => {
  beforeAll(() => {
    return sequlize.authenticate();
  });
  afterAll(() => {
    return new Promise((resolve) => {
      sequlize.close().then(resolve);
    });
  });

  it('should connect to the database', () => {
    expect(sequlize).toBeDefined();
  });
});
