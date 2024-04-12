import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "root", 
    database: "testdb"
});

// Check if the connection is successful
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, result) => {
        if (err) {
            return res.json({ Message: "Error Inside server" });
        }
        return res.json(result);
    }); 
});

app.listen(8081, () => {
    console.log("Listening on port 8081");
});
