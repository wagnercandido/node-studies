import { Logger } from '@config/LoggerConfig';
import { DatabaseConfig } from '@config/Database';
import { createConnection } from 'typeorm';
import express from 'express';
import router from './routes';

const app = express();
const logger = new Logger();

(async () => {
	await createConnection(DatabaseConfig);
	logger.info('Database connection successful');
})();

app.use(express.json());
app.use(router);

const DEFAULT_PORT = 3333;

app.listen(DEFAULT_PORT, () => { logger.info(`Started App on port ${DEFAULT_PORT}`) });
