  import requests
  import json

  url = "https://sms.velstack.com/api/contact"

  headers = {
        "Accept": "application/json",
        "Authorization": "Bearer API_KEY"
        }

  data = {
        "group_id" : "62469a27-2a25-4e22-b324-bce482d54a26",
        "first_name" : "sammy",
        "last_name" : "fort",
        "phone_number" : "0205550368",
        "email_address" : "example@example.com"
        }

  response = requests.post(url, headers=headers, json=data)

  print(response.json())