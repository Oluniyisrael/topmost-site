var userIdNumber = localStorage.getItem('LoggedinUser');
var database = '../../../markDown/database.json';

// if (userIdNumber === null) {
//     window.location.href = '../academics.html'
// }
fetch(database)
        .then(response => response.json())
        .then(data => {
            
            var welcome = 'Welcome ' + data[userIdNumber].username
            //result
            var resultSections = Object.keys(data[userIdNumber].result);

            if (resultSections[0] === undefined ) {
                console.log('no result')
            }
            else{
                for (var i = 0; i < resultSections.length; i++) {
                var container = document.getElementById("results"); 
                container.innerHTML = '';
                var section = resultSections[i];
                var div = document.createElement('div');
                div.style.cursor = "pointer";
                div.className = 'resultLine';
                div.innerText = section;
            }
            container.appendChild(div);
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