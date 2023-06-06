const { default: mongoose } = require("mongoose");


const db = {
    connect: async () => {
        try {
            await mongoose.connect(process.env.CONNECTED)
            console.log('CONNECTED!');
        } catch (error) {
            console.log('ERROR', error);
        }
    }
}

module.exports = { 
    db }