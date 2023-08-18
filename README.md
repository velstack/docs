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

  curl https://sms.velstack.com/api/messaging/quick/sms
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -d '{ "sender" : "Velstack", recipient: "0205550368", message: "sent from the velstack api" }'
  -X POST
 
```

#### `Response`
```json
 {
  "status": true,
  "code": 200,
  "message": "Message sent Successfully",
  "data": {
    "summary": {
      "message_id": "550517f1-3810-4d17-bfdb-f2571d05c07c",
      "type": "Quick SMS",
      "message": "sent from the velstack api",
      "sender": "VELSTACK",
      "total_contacts": 1,
      "recipients": [
        "0205550368"
      ],
      "credit_used": 1,
      "credit_left": "47.00"
    }
  }
}
```

 

<p align="center">
<a href="https://twitter.com/velstack"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/velstack?label=@velstack&style=social"></a>
 <a href="https://packagist.org/packages/velstack/mnotify"><img src="https://img.shields.io/github/license/sammyfort/mNotify-laravel"></a>

</p>


  
<p align="center">
  Sammy Fort ©2023. Powered by <a href="https://velstack.com/">Velstack</a>
</p>
