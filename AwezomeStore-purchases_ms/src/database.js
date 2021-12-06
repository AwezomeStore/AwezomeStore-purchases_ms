const mongoose = require("mongoose");

mongoose.connect('mongodb://bd/awezomestore_purchases_db', {
    
})
    .then(db => console.log('Db is coneted to', db.Connection.host))
    .catch(err => console.error(err));
