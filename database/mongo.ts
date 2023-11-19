import {MongoClient} from 'mongodb';
import tokenizationConfig from '../config/config';

const env = tokenizationConfig;
const {mongoUrl} = env;

const conMongo: MongoClient = new MongoClient(mongoUrl);

export default conMongo;
