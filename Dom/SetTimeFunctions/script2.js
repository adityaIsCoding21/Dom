let bar = document.querySelector("#Bar");
console.log(bar);
let btn = document.querySelector("button");
let randomValue = Math.floor(Math.random()*100)
console.log(randomValue);
let Percentage = document.querySelector("#Percentage");
console.log(Percentage);



let grow = 0;
let check =0 
btn.addEventListener('click',()=>{

//   setTimeout(()=>{
//     btn.textContent="Wait.."
//   },1)
//   setTimeout(()=>{
//     btn.textContent="Hold Tight"
//   },900)

if(check==0){
    let int = setInterval(() => {
        // Prevent it from exceeding 100%
            grow++;
            bar.style.width = grow+"%";  // ✅ Correct property
            Percentage.textContent=grow +"%";
            if(grow===25){
                btn.textContent="On the way...🚀"
            }
    }, randomValue);
    
    setTimeout(()=>{
        clearInterval(int);
          btn.textContent="Downloded🥳"
          btn.style.opacity="0.4"
          btn.style.cursor = "url('disable.svg'), auto";
          btn.className = btn.className.replace("active:scale-88", "").trim();

    },randomValue*100);
    check =1;
}


})
