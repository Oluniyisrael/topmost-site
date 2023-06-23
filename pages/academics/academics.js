var database = '../../markDown/database.json';
localStorage.removeItem('LoggedinUser')

function incorrect(){
    document.getElementById('Incorrect').style.display ='block'
}
function isCorrect() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    fetch(database)
        .then(response => response.json())
        .then(data => {
            if (username === '' || password === '') {
                alert('Fill user name and password please')
            }
            else{
                
                var found = false; 
                for (let i = 0; i < data.length; i++) {
                    if (data[i].username === username && data[i].password === password) {
                        found = true; 
                        localStorage.setItem('LoggedinUser',i)
                        window.location.href = './user/user.html'
                        break; 
                    }
                }
                console.log(found); 
                if (found === false) {
                    incorrect()
                }
            }
            })
            .catch(error => {
            console.log('Error:', error);
        });
       
}


document.getElementById('submitButton').addEventListener('click', isCorrect);
