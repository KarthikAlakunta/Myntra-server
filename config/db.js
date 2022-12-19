const mongoose  = require('mongoose');

const connect  =  async()=>{
    // return mongoose.connect("mongodb+srv://mongo:mongo@cluster0.wgamhn8.mongodb.net/products?retryWrites=true&w=majority");
    return mongoose.connect("mongodb+srv://mongo:mongo@cluster0.wgamhn8.mongodb.net/?retryWrites=true&w=majority");
}

module.exports = connect;
