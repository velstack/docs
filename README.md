<p align="center"><a href="https://mnotify.com" target="_blank"><img src="https://sms.velstack.com/build/images/velstack/logo-white.png" width="200" alt="Laravel Logo"></a></p>

<p align="center">
 <a href=" "><img alt="Packagist Version (custom server)" src="https://img.shields.io/github/package-json/v/velstack/docs/main"></a>
 <a href=""><img src="https://img.shields.io/github/license/velstack/docs"></a>

 

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


## Quick SMS

```bash

  curl https://sms.velstack.com/api/messaging/quick/sms
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -d '{ sender : "Velstack", recipient: "0205550368", message: "sent from the velstack api" }'
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
#### `In case of error`
```json
{
  "status": false,
  "message": "Insufficient balance to complete this message",
  "code": 403
}
```

```json
{
  "status": false,
  "message": "Service unavailable",
  "code": 503
}
```



## Group SMS

```bash

  curl https://sms.velstack.com/api/messaging/group/sms
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -d '{ sender : "Velstack", group_id: "a4a8da21-88f8-4395-a9df-f859f22c2dfa", message: "sent from the velstack api" }'
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
      "message_id": "a2500c66-5d60-4f5a-8503-2105151afdca",
      "type": "Group SMS",
      "message": "group sms sent from the velstack api",
      "sender": "VELSTACK",
      "total_contacts": 1,
      "recipients": [
        "0205550368"
      ],
      "credit_used": 1,
      "credit_left": 1
    }
  }
}
```
#### `In case of error`
```json
{
  "status": false,
  "message": "Insufficient balance to complete this message",
  "code": 403
}
```

```json
{
  "status": false,
  "message": "Service unavailable",
  "code": 503
}
```

## Groups

### Get all groups
See all groups you have with your account
```bash

  curl https://sms.velstack.com/api/messaging/group
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -X GET
 
```
 ```json
{
  "status": true,
  "code": 200,
  "message": "Showing all groups",
  "data": {
    "Summary": [
      {
        "id": "a4a8da21-88f8-4395-a9df-f859f22c2dfa",
        "name": "V BANK",
        "members": 1
      },
      {
        "id": "1298d77e-fa98-4304-b513-e4e190a46e28",
        "name": "My Group",
        "members": 0
      }
    ],
    "collection": null
  }
}
```

### Get a Group
Get a specific group. To get a specific group, append the group `id` to the url like below
```bash

  curl https://sms.velstack.com/api/messaging/group/d565d047-df83-4b33-a498-f9de2aca50e6
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -d '{ group_name : "My Group"}'
  -X GET
 
```
 ```json
{
  "status": true,
  "code": 200,
  "message": "Showing a single group",
  "data": [
    {
      "id": "d565d047-df83-4b33-a498-f9de2aca50e6",
      "name": "My Group",
      "members": 0
    }
  ]
}
```

### Create Group
Create a new group in your account
```bash

  curl https://sms.velstack.com/api/messaging/group
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -d '{ group_name : "My Group"}'
  -X POST
 
```
 ```json
{
  "status": true,
  "code": 200,
  "message": "Group created successfully",
  "data": {
    "id": "d565d047-df83-4b33-a498-f9de2aca50e6",
    "name": "My Group",
    "members": 0
  }
}
```

### Update Group
Update an existing group in your account
```bash

  curl https://sms.velstack.com/api/messaging/group/d565d047-df83-4b33-a498-f9de2aca50e6
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -d '{ group_new_name : "Man City Supporters"}'
  -X PUT
 
```
 ```json
{
  "status": true,
  "code": 200,
  "message": "Group updated to Man City Supporters",
  "data": null
}
```

### Delete Group
Delete group from account. To delete a group, append the group `id` to the url
```bash

  curl https://sms.velstack.com/api/messaging/group/d565d047-df83-4b33-a498-f9de2aca50e6
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -X DELETE
 
```
 ```json
{
  "status": true,
  "code": 200,
  "message": "Group deleted successfully",
  "data": null
}
```

# Contacts
### Store Contact
```bash

  curl https://sms.velstack.com/api/messaging/contact
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -d '{ group_id : "a4a8da21-88f8-4395-a9df-f859f22c2dfa", first_name: "sammy", last_name: "fort",
   phone_number: "0205550368", email_address: "example@example.com" }'
  -X POST
 
```
 ```json
{
  "status": true,
  "code": 200,
  "message": "New contact created successfully",
  "data": {
    "id": "84358395-f1c7-441c-ba69-7b74f30363e5",
    "first_name": "sammy",
    "last_name": "fort",
    "phone_number": "0205550368",
    "email_address": "example@example.com",
    "Group": "V BANK",
    "added_date": "2023-08-19T14:07:52.000000Z"
  }
}
```
### Get all contacts
The endpoint will list all your contacts in every group.

```bash

  curl https://sms.velstack.com/api/messaging/contact
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -X GET
 
```
 ```json
{
  "status": true,
  "code": 200,
  "message": "Showing all contacts",
  "data": [
    {
      "id": "2ca48c1e-9ea4-402b-8c69-f0da12692a74",
      "first_name": "Sam",
      "last_name": "Fort",
      "phone_number": "0205550368",
      "email_address": "sam@velstack.com",
      "Group": "V BANK",
      "added_date": "2023-08-19T12:41:14.000000Z"
    },
    {
      "id": "84358395-f1c7-441c-ba69-7b74f30363e5",
      "first_name": "michael",
      "last_name": "kyeremeh",
      "phone_number": "0248297302",
      "email_address": "example@example.com",
      "Group": "V BANK",
      "added_date": "2023-08-19T14:07:52.000000Z"
    }
  ]
}
```

### Get contacts in a Group
Get all contacts in a particular group, you must append that group `id` the contact url like below

```bash

  curl https://sms.velstack.com/api/messaging/contact/a4a8da21-88f8-4395-a9df-f859f22c2dfa
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -X GET
 
```
 ```json
{
  "status": true,
  "code": 200,
  "message": "Showing contacts of V Bank",
  "data": {
    "results": [
      {
        "id": "2ca48c1e-9ea4-402b-8c69-f0da12692a74",
        "first_name": "Sam",
        "last_name": "Fort",
        "phone_number": "0205550368",
        "email_address": "sam@velstack.com",
        "Group": "V BANK",
        "added_date": "2023-08-19T12:41:14.000000Z"
      },
      {
        "id": "84358395-f1c7-441c-ba69-7b74f30363e5",
        "first_name": "michael",
        "last_name": "kyeremeh",
        "phone_number": "0248237302",
        "email_address": "example@example.com",
        "Group": "V BANK",
        "added_date": "2023-08-19T14:07:52.000000Z"
      }
    ],
    "contacts": null
  }
}
```

### Update Contact
Update existing contact details
```bash

  curl https://sms.velstack.com/api/messaging/contact/84358395-f1c7-441c-ba69-7b74f30363e5
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -d '{first_name: "perpetual", last_name: "obeng",
   phone_number: "050XXXXXX", email_address: "example@example.com" }'
  -X PUT
 
```
 ```json
{
  "status": true,
  "code": 200,
  "message": "Contact updated successfully",
  "data": null
}
```

### Delete Contact
```bash

  curl https://sms.velstack.com/api/messaging/contact/84358395-f1c7-441c-ba69-7b74f30363e5
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
  -X DELETE
 
```
 ```json
{
  "status": true,
  "code": 200,
  "message": "Contact deleted successfully",
  "data": null
}
```

# Sender Id
Register a new sender id
```bash

  curl https://sms.velstack.com/api/messaging/sender/id
  -H "Authorization: Bearer YOUR_API_KEY"
  -H "Accept: application/json"
 -d '{purpose: "Software Business", sender_id: "VELSTACK" }'
  -X POST
 
```
 ```json
{
  "status": true,
  "code": 200,
  "message": "Id registered successfully",
  "data": [
    {
      "id": "VELSTACK",
      "purpose": "Software Business",
      "status": "pending",
      "date": "2023-08-19T14:49:03.000000Z"
    }
  ]
}
```



<p align="center">
<a href="https://twitter.com/velstack"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/velstack?label=@velstack&style=social"></a>
  <a href=""><img src="https://img.shields.io/github/license/velstack/docs"></a>

</p>


  
<p align="center">
  Sammy Fort ©2023. Powered by <a href="https://velstack.com/">Velstack</a>
</p>
