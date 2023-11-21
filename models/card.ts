import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: true,
        unique: true,
        min: 13,
        max: 16,
    },
    ccv: {
        type: String,
        required: true,
        min: 3,
        max: 4,
    },
    expirationMonth: {
        type: String,
        required: true,
        min: 1,
        max: 2,
    },
    expirationYear: {
        type: String,
        required: true,
        min: 4,
    },
    email: {
        type: String,
        required: true,
        min: 5,
        max: 100,
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    expiredAt: {
        type: Date,
        default: Date.now() + 15 * 60 * 1000,
    }
});

export default mongoose.model<ICard & mongoose.Document>('Card', cardSchema);