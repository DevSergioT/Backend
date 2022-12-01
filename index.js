
const express = require("express")
const app = express()
const porta = 3000
const cors = require('cors')

app.use(express.json())
app.use(cors())

const cliente = [

  {
    email: 'test@gmail.com',
    name: 'Fulano da china',
    age: 48
  },
]



app.get('/cliente', function (req, res) {

  res.json(cliente)
});

app.post('/cliente', function (req, res) {

  const newUsers = req.body

  console.log(req.body)

  cliente.push(newUsers)


  res.status(201).json(newUsers)
});


app.listen(porta, () => {
  console.log('servidor rodando')
});