
const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/inventario',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db=> console.log('Ya esta conectado')).catch((err)=>console.error(err));