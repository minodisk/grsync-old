const {createServer} = require('http')
const {readFile} = require('fs')
const {join} = require('path')
const {stringify} = JSON

const server = createServer()
server.on('request', (req, res) => {
  console.log(req.method, req.url)
  switch (req.url) {
    case '/v1/ping':
      if (req.method === 'GET') {
        resFile(res, 'ping.json')
        return
      }
    case '/_gr/objs':
      if (req.method === 'GET') {
        resFile(res, 'objs.json')
        return
      }
  }
  res.write('success!')
  res.end()
})
server.listen(8080)

function resFile (res, filename) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
  readFile(join(__dirname, filename), (err, data) => {
    if (err) {
      res.write(stringify({
        errCode: 500,
        errMsg: err.toString()
      }))
      res.end()
      return
    }
    res.write(data)
    res.end()
  })
}
