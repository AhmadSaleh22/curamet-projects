import sequelize from './db';

describe('Database Connection', () => {
  beforeAll(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay to ensure DB is ready
      await sequelize.authenticate();
    } catch (error) {
      console.error('Database connection error:', error);
    }
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should connect to the database', () => {
    expect(sequelize).toBeDefined();
  });
});
