///-------------------------------------------Glow Bulb----------------------------------------------------

// Select All Element 

let Bulb= document.getElementsByClassName('box'); // getElementsByClassName give html collection
console.log(Bulb);

let check = 0

let btn = document.querySelector('.btn') // querySelector dont give collection
console.log(btn);
btn.addEventListener('click',()=>{
 if(check===0){
       btn.textContent="On"
       Bulb[0].style.backgroundColor ="#FFA725";
       check = 1;
 }
 else{
       btn.textContent="off"
Bulb[0].style.backgroundColor ="#fff"
check =0;

 }
})

