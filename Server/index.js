const express = require("express"); //importo express
const path = require("path"); //per gestire i path relativi
const {utenti} = require("./utente");
const {mid,mid2} = require("./middleware");
const app = express();

//middlewares
app.use(express.static('Public')); //qui gli dico che qualsiasi sia il file HTML da ritornare lo troverà nella cartella Public
app.use("/search",mid);
app.use(express.json());


app.get("/",(req,res)=>{ //gestisco l'index
    res.sendFile(path.join(__dirname, "index.html"));
    //res.json(utenti);
});

app.get("/contatti",(req,res)=>{
    res.sendFile(path.join(__dirname, "contatti.html"));
});

app.get("/public/images/Staffy_logo.png", (req,res)=>{
    res.sendFile(path.join(__dirname, "public", "images", "Staffy_Logo.png"));
});

app.get("/utenti/nome/:nome", (req,res)=>{
  const {nome}= req.params;
  console.log(req.params);
  const utente= utenti.find((utenti)=> utenti.nome.toLowerCase() === nome);

  
  if(!utente) return res.status(404).json({message: "Not Found"});
  return res.json(utente);
  /*console.log(req.params);
  const utente= utenti.find((utenti)=> utenti.nome.toLowerCase() === nome);
  res.json(utente);*/
});

app.get("/utenti/cognome/:cognome", (req,res)=>{
  const {cognome} = req.params;
  console.log(req.params);
  const utente= utenti.find((utenti)=> utenti.cognome.toLowerCase() === cognome);
  if(!utente) return res.status(404).json({message: "Not Found"});
  return res.json(utente);
});




app.get("/search", (req,res)=>{
  console.log(req.query);
  const {user,limit}=req.query;
  console.log({user,limit});
  res.send("Suca");
});


app.use((req, res) => { //se il clinet mi richiede un link che non esiste scelgo sempre di far visualizzare questo
  res.sendFile(path.join(__dirname,"/public/404.html"));
});

app.listen(3000); //express ascolta sulla porta 3000