var modal = document.getElementById('modal');
var apply = document.getElementsByClassName('apply');
var sectionSlt = document.getElementById('sectionSlt');
var nursery = document.getElementsByClassName('nurserySlt');
var primary = document.getElementsByClassName('primarySlt');
var secondary = document.getElementsByClassName('secondarySlt');


for (let i = 0; i < 4; i++) {
   apply[i].addEventListener('click',()=>{
      modal.style.display = 'block'
   })  
}
function changeSection() {
   var sectionType = document.getElementById('sectionSlt').selectedOptions[0].value;

if (sectionType == 1) {
   nursery[0].style.display = 'block' 
   primary[0].style.display = 'none' 
   secondary[0].style.display = 'none' 

}
else if (sectionType == 2){
   nursery[0].style.display = 'none' 
   primary[0].style.display = 'block' 

}
else if(sectionType == 3 ){
   primary[0].style.display = 'none' 
   secondary[0].style.display = 'block' 

}
}

// for (let i = 0; i < 6; i++) {
//    document.getElementsByClassName('secondary')[i].style.display = 'none'
//    }
   
// modal.addEventListener('click',()=>{
//     modal.style.display='none'
// })