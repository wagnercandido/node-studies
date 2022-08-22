import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const DatabaseConfig: PostgresConnectionOptions = { // DataSource
	type: "postgres", // "mysql"
	host: "localhost",
	port: 5432, // 3306
	username: "postgres",
	password: "postgres",
	database: "nodetestdb",
	synchronize: true,
	logging: false,
	entities: [
		"src/entity/**/*.ts"
	]
};

export { DatabaseConfig };