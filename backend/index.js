var express = require('express');
var router = express.Router();
var app = express(); // define our app using express

const listPahlawan = [

    {
        id: 1,
        firstName: "Pangeran",
        lastName: "Diponegoro",
        die: 70,
        area: "Yogyakarta",
        senjata: "keris"
    },
    {
        id: 2,
        firstName: "Sultan",
        lastName: "Hasanuddin",
        die: "39",
        area: "Makassar",        
        senjata: "Badik"
    },
    {
        id: 3,
        firstName: "Tuanku",
        lastName: "Imam Bonjol",
        die: 92,
        area: "Padang",
        senjata: "Meriam"

    },
    {
        id: 4,
        firstName: "Jendral",
        lastName: "Sudirman",
        die: 34,
        area: "Purbalingga",
        senjata: "Senapan Api"
    },
    {
        id: "5",
        firstName: "Bung",
        lastName: "Tomo",
        die: 61,
        senjata: "Bambu Runcing"
    },
    {
        id: 6,
        firstName: "Cut Nyak",
        lastName: "Dhien",
        die: 60,
        area: "Aceh",
        senjata: "rencong"
    },
    {
        id: 7,
        firstName: "Raden",
        lastName: "Fatahillah",
        die: "unknown",
        area: "Jayakarta",
        senjata: "meriam"
    },
]

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get("/api/pahlawan", (req, res) => {
  res.send(listPahlawan)
})


app.get('/api', function(req, res) {
    res.json({ message: 'Welcome to our api !' });
});

/* GET home page. */
app.get('/', function(req, res) {
    res.render('pages/index');
});

//Views directory for api use project_folder/views
app.set('view engine', 'ejs');

//specify view engine and also to use it you need to install like npm install --save ejs
app.set('view engine', 'ejs');






app.listen(3000, () => {
  console.log("our API running on localhost:3000")
})