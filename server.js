var express = require('express')
var moment = require('moment')
var app = express()
var port = process.env.PORT || 8080
app.get('/:dateobj', function (req, res) {
  console.log(req.params.dateobj)
  var m = moment(req.params.dateobj)
   res.setHeader('Content-Type', 'application/json');
   var y = parseInt(req.params.dateobj, 10);
   if(!isNaN(y)){
       m = moment.unix(y)
       res.send(JSON.stringify({ unix: m.format('X') , natural: m.format('MMMM DD, YYYY')}))
   } else if(m.isValid()){
    res.send(JSON.stringify({ unix: m.format('X') , natural: m.format('MMMM DD, YYYY')}))
  }else{
    res.send(JSON.stringify({ unix: null , natural: null}))
  }
})

app.listen(port, function () {
  console.log('Example app listening on port '+port)
})
