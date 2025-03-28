// console.log("hello");

// -------------------------------------SetTimeOut-----------------------------------

// SetTImeOut == Delay

// humre js syncrouns work karta hai mtalb line by line code ko execute karta hai lekin hum usko asynchronous bana sakta ahi 
// syntx  ====>   setTImeOut(Fun(){},timeInMiliSec);

var a = 3
console.log(a); // ye turnat execute ho jayega 

setTimeout(function(){
    console.log("hello 1");
    
},3000) // ye code 3sec baad excute hoga 
var b = 6
console.log(b); // ye bhi turant execute ho jaygea 

setTimeout(function(){
    console.log("hello 2");
    
},6000)  // ye code 6 sec baad 


// uper sare code ka output =====>>>   3 6 hello1 hello2 ========>>>hoga


// agar hum hello 2 wala function phle likh de hello 1 wale se to bhi pahle hello1 he print hoga bd mei hello 2
// 3,4,hello1,hello2
// jiska time kam hoga vo pahle execute hoga


//------------------------------Project 1-----------------------------------------------
 let st =  document.querySelector(".status h4");

 console.log(st);

 let btn = document.querySelector("button");

 let Username = document.querySelector("#userName").textContent
 console.log(Username);

 
 
 let check = 0;

 btn.addEventListener("click",()=>{
    st.textContent="Request Send🫡...."
    st.style.color="yellow";
if(check===0){
    setTimeout(function(){
        st.textContent="Friend😍🥳🥂" ;
        st.style.color="green";
       btn.textContent ="Remove Friend🤔"
       btn.style.background="red";
    },3000)
    check =1;
}
else{
    st.textContent="Stranger👻" ;
        st.style.color="rgb(181, 1, 1)";
       btn.textContent ="Add Friend 😄😉"
       btn.style.background="rgb(15, 222, 15)";
       check=0;
}

 })

 