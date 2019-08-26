const express = require('express')
const app = express()
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const knexfile = require('./knexfile').development
const knex = require('knex')(knexfile)

app.get('/', (req, res, next)=>{ 
  res.status(200).send('Hello World') 
 })

app.get('/get-data/:tableName', getData)
 
app.post('/post-data/:tableName', postData)


app.listen(3001, ()=>{
    console.log('server on 3001')
})


function postData(req, res){
  const tableName = req.params.tableName
  const payload = req.body

  knex(tableName).insert(payload)
  .then(()=>{
      getData(req, res)
  })
  .catch((err)=>{
     console.log('>>>>...'+ err)
  })
}

function getData(req, res){
  const tableName = req.params.tableName

  knex.select().from(tableName)
  .then((data)=>{
    data.forEach(d=>JSON.stringify(d))
    // console.log('>>> ********', 'data', ' ******** >>>', data)
    res.send(`<b>Last item from table `+ req.params.tableName + `</b> <br/>` + JSON.stringify(data[data.length - 1]))
  })
  .catch((err)=>{
     console.log('>>>>...'+ err)
  })
}