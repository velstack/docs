<p align="center"><a href="https://mnotify.com" target="_blank"><img src="https://sms.velstack.com/build/images/velstack/logo-white.png" width="200" alt="Laravel Logo"></a></p>

<p align="center">
 <a href="https://packagist.org/packages/velstack/mnotify"><img alt="Packagist Version (custom server)" src="https://img.shields.io/packagist/v/velstack/mnotify?label=Version"></a>
<a href="https://packagist.org/packages/velstack/mnotify"><img src="https://img.shields.io/github/license/sammyfort/mNotify-laravel"></a>

 

</p>
 

## [Velstack SMS](https://www.sms.velstack.com/) API documentation.

## Introduction

Welcome to the Velstack Developer Documentation
where you’ll learn how to build amazing communication experiences with the Velstack API.

Base url

```bash
  https://sms.velstack.com
```

## Get Started


Velstack APIs was made with REST and uses http verbs such as `GET, POST, PATCH/PUT, DELETE` Every request to our endpoints must be restful..

 ## Authorization

Velstack uses API keys to authenticate requests. You can [login](https://www.sms.velstack.com/) to get your API key. Every request made to this endpoint requires API key to the server as a Header parameter:.

## Responses

All http responses are in json format that's every request to our endpoint must include a header of 'Accept:application/json'.

   
 

```bash

  curl https://sms.velstack.com/messaging/quick/sms
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -d '{ "sender" : "Velstack", recipient: "020XXX9304", message: "First sms with velstack Apis" }'
  -X POST
 
```

#### `Response`
```json
{
    "status": "success",
    "report": [
        {
            "_id": 60711577,
            "recipient": "233249706365",
            "message": "API messaging is fun!",
            "sender": "mNotify",
            "status": "DELIVERED",
            "date_sent": "2018-03-08 10:19:35",
            "campaign_id": "7FE4A62A-96EB-4755-BC57-000A38C8C6EF",
            "retries": 0
        },
        {
            "_id": 60711578,
            "recipient": "233203698970",
            "message": "API messaging is fun!",
            "sender": "mNotify",
            "status": "DELIVERED",
            "date_sent": "2018-03-08 10:19:35",
            "campaign_id": "7FE4A62A-96EB-4755-BC57-000A38C8C6EF",
            "retries": 0
        }
    ]
}

```

 <p align="center">
 If you find anything that you think needs to be modified or addressed, send me a message on twitter
</p>

<p align="center">
<a href="https://twitter.com/sammy_fort"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/sammy_fort?label=@sammy_fort&style=social"></a>
<a href="https://packagist.org/packages/velstack/mnotify"><img alt="Packagist Version (custom server)" src="https://img.shields.io/packagist/v/velstack/mnotify?label=Version"></a>
<a href="https://packagist.org/packages/velstack/mnotify"><img src="https://img.shields.io/github/license/sammyfort/mNotify-laravel"></a>

</p>


  
<p align="center">
  Sammy Fort ©2023. Powered by <a href="https://velstack.com/">Velstack</a>
</p>
