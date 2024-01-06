const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect('mongodb+srv://mounkaila144:mounkaila144@cluster0.dlr9vdl.mongodb.net/', () =>
            console.log("Mongo connecté")
        );
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

module.exports = connectDB;