 import requests
  import json

  url = "https://sms.velstack.com/api/quick/sms"

  headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer API_KEY"
        }

  data = {
  "title": "Information"
  "sender": "Velstack",
  "recipient": "020XXXXXXXX",
  "message": "We have a meeting at 2:00pm",
  }

  response = requests.post(url, headers=headers, json=data)

  print(response.json())