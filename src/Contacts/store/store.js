import axios from 'axios';

const data = {
    "group_id" : "62469a27-2a25-4e22-b324-bce482d54a26",
    "first_name" : "sammy",
    "last_name" : "fort",
    "phone_number" : "0205550368",
    "email_address" : "example@example.com"
}

axios.post('https://sms.velstack.com/api/contact', data, {
    headers: {
        Authorization: "Bearer " + "API_KEY",
        Accept: "application/json",
    }
}).then((response) => {
   console.log(response)

}).catch((errors) => {
    console.log(errors.response.data.message)
})