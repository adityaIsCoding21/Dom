// Pahle sare team ke naam array mei dalenge...
 let arr = ['CSK', 'RCB', 'KKR', 'MI', 'PBKS', 'MI','KKR', 'RR', 'LSG', 'DC', 'GT'];
 console.log(arr.length);

 // Select the elmeent jiski jarurt hai....

 let h1 = document.querySelector('h1');
 let displayTeamName = document.querySelector('.displayTeamName');
 let btn = document.querySelector('.btn');

 btn.addEventListener('click',()=>{
    // Pahle random value genrate krenge...
    let indx = Math.floor(Math.random()*arr.length)
    console.log(indx);
// team ka naam...
    let teamName = arr[indx];
    console.log(teamName);

// set the team ka naam..

displayTeamName.textContent=teamName;
h1.textContent = `${teamName} Will Win 2025 ${"🙌🥂🥳"}`

    

    
 })


 