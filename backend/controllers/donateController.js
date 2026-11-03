import { Donar } from "../models/donarSchema.js";

export const postDonate = async (req, res) => {
    console.log(req.body)
    try {
        // Destructuring formData
        const {
            user,
            gender,
            dob,
            bloodGroup,
            lastDonation,
            address,
            phoneNo,
            city,
            state,
            medicalIllness,
            donationDate
        } = req.body;

        // Parse date strings into Date objects
        const parsedDob = new Date(dob);
        const parsedDonationDate = new Date(donationDate);

        console.log(user.user._id)
        // Create a new Donar instance
        const newDonar = new Donar({
            user: user.user._id, 
            gender,
            dob: parsedDob,
            bloodGroup,
            lastDonation,
            address,
            phoneNo,
            city,
            state,
            medicalIllness,
            donationDate: parsedDonationDate
        });


        // Save the new Donar instance
        const savedDonar = await newDonar.save();

        res.status(201).json({ savedDonar, message: "Data inserted", success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};
