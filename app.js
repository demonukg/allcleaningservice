require('dotenv').config();
const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const path = require("path");
const expressHbs = require("express-handlebars");

const app = express();
const jsonParser = express.json();

const rentController = require("./controllers/rentController.js");
const homeController = require("./controllers/homeController.js");
const formController = require("./controllers/formController.js");

//общий доступ к ресурсам
app.use(express.static(path.join(__dirname, '/resources')));

// устанавливаем настройки для файлов layout
app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
))

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//логирование, перехват всех запросов
/*app.use(function(request, response, next){
     
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    fs.appendFile("server.log", data + "\n", function(){});
    next();
});*/

app.post("/feedback", jsonParser, formController.index);

app.use("/rent", rentController.getRent);

app.use("/", homeController.index);


//TODO: разобраться как сделать 404
app.use(function (request, response) {
    response.status(404).send(`Ресурс не найден`);
});


// начинаем прослушивать подключения на 3000 порту
app.listen(3000, "127.0.0.1", () => {
    console.log(`Server running at port 3000`);
});