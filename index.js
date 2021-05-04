
const {singUp,singIn} = require('./utils/utils')
const express = require('express')
const app = express() 
let port = process.env.PORT || 3333

app.get('/' , (req,res) => {
  res.send(`welcome to express database ^^ `)
})

// users routes
app.get('/signUp/:user' , (req,res) => {
    const user = req.params.user
    try{
        singUp(user)
        res.send(`${user} account created`)
    }catch(e){
        res.send(` Error : ${e.message}`)
    }
})
       

app.get('/signIn/:user' , (req,res) => {
    const user = req.params.user
    const singn = singIn(user)
    res.send( singn ? `welcome ${user}` : `singUp before`)
})


app.listen(port,() => {
  console.log(`App is listening on port http://localHost:${port}`)
})