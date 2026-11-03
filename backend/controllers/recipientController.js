import { Recipient } from "../models/recipientSchema.js";

export const postRecipient = async (req, res) => {
    try {
        const {
            user,
            dateOfBirth,
            gender,
            phoneNumber,
            fullAddress,
            bloodType,
            bloodPacketQuantity,
            criticalNeed,
            dateOfBloodRequest,
            requestDurationTime,
            hospitalized
        } = req.body;

        // Parse date strings into Date objects
        const parsedDateOfBirth = new Date(dateOfBirth);
        const parsedDateOfBloodRequest = new Date(dateOfBloodRequest);

        // Create a new Recipient instance
        const newRecipient = new Recipient({
            user: user.user._id, 
            dateOfBirth: parsedDateOfBirth,
            gender,
            phoneNumber,
            fullAddress,
            bloodType,
            bloodPacketQuantity,
            criticalNeed,
            dateOfBloodRequest: parsedDateOfBloodRequest,
            requestDurationTime,
            hospitalized
        });

        // Save the new Recipient instance
        const savedRecipient = await newRecipient.save();

        res.status(201).json({ savedRecipient, message: "Data inserted", success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

