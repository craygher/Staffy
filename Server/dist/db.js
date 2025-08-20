const mysql = require('mysql2');

// Configurazione della connessione
const connection = mysql.createConnection({
  host: 'localhost',      // indirizzo del server MySQL
  user: 'root',     // nome utente MySQL
  password: '', // password
  database: 'staffydb' // nome del database
});

connection.connect((err) => {
  if (err) {
    console.error("Errore di connessione:", err);
    return;
  }
  console.log("Connesso al DB!");
});

function close() {
  connection.end((err) => {
    if (err) {
      console.error("Errore nella chiusura della connessione:", err);
      return;
    }
    console.log("Connessione chiusa.");
  });
};

function insertUser(Tax_ID_Code, name, surname, isWorker) {
    console.log("Sono dentro Query");
  const sql = `
    INSERT INTO Users (Tax_ID_Code, name, surname, isWorker, registration_date)
    VALUES (?, ?, ?, ?, NOW())
  `;

  const params = [Tax_ID_Code, name, surname, isWorker];

  connection.query(sql, params, (err, results) => {
    if (err) {
      console.error("Errore durante l'inserimento:", err);
      return;
    }
    console.log("Utente inserito con ID:", results.insertId);
  });
}







module.exports= {
    close,
    insertUser
};




