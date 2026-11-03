import mongoose from "mongoose";

const donarSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true
    },
    lastDonation: {
        type: String,
        enum: ['not_donated_ever', 'less_than_3_months', '3_to_6_months', 'more_than_6_months'],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    medicalIllness: {
        type: String,
        required: true
    },
    donationDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });

export const Donar = mongoose.model('Donar', donarSchema);
