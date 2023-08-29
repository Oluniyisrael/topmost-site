var userIdNumber = localStorage.getItem('LoggedinUser');
if (userIdNumber == null) {
    window.location.href = '../academics.html'
}
var button = document.getElementById('logOut')
button.onclick = () =>{
    localStorage.setItem('LoggedinUser',null)
    window.location.href = '../../academics/academics.html'
}
var database = '../../../markDown/database.json';

fetch(database)
        .then(response => response.json())
        .then(data => {
            //result
            if (data[userIdNumber].result.length !== 0 ) {
                document.getElementsByClassName('mainContainer')[1].innerHTML = ''
                // console.log(data[userIdNumber].result.length)
                for (let i = 0; i < data[userIdNumber].result.length; i++) {
                    // console.log( data[userIdNumber].result[i])
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
                            var subjects = data[userIdNumber].result[index].subjects
                                var table = document.createElement("table");
                                table.classList.add("resultsTable"); 

                                // Create table header row
                                var thead = document.createElement("thead");
                                var headerRow = document.createElement("tr");

                                var headerData1 = document.createElement("th");
                                headerData1.textContent = "Subject";
                                headerRow.appendChild(headerData1);

                                for (var i = 1; i <= 4; i++) {
                                var headerData = document.createElement("th");
                                headerData.textContent = "CA " + i;
                                headerRow.appendChild(headerData);
                                }

                                var headerData5 = document.createElement("th");
                                headerData5.textContent = "Exam";
                                headerRow.appendChild(headerData5);

                                var headerData6 = document.createElement("th");
                                headerData6.textContent = "Total CA";
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


                                var div = document.createElement('div')
                                var header =document.createElement('div')
                                var logo = document.createElement('img')
                                var h2 = document.createElement('h2')
                                var studentInfo = document.createElement('div');
                                var info = document.createElement('p')
                                var nameOfResult = document.createElement('h1')
                                var printButton = document.createElement('button')
                                info.textContent = `Name: ${data[userIdNumber].username}      Class:  ${data[userIdNumber].class} Age: ${data[userIdNumber].age}       Section:  ${data[userIdNumber].section}`
                                header.className = 'Heading'
                                div.className = 'result'
                                logo.src = '../../../images/something.png'
                                logo.className = 'headerImg'
                                printButton.textContent = 'Print'
                                printButton.className = 'printButton'
                                printButton.onclick = ()=>{window.print()}
                                studentInfo.className = 'studentinfo'
                                h2.textContent = 'topmost Intercontinential academy'
                                h2.className = 'Headingh2'
                                nameOfResult.textContent = data[userIdNumber].result[index].name + ' Results'

                            var displayModal = document.createElement('section')
                            displayModal.className = 'displayModal'
                            displayModal.style.display= 'flex'
                            //
                            //
//!!!!                      // !!!!!!!!!!!!create a dive to hold sutdents image
                            var imgCont = document.createElement('div')
                            imgCont.className = 'studentImgCOnt'
                            var studentImg = document.createElement('img');
                            studentImg.className = 'studentResultImg'
                            studentImg.src = data[userIdNumber].imagesrc
                            imgCont.appendChild(studentImg)
                            //

                            //
                            //
                            header.appendChild(logo)
                            header.appendChild(h2)
                            studentInfo.appendChild(info)
                            studentInfo.appendChild(nameOfResult)
//
                            //
                            div.appendChild(header)
                            //<span> Location: Ijah Road, Sabon-Wuse, Tafa LGA, Niger State. &nbsp;</span>
                            //<span> <a href="tel:+2348150753822">+2348150753822</a> &nbsp;</span>
                            //add to header
                            div.appendChild(imgCont) //inject image
                            
                            div.appendChild(studentInfo)
                            div.appendChild(table)
                            div.appendChild(printButton)
                            displayModal.appendChild(div)
                            
                            document.body.appendChild(displayModal);
                            //injected code
                        
                    //

                    })
                }
            }
 
            // result
            
            //bio
            // console.log(data[userIdNumber].username)
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
            document.getElementById("section").textContent = data[userIdNumber].Section;
            console.log(data[userIdNumber].Section)
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
            })
            
        }
        document.addEventListener('click',(e)=>{
            var displayModal = document.getElementsByClassName('displayModal')[0]
                        if (e.target == displayModal) {
                document.body.removeChild(displayModal)
              }
        })
        document.getElementById('user').addEventListener('click',(e)=>{
            if(document.getElementsByClassName('userSideBar')[0].classList[1] ==='normal'){
                document.getElementsByClassName('userSideBar')[0].classList.remove('normal')
            }
        }
        )
        // document.getElementsByClassName('li')
        // document.getElementsByClassName('userSideBar')[0].classList[1] ==='normal'


































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
        var burger = document.getElementById('hamburger');
        burger.addEventListener('click',toggleSideBar)
function toggleSideBar(){
    var sideBar = document.getElementsByClassName('userSideBar');
    sideBar[0].classList.toggle('normal')
}