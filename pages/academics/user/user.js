var userIdNumber = localStorage.getItem('LoggedinUser');
var database = '../../../markDown/database.json';

if (userIdNumber === null) {
    window.location.href = '../academics.html'
}
fetch(database)
        .then(response => response.json())
        .then(data => {
            if (data[userIdNumber].result.length !== 0 ) {
                document.getElementsByClassName('mainContainer')[1].innerHTML = ''
                var welcome = 'Welcome ' + data[userIdNumber].username
                //result
                console.log(data[userIdNumber].result.length)
                for (let i = 0; i < data[userIdNumber].result.length; i++) {
                    console.log( data[userIdNumber].result[i])
                    var div = document.createElement('div')
                    div.className = 'resultLine'
                    div.style.cursor = 'pointer'
                    div.innerHTML = data[userIdNumber].result[i].name
                    document.getElementsByClassName('mainContainer')[1].appendChild(div)
                    
                }
            }
            
            // result
            //bio
            document.getElementById('welcome').innerText = welcome
            document.getElementsByTagName('title')[0].innerHTML +=data[userIdNumber].username
            document.getElementById('userphoto').src = data[userIdNumber].imagesrc
            //bio
            // tabledata
            document.getElementById("username").textContent = data[userIdNumber].username;
            document.getElementById("class").textContent = data[userIdNumber].class;
            document.getElementById("classNumber").textContent = data[userIdNumber]["class Number"];
            document.getElementById("age").textContent = data[userIdNumber].age;
            document.getElementById("section").textContent = data[userIdNumber].section;
            // tabledata
            })
            .catch(error => {
            console.log('Error:', error);
        });