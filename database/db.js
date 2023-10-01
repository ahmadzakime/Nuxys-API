const mongoose = require('mongoose');

MONGO_DB_URI = 'mongodb+srv://nuxysapi:<password>@cluster0.cmvqrmm.mongodb.net/?retryWrites=true&w=majority'
function connectMongoDb() {
    mongoose.connect(MONGO_DB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('Succes connect to MONGODB ✅');
    });
};

module.exports.connectMongoDb = db;