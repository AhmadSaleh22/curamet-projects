import db from './db';

describe('Database Connection', () => {
  afterAll(() => {
    return new Promise((resolve) => {
      db.end(resolve);
    });
  });

  it('should connect to the database', () => {
    expect(db).toBeDefined();
  });
});
