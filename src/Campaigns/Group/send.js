import axios from 'axios';

const data = {
    title: "Announcement",
    sender: "VELSTACK",
    group_id: "d565d047-df83-4b33-a498-f9de2aca50e6",
    message: 'First API message from Velstack'
}

axios.post('https://sms.velstack.com/api/messaging/group/sms', data, {
    headers: {
        Authorization: "Bearer " + "API_KEY",
        Accept: "application/json",
    }
}).then((response) => {
    alert('Message sent successfully')

}).catch((errors) => {
    alert(errors.response.data.message)
})