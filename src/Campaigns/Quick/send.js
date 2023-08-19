import axios from 'axios';

const data = {
    title: "Announcement",
    sender: "VELSTACK",
    recipient: "0205550368",
    message: 'First API message from Velstack'
}

 axios.post('https://sms.velstack.com/api/messaging/quick/sms', data, {
    headers: {
        Authorization: "Bearer " + "API_KEY",
        Accept: "application/json",
    }
  }).then((response) => {
       alert('Message sent successfully')

  }).catch((errors) => {
      alert(errors.response.data.message)
  })