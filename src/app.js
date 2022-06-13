import express from "express";
import { engine as exphbs } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";
import exp from "constants";

const app = express();

app.set("views", path.join(__dirname, "views"));
/* console.log(`Route ${app.get("views")}`); */

app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));


//Routes
app.use(indexRoutes);

//Static Files
app.use(express.static(path.join(__dirname,"public")));

export default app;
