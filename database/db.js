const mongoose = require('mongoose');

let url = 'mongodb+srv://nuxysapi:WiD31Kxeo2U3HkUP@cluster0.cmvqrmm.mongodb.net/?retryWrites=true&w=majority'
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

const Users = mongoose.Schema({
    apikey: { type: String }
}, { versionKey: false });

async function addUser(apikey) {
   let obj = {
      apikey
   };
   User.create(obj);
}
module.exports.addUser = addUser

