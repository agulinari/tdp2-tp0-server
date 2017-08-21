var dbConnection = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/arqsoft';

module.exports = dbConnection;
