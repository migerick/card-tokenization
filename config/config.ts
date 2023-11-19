import dotenv from 'dotenv';

dotenv.config();

interface TokenizationConfig {
    host: string;
    port: number;
    debug: boolean;
    mongoUrl: string;
    mongoDatabase: string;
    mysqlUrl: string;
    secretKey: string;
}

const requiredEnvVariables = [
    'CARD_HOST',
    'CARD_PORT',
    'CARD_DEBUG',
    'CARD_MONGO_URL',
    'CARD_MONGO_DATABASE',
    'CARD_SECRET_KEY',
];

const missingEnvVariables = requiredEnvVariables.filter((variable) => !(variable in process.env));
if (missingEnvVariables.length) {
    throw new Error(`Missing environment variables: ${missingEnvVariables.join(', ')}`);
}

const tokenizationConfig: TokenizationConfig = {
    host: process.env.CARD_HOST || 'localhost',
    port: Number(process.env.CARD_PORT) || 8080,
    debug: process.env.CARD_DEBUG === "true",
    mongoUrl: process.env.CARD_MONGO_URL || 'mongodb://localhost:27017',
    mongoDatabase: process.env.CARD_MONGO_DATABASE || 'card',
    mysqlUrl: process.env.CARD_MYSQL_URL || 'mysql://localhost:3306',
    secretKey: process.env.CARD_SECRET_KEY || 'secret',
};

export default tokenizationConfig;
