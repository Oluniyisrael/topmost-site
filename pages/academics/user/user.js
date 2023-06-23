var userIdNumber = localStorage.getItem('LoggedinUser');
var database = '../../../markDown/database.json';

if (userIdNumber === null) {
    window.location.href = '../academics.html'
}
fetch(database)
        .then(response => response.json())
        .then(data => {
            
            var welcome = 'Welcome ' + data[userIdNumber].username
            document.getElementById('welcome').innerText = welcome
            document.getElementsByTagName('title')[0].innerHTML +=data[userIdNumber].username
            document.getElementById('userphoto').src = data[userIdNumber].imagesrc
            })
            .catch(error => {
            console.log('Error:', error);
        });