var body = $response.body

if (body) {
  var obj = JSON.parse($response.body)
  obj.data = '046ef1bab26e5b9bfe2473ded237b572'
    // replace with the data in level 1
  $done({ body: JSON.stringify(obj) }) // success
} else {
  $done({}) // fail
}
