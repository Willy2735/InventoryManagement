
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/difer',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db=> console.log('Ya esta conectado')).catch((err)=>console.error(err));