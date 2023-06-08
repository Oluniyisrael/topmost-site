var modal = document.getElementById('modal');
var apply = document.getElementsByClassName('apply');
var sectionSlt = document.getElementById('sectionSlt');
var sectionType = sectionSlt.selectedOptions[0].value;
var nursery = document.getElementsByClassName('nursery');
var primary = document.getElementsByClassName('primary');
var secondary = document.getElementsByClassName('secondary');


for (let i = 0; i < 4; i++) {
   apply[i].addEventListener('click',()=>{
    modal.style.display = 'block'
   })  
}
for (let i = 0; i < 6; i++) {
if (sectionType == 1) {
   primary[i].style.display = 'none'
   secondary[i].style.display = 'none'
}
else if (sectionType == 2){
   nursery[i].style.display = 'none'
   secondary[i].style.display = 'none'
}
else if(sectionType == 3 ){
   nursery[i].style.display = 'none'
   primary[i].style.display = 'none'
}
}
// for (let i = 0; i < 6; i++) {
//    document.getElementsByClassName('secondary')[i].style.display = 'none'
//    }
   
// modal.addEventListener('click',()=>{
//     modal.style.display='none'
// })