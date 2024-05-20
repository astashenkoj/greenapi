document.getElementById('getSettings').addEventListener('click', getSettings);
document.getElementById('callGetStateInstance').addEventListener('click', getStateInstance);
document.getElementById('sendMessage').addEventListener('click', sendMessage);
document.getElementById('sendFileByUrl').addEventListener('click', sendFileByUrl);

const apiUrl = "https://7103.api.greenapi.com";
const idInstance = document.getElementById('idInstance');
const token = document.getElementById('token');

function request(url){
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            document.getElementById('answer').value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('answer').value = 'Error: ' + error.message;
        });
}
function getSettings() {
    const url = `${apiUrl}/waInstance${idInstance.value}/getSettings/${token.value}`;
    request(url);

}
function getStateInstance() {
    const url = `${apiUrl}/waInstance${idInstance.value}/getStateInstance/${token.value}`;
    request(url)
}
function sendMessage() {
    const phoneNumber = document.getElementById('phoneNumber-1').value;
    const message = document.getElementById('textMessage').value;
    const url = `${apiUrl}/waInstance${idInstance.value}/sendMessage/${token.value}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chatId: `${phoneNumber}@c.us`,
            message: message
        })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('answer').value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('answer').value = 'Error: ' + error.message;
        });
}
function sendFileByUrl() {
    const phoneNumber = document.getElementById('phoneNumber-2').value;
    const urlFile = document.getElementById('urlFile').value;
    const url = `${apiUrl}/waInstance${idInstance.value}/sendFileByUrl/${token.value}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chatId: `${phoneNumber}@c.us`,
            urlFile: urlFile,
            fileName: 'file.jpg'
        })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('answer').value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('answer').value = 'Error: ' + error.message;
        });
}