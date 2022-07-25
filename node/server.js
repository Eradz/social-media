const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcrypt-nodejs')
const knex = require('knex');



const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : '351885',
      database : 'social'
    }
  });

  db.select('*').from('users')
  

const app = express();


app.use(bodyparser.json())

app.use(cors())


const database = {
    users : [
        {
            id: '123',
            firstname: "John",
            lastname: "Doe",
            email: "john@gmail.com",
            password: "anagu",
            joined: new Date()
        },
        {
            id: '124',
            firstname: "Chidi",
            lastname: "Doe",
            email: "chidi@gmail.com",
            password: "chidi",
            joined: new Date()
        }
    ]
}



app.get('/', (req,res) =>{
    res.send(database.users);
})
app.post('/signin', (req,res)=>{
    if(req.body.email === database.users[0].email && 
        req.body.password === database.users[0].password){
            res.json("success");
        } else {
            res.status(400).json("error signing in")
        }
    res.send('signin')
});

app.post('/signup', (req,res) => {
    const {firstname, lastname, email, password} = req.body;
    db('users')
    .returning('*')
    .insert({
        email: email,
        firstname: firstname,
        lastname: lastname,
        joined: new Date()
    }).then(response => {
        res.json(response)
    })
    .catch(err => {
        res.json('unable to signup')
    })
})

app.get('/profile/:id', (req,res) =>{
    const {id} = req.params;
    db.select('*').from('users').where({
        id: id
    }).then(user => {
        if (user.length > 0){
        res.json(user[0])
        }else{
            res.json("not found")
        }
    })
   
})
// // bcrypt.hash("bacon", null, null, function(err, hash) {
// //     // Store hash in your password DB.
// // });

// // // Load hash from your password DB.
// // bcrypt.compare("bacon", hash, function(err, res) {
// //     // res == true
// // });
// // bcrypt.compare("veggies", hash, function(err, res) {
// //     // res = false
// });
    app.listen(3000, () =>{
        console.log('working')
    })