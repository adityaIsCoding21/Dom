// Dom Class 1

// Dom Stand for Document Object Model

// 4 piller of DOM

// 1-Selection
// 2-Change Html
// 3-Change css
// 4- event Listener




// Selection ✅
let h1 = document.querySelector('h1');
console.log(h1);


// Change InnerHtml ✅
h1.innerHTML = "Change Using Dom😍"; 


// Change Css ✅
h1.style.backgroundColor="#FF6B01";

// Event Listener✅
h1.addEventListener('click',()=>{
    h1.innerHTML = "Change Using Dom After Click😍👆"; 


// Change Css ✅
h1.style.backgroundColor="#6793AC";
    console.log("Hello After Click👆")
})


// Advance level....

// Suppose humre pass bhut se element hai aur sbko ek sath select krne hai to....
// querSelectorAll ka use krenge jo ek nodelist rertun krega jo ki simillar hota hai array ki trh....

let allH1 = document.querySelectorAll('h1');

console.log(allH1); 

allH1[2].style.backgroundColor ="white"
allH1[2].style.color ="red"

// agr hume kisi id ya class se select krna hwa to....
// .getElementById('#id') or getElementByClass('.class')

let sech2 = document.getElementById('sech1')
console.log(sech2);









