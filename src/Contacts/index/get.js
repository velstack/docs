import axios from 'axios';



axios.get('https://sms.velstack.com/api/messaging/contact', {
    headers: {
        Authorization: "Bearer " + "API_KEY",
        Accept: "application/json",
    }
}).then((response) => {
   const data = response.data

}).catch((errors) => {
    alert(errors.response.data.message)
})