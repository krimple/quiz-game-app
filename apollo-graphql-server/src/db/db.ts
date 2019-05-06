import createPgPromise, {IOptions} from 'pg-promise';

const connectionSettings = {
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'qz101022',
  min: 1,
  max: 10
};
const pgp = createPgPromise();
const db = pgp(connectionSettings);
export default db;

