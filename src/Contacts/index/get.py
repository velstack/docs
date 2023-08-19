  import requests
  import json

  url = "https://sms.velstack.com/api/messaging/contact"

  headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer API_KEY"
        }

  response = requests.get(url, headers=headers)

  print(response.json())