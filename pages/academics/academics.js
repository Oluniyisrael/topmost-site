var modal = document.getElementById('modal');
var apply = document.getElementsByClassName('apply');

for (let i = 0; i < 4; i++) {
   apply[i].addEventListener('click',()=>{
    modal.style.display = 'block'
   })
    
}
// modal.addEventListener('click',()=>{
//     modal.style.display='none'
// })