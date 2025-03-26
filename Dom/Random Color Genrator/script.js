// Select krenge jis element ka use hai

let div = document.querySelector('.div'); // iska background color chnge krna hai log
console.log(div);

let btn = document.querySelector('button'); // is pe click kr ke

btn.addEventListener('click',()=>{
    let c1 = Math.floor(Math.random()*257);
    let c2 = Math.floor(Math.random()*257);
    let c3 = Math.floor(Math.random()*257);
    div.style.backgroundColor =`rgb(${c1},${c2},${c3})`;

    console.log(c1,c2,c3);

    btn.textContent = `rgb(${c1},${c2},${c3})`;
    
})


