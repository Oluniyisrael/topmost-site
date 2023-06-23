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
            })
            .catch(error => {
            console.log('Error:', error);
        });
        