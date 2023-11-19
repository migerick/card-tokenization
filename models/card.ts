import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: true,
        unique: true,
    },
    ccv: {
        type: String,
        required: true,
    },
    expiryMonth: {
        type: String,
        required: true,
    },
    expiryYear: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['visa', 'mastercard', 'amex'],
        default: 'visa',
    }
});

export default mongoose.model<ICard & mongoose.Document>('Card', cardSchema);