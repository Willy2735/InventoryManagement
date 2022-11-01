const express= require("express");
const app = express();
const morgan = require("morgan");
//Configuraciones 
app.set("port",3000);
app.set('json spaces',2);
//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//Rutas
app.use('/api/articulos',require("./routes/rutas_articulos"))
//Empezando el servidor
app.listen(app.get("port"));
console.log("test");