const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://dbUser:dbUserPassword@cluster0.5f4pmwb.mongodb.net/lumen?retryWrites=true&w=majority"
        );
        console.log("MongoDB Connected successfully!");
    } catch (e) {
        console.error("Error in MongoDB connection: " + e);
        process.exit(1);
    }
};

module.exports = connectDB;
