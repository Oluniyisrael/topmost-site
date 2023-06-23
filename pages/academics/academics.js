// nya nya nya nya nyaaa nyaaa
var database = '../../markDown/database.json';

function isCorrect() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    
  fetch(database)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
       if (username === data[i].username && password === data[i].password) {
        console.log(true)
       }
       console.log(false)
      }
    }
    )

    .catch(error => {
      // Handle any errors that occur during the fetch
      console.log('Error:', error);
    });
}
document.getElementById('submitButton').addEventListener('click',isCorrect)