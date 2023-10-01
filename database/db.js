const mongoose = require('mongoose');

const url = "mongodb+srv://nuxysapi:<password>@cluster0.cmvqrmm.mongodb.net/?retryWrites=true&w=majority";
function connectMongoDb() {
    mongoose.connect(url, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('Succes connect to MONGODB ✅');
    });
};

module.exports.connectMongoDb = connectMongoDb;