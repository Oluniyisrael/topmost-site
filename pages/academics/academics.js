var modal = document.getElementById('modal');
var apply = document.getElementsByClassName('apply');
var sectionSlt = document.getElementById('sectionSlt');
var nursery = document.getElementsByClassName('nurserySlt');
var primary = document.getElementsByClassName('primarySlt');
var secondary = document.getElementsByClassName('secondarySlt');


for (let i = 0; i < 4; i++) {
   apply[i].addEventListener('click',()=>{
      modal.style.display = 'flex'
   })  
}
function changeSection() {
   var sectionType = document.getElementById('sectionSlt').selectedOptions[0].value;

if (sectionType == 1) {
   nursery[0].style.display = 'inline' 
   primary[0].style.display = 'none' 
   secondary[0].style.display = 'none' 

}
else if (sectionType == 2){
   nursery[0].style.display = 'none' 
   primary[0].style.display = 'inline' 
   secondary[0].style.display = 'none' 
}
else if(sectionType == 3 ){
   primary[0].style.display = 'none' 
   primary[0].style.display = 'none' 
   secondary[0].style.display = 'inline' 

}
}


window.onclick = function(e) {
   if (e.target == modal) {
     modal.style.display = "none";
   }
 }
 function printPage() {
   // First check if all the inputs are filled, also add a pasport photograph input for child Image, and lastly we need a copy of the form and the receipt after we have paid the fees
   // if() 
   window.print()
 }