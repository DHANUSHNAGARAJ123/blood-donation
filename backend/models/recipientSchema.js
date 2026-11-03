import mongoose from "mongoose";

const recipientSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    fullAddress: {
        type: String,
        required: true
    },
    bloodType: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true
    },
    bloodPacketQuantity: {
        type: Number,
        required: true
    },
    criticalNeed: {
        type: String,
        enum: ['critical', 'medium', 'low'],
        required: true
    },
    dateOfBloodRequest: {
        type: Date,
        required: true
    },
    requestDurationTime: {
        type: String,
        required: true
    },
    hospitalized: {
        type: String,
        enum: ['yes', 'no'],
        required: true
    }
}, { timestamps: true });

export const Recipient = mongoose.model('Recipient', recipientSchema);
