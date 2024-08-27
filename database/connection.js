const mongoose = require('mongoose');

const connectdb = () => {
    try {
        mongoose.connect(process.env.DB_URL)
        console.log('Connected to Database ')
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}


module.exports = connectdb




