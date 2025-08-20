const express = require("express"); //importo express
const path = require("path"); //per gestire i path relativi


const app = express();
app.use(express.static('Public')); //qui gli dico che qualsiasi sia il file HTML da ritornare lo troverà nella cartella Public

app.get("/",(req,res)=>{ //gestisco l'index
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/contatti",(req,res)=>{
    res.sendFile(path.join(__dirname, "contatti.html"));
});

app.use((req, res) => { //se il clinet mi richiede un link che non esiste scelgo sempre di far visualizzare questo
  res.sendFile(path.join(__dirname,"/public/404.html"));
});

app.listen(3000); //express ascolta sulla porta 3000