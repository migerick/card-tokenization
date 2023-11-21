import mongoose from 'mongoose';

export const connectDB = async (mongoUrl: string): Promise<void> => {
    try {
        await mongoose.connect(mongoUrl);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};



