const https = require('https')

const params = JSON.stringify({
    "title": "Information",
    "sender": "Velstack",
    "recipient": "0205550368",
    "message": "Message from Velstack API"
})

const options = {
    hostname: 'sms.velstack.com',
    port: 443,
    path: '/api/messaging/quick/sms',
    method: 'POST',
    headers: {
        Authorization: 'Bearer API_KEY',
        'Accept': 'application/json'
    }}

const req = https.request(options, res => {
    let data = ''

    res.on('data', (chunk) => {
        data += chunk
    });

    res.on('end', () => {
        console.log(JSON.parse(data))
    })
}).on('error', error => {
    console.error(error)
})

req.write(params)
req.end()