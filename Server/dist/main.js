
const db = require('./db');
//const server = require('./server');



console.log("ciao, facciamo una richiesta al db:\n");

//lancia query
console.log("Lancio query");
db.insertUser("FHFGGG03K05B428H","ismaele","Saimene",false);


console.log("\nFINE\n");
db.close();