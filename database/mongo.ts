import mongoose from 'mongoose';
import tokenizationConfig from '../config/config';

export const connectDB = async (): Promise<void> => {
    try {
        const env = tokenizationConfig
        await mongoose.connect(env.mongoUrl);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};



