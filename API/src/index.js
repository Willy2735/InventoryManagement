require('./database')
const express= require("express");
const app = express();
const morgan = require("morgan");
const cors=require("cors");
//Configuraciones 
app.set("port",3000);
app.set('json spaces',2);
//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
//Rutas
app.use('/api/articulos',require("./routes/rutas_articulos"))
app.use('/api/puntos_ventas',require("./routes/rutas_puntos_ventas"))
app.use('/api/usuario',require("./routes/rutas_usuarios"))
//Empezando el servidor
app.listen(app.get("port"));
console.log("test");