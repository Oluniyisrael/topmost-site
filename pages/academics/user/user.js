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
                    div.style.textTransform = 'capitalize'
                    div.innerHTML = data[userIdNumber].result[i].name
                    document.getElementsByClassName('mainContainer')[1].appendChild(div)

                    
                }
                
                for (let index = 0; index < document.getElementsByClassName('resultLine').length ; index++) {
                    document.getElementsByClassName('resultLine')[index].addEventListener('click',()=>{
                        console.log(index)
                        // var name = data[userIdNumber].result[i].name
                        var subjects = data[userIdNumber].result[index].subjects
                        //
                        // // var name = data[userIdNumber].result[i].name
                        // var subjects = data[userIdNumber].result[i].subjects
                        // // console.log(name)
                        // // console.log(subjects)
                        // //
                        // //injected code
                        //     var table = document.createElement("table");//
                        //     table.classList.add("resultsTable"); // Add a CSS class for styling

                        //     // Create table header row
                        //     var thead = document.createElement("thead");
                        //     var headerRow = document.createElement("tr");

                        //     var headerData1 = document.createElement("th");
                        //     headerData1.textContent = "Subject";
                        //     headerRow.appendChild(headerData1);

                        //     var headerData2 = document.createElement("th");
                        //     headerData2.textContent = "Scores";
                        //     headerRow.appendChild(headerData2);

                        //     thead.appendChild(headerRow);
                        //     table.appendChild(thead);

                        //     // Create table body
                        //     var tbody = document.createElement("tbody");

                        //     // Loop through subjects and create table rows
                        //     for (var subject in subjects) {
                        //     var rowData = subjects[subject];

                        //     var row = document.createElement("tr");

                        //     // Subject column
                        //     var subjectData = document.createElement("td");
                        //     subjectData.textContent = subject;
                        //     row.appendChild(subjectData);

                        //     // Scores column
                        //     var scoreData = document.createElement("td");
                        //     scoreData.textContent = rowData.slice(0, -2).join(", "); // Extract scores and join with commas
                        //     row.appendChild(scoreData);

                        //     tbody.appendChild(row);
                        //     }

                        //     table.appendChild(tbody);


                            // Append the table to the document body
                            
                            // Create a table element
var table = document.createElement("table");
table.classList.add("resultsTable"); // Add a CSS class for styling

// Create table header row
var thead = document.createElement("thead");
var headerRow = document.createElement("tr");

var headerData1 = document.createElement("th");
headerData1.textContent = "Subject";
headerRow.appendChild(headerData1);

for (var i = 1; i <= 4; i++) {
  var headerData = document.createElement("th");
  headerData.textContent = "Marks " + i;
  headerRow.appendChild(headerData);
}

var headerData5 = document.createElement("th");
headerData5.textContent = "Total Marks";
headerRow.appendChild(headerData5);

var headerData6 = document.createElement("th");
headerData6.textContent = "Percentage";
headerRow.appendChild(headerData6);

var headerData7 = document.createElement("th");
headerData7.textContent = "Grade";
headerRow.appendChild(headerData7);

var headerData8 = document.createElement("th");
headerData8.textContent = "Remarks";
headerRow.appendChild(headerData8);

thead.appendChild(headerRow);
table.appendChild(thead);

// Create table body
var tbody = document.createElement("tbody");

// Loop through subjects and create table rows
for (var subject in subjects) {
  var rowData = subjects[subject];

  var row = document.createElement("tr");

  // Subject column
  var subjectData = document.createElement("td");
  subjectData.textContent = subject;
  row.appendChild(subjectData);

  // Scores columns
  for (var i = 0; i < rowData.length; i++) {
    var scoreData = document.createElement("td");
    scoreData.textContent = rowData[i];
    row.appendChild(scoreData);
  }

  tbody.appendChild(row);
}

table.appendChild(tbody);

// Append the table to the document body
// document.body.appendChild(table);
                            var displayModal = document.createElement('section')
                            // var result = document.createElement('div')
                            displayModal.className = 'displayModal'
                            displayModal.style.display= 'flex'
                            displayModal.appendChild(table)
                            
                            
                            document.body.appendChild(displayModal);
                            //injected code
                        
                    //

                    })
                }
            }
            // i dont understand here 
 
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
        document.addEventListener('click',(e)=>{
            var displayModal = document.getElementsByClassName('displayModal')[0]
                        if (e.target == displayModal) {
                document.body.removeChild(displayModal)
              }
        })
        // document.getElementsByClassName('li')












































        // var something = 
        //            // for table
        //     // Assuming the JSON object is stored in a variable called 'data'
        //     // var result = data[userIdNumber].result[0]; // Accessing the first element of the 'result' array

        //     // Create the table HTML
        //     // var tableHTML = '<table>';
        //     tableHTML += '<tr><th>Subject</th><th>Marks 1</th><th>Marks 2</th><th>Marks 3</th><th>Marks 4</th><th>Total Marks</th><th>Percentage</th><th>Grade</th><th>Remarks</th></tr>';

        //     // Loop through the 'subjects' object
        //     for (var subject in result.subjects) {
        //     if (result.subjects.hasOwnProperty(subject)) {
        //         var subjectData = result.subjects[subject];
        //         var subjectHTML = '<tr>';
        //         subjectHTML += '<td>' + subject + '</td>';

        //         // Loop through the marks array for each subject
        //         for (var i = 0; i < subjectData.length; i++) {
        //         subjectHTML += '<td>' + subjectData[i] + '</td>';
        //         }

        //         subjectHTML += '</tr>';
        //         tableHTML += subjectHTML;
        //     }
        //     }

        //     tableHTML += '</table>';

        //     // Display the table
        //     document.getElementById('table-container').innerHTML = tableHTML;

        // // for table 
