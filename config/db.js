const mongoose  = require('mongoose');

const connect  =  async()=>{
<<<<<<< HEAD
     return mongoose.connect("mongodb+srv://mongo:mongo@cluster0.wgamhn8.mongodb.net/products?retryWrites=true&w=majority");
    // return mongoose.connect("mongodb://127.0.0.1:27017/myntra");
=======
    return mongoose.connect("mongodb+srv://mongo:mongo@cluster0.wgamhn8.mongodb.net/products?retryWrites=true&w=majority");
>>>>>>> 4504502318dfcf4c6b444b79b44b39169a8a0774
}

module.exports = connect;
