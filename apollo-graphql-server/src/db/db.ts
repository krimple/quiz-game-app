import createPgPromise, {IOptions} from 'pg-promise';

const connectionSettings = {
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'qz101022',
  min: 1,
  max: 20
};
const pgp = createPgPromise();
const db = pgp(connectionSettings);
export default db;

