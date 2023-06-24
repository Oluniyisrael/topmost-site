var userIdNumber = localStorage.getItem('LoggedinUser');
var database = '../../../markDown/database.json';

if (userIdNumber === null) {
    window.location.href = '../academics.html'
}
fetch(database)
        .then(response => response.json())
        .then(data => {
            //result
            if (data[userIdNumber].result.length !== 0 ) {
                document.getElementsByClassName('mainContainer')[1].innerHTML = ''
                console.log(data[userIdNumber].result.length)
                for (let i = 0; i < data[userIdNumber].result.length; i++) {
                    console.log( data[userIdNumber].result[i])
                    var div = document.createElement('div')
                    div.className = 'resultLine'
                    div.style.cursor = 'pointer'
                    div.innerHTML = data[userIdNumber].result[i].name
                    document.getElementsByClassName('mainContainer')[1].appendChild(div)

                    
                }
                for (let i = 0; i < document.getElementsByClassName('resultLine').length ; i++) {
                    document.getElementsByClassName('resultLine')[i].addEventListener('click',()=>{
                        console.log(i)
                    })
                }
            }
            // i dont understand here 
            // for table
            // Assuming the JSON object is stored in a variable called 'data'
                var result = data[userIdNumber].result[0]; // Accessing the first element of the 'result' array

                // Create the table HTML
                var tableHTML = '<table>';
                tableHTML += '<tr><th>Subject</th><th>Marks 1</th><th>Marks 2</th><th>Marks 3</th><th>Marks 4</th><th>Total Marks</th><th>Percentage</th><th>Grade</th><th>Remarks</th></tr>';

                // Loop through the 'subjects' object
                for (var subject in result.subjects) {
                if (result.subjects.hasOwnProperty(subject)) {
                    var subjectData = result.subjects[subject];
                    var subjectHTML = '<tr>';
                    subjectHTML += '<td>' + subject + '</td>';

                    // Loop through the marks array for each subject
                    for (var i = 0; i < subjectData.length; i++) {
                    subjectHTML += '<td>' + subjectData[i] + '</td>';
                    }

                    subjectHTML += '</tr>';
                    tableHTML += subjectHTML;
                }
                }

                tableHTML += '</table>';

                // Display the table
                document.getElementById('table-container').innerHTML = tableHTML;

            // for table 
            // result
            
            //bio
            console.log(data[userIdNumber].username)
            var welcome = 'Welcome ' + data[userIdNumber].username
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
        //hellfire adverted
        function closeUnsuedDivs(){
            for (let i = 0; i < document.getElementsByClassName('mainContainer').length; i++) {
                document.getElementsByClassName('mainContainer')[i].style.display = 'none';
                
            }
        }
        
        for (let i = 0; i < document.getElementsByClassName('li').length; i++) {
            document.getElementsByClassName('li')[i].addEventListener('click',()=>{
               
                closeUnsuedDivs()
                document.getElementsByClassName('mainContainer')[i].style.display = 'block'
                console.log(i)

            })
            
        }
        // document.getElementsByClassName('li')