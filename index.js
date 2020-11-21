const MongoClient = require('mongodb').MongoClient
const uri = //PUT DATABASE WE WANT TO USE HERE

// BUG FIX REMINDER!!!!! 
// userNewUrlParser is actually useNewUrlParser 
const client = new MongoClient(uri, { userNewUrlParser: true })
client.connect(err => {
  const collection = client.db("crmdb").collection("customers")
  
  client.close()
})
let express = require('express') 
let app = express()
let bodyparser = require('body-parser') 
let http = require('http').Server(app)

//Middlware Setup
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true}))

//Link to index.html file
app.get('/', function(req, res) {
  res.sendFile('/index.html', {root:'.'})
})


app.set('port', process.env.PORT || 5000)
http.listen(app.get('port'), function() {
  console.log('listening on port', app.get('port'))
})



