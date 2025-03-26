let winner = [
    {
        teamName: 'Rajasthan Royals',
        teamImg: 'https://tse4.mm.bing.net/th?id=OIP.iNJLxguDHMShN64pn-w3ugHaEK&pid=Api&P=0&h=180',
        teamDis: 'Rajasthan Royals were the first-ever IPL champions in 2008, led by Shane Warne.',
        teamCaption: 'Shane Warne',
        teamLeader: 'Shane Warne',
        teamOwner: 'Emerging Media',
        teamWinningYear: [2008],
        primaryColor: '#004ba0',  // Royal Blue
        secondaryColor: '#ea1a83'  // Pink
    },
    {
        teamName: 'Deccan Chargers',
        teamImg: 'https://tse2.mm.bing.net/th?id=OIP.rge97VxdOOtsEnPGZsAeNwAAAA&pid=Api&P=0&h=180',
        teamDis: 'Deccan Chargers won their first and only IPL title in 2009 under the leadership of Adam Gilchrist.',
        teamCaption: 'Adam Gilchrist',
        teamLeader: 'Adam Gilchrist',
        teamOwner: 'Deccan Chronicle Holdings Ltd',
        teamWinningYear: [2009],
        primaryColor: '#192f5d',  // Dark Blue
        secondaryColor: '#ffffff'  // White
    },
    {
        teamName: 'Chennai Super Kings',
        teamImg: 'https://tse3.mm.bing.net/th?id=OIP.X4CgIZC9lODb9jAgwXh_EQHaEK&pid=Api&P=0&h=180',
        teamDis: 'Chennai Super Kings have been one of the most successful IPL teams, winning multiple titles under MS Dhoni.',
        teamCaption: 'MS Dhoni',
        teamLeader: 'MS Dhoni',
        teamOwner: 'India Cements (N. Srinivasan)',
        teamWinningYear: [2010, 2011, 2018, 2021, 2023],
        primaryColor: '#f7cb14',  // Yellow
        secondaryColor: '#1c1c1c'  // Black
    },
    {
        teamName: 'Kolkata Knight Riders',
        teamImg: 'https://tse1.mm.bing.net/th?id=OIP.Y48vWkrpE4CNsEtNFMgvaQHaEK&pid=Api&P=0&h=180',
        teamDis: 'KKR won their first IPL title in 2012 and added another in 2014 under Gautam Gambhir.',
        teamCaption: 'Gautam Gambhir',
        teamLeader: 'Gautam Gambhir',
        teamOwner: 'Shah Rukh Khan, Juhi Chawla, Jay Mehta (Red Chillies Entertainment, Mehta Group)',
        teamWinningYear: [2012, 2014],
        primaryColor: '#3d0e59',  // Purple
        secondaryColor: '#d1a128'  // Gold
    },
    {
        teamName: 'Mumbai Indians',
        teamImg: 'https://tse2.mm.bing.net/th?id=OIP.bKzIOy5K5vDQVP0Wg6_i7QHaEK&pid=Api&P=0&h=180',
        teamDis: 'Mumbai Indians are one of the most dominant teams in IPL history, winning five titles under Rohit Sharma.',
        teamCaption: 'Rohit Sharma',
        teamLeader: 'Rohit Sharma',
        teamOwner: 'Reliance Industries (Mukesh Ambani)',
        teamWinningYear: [2013, 2015, 2017, 2019, 2020],
        primaryColor: '#045093',  // Blue
        secondaryColor: '#d1af26'  // Gold
    },
    {
        teamName: 'Sunrisers Hyderabad',
        teamImg: 'https://tse2.mm.bing.net/th?id=OIP.O4yeexGSo78ZeKghPHevUgHaEK&pid=Api&P=0&h=180',
        teamDis: 'SRH won their first IPL title in 2016 under David Warner’s leadership.',
        teamCaption: 'David Warner',
        teamLeader: 'David Warner',
        teamOwner: 'Sun TV Network',
        teamWinningYear: [2016],
        primaryColor: '#fb4f14',  // Orange
        secondaryColor: '#000000'  // Black
    },
    {
        teamName: 'Gujarat Titans',
        teamImg: 'https://wallpapercave.com/wp/wp11073260.jpg',
        teamDis: 'Gujarat Titans made history by winning the IPL in their debut season in 2022 under Hardik Pandya.',
        teamCaption: 'Hardik Pandya',
        teamLeader: 'Hardik Pandya',
        teamOwner: 'CVC Capital Partners',
        teamWinningYear: [2022],
        primaryColor: '#1c2b36',  // Dark Blue
        secondaryColor: '#d1b380'  // Gold
    },
    {
        teamName: 'Delhi Capitals',
        teamImg: 'https://tse1.mm.bing.net/th?id=OIP.maAieT7RNI8GY9jcg7bd1QHaEK&pid=Api&P=0&h=180',
        teamDis: 'Delhi Capitals reached the IPL final in 2020 but have yet to secure a title.',
        teamCaption: 'Shreyas Iyer',
        teamLeader: 'Shreyas Iyer',
        teamOwner: 'JSW-GMR Group',
        teamWinningYear: ["NA"],
        primaryColor: '#17449b',  // Blue
        secondaryColor: '#c72027'  // Red
    },
    {
        teamName: 'Royal Challengers Bangalore',
        teamImg: 'https://tse2.mm.bing.net/th?id=OIP.dxwz7pzCAo58-cIrEAEYrwHaEK&pid=Api&P=0&h=180',
        teamDis: 'RCB has been one of the most popular teams in IPL history but is yet to win the title.',
        teamCaption: 'Virat Kohli',
        teamLeader: 'Virat Kohli',
        teamOwner: 'United Spirits',
        teamWinningYear: ["NA"],
        primaryColor: '#d41620',  // Red
        secondaryColor: '#000000'  // Black
    },
    {
        teamName: 'Lucknow Super Giants',
        teamImg: 'https://wallpaperaccess.com/full/9312834.png',
        teamDis: 'Lucknow Super Giants joined IPL in 2022 but are yet to win a title.',
        teamCaption: 'KL Rahul',
        teamLeader: 'KL Rahul',
        teamOwner: 'RPSG Group (Sanjiv Goenka)',
        teamWinningYear: ["NA"],
        primaryColor: '#005eb8',  // Blue
        secondaryColor: '#ffea00'  // Yellow
    }
];


let btn = document.querySelector("button");
console.log(btn);


let imgDiv = document.querySelector('.div');
console.log(imgDiv);

let dis = document.querySelector(".dis");
let dish5 =document.querySelector(".dis h5")
let dish3 = document.querySelector(".dis h3")
let dish6 =document.querySelector(".dis h6")
let year =document.querySelector("#year");


console.log(dish3, dish5 , dish6 , year );

let discrip = document.querySelector("#detail")

// year.textContent = `teamWinningYear: ${[2002]}`

// Random Gussing after Click...

btn.addEventListener('click',()=>{
    let randomNum = Math.floor(Math.random()*winner.length);
    console.log(randomNum);
    imgDiv.style.backgroundImage = `url('${winner[randomNum].teamImg}')`;
    dish3.textContent ="Team Name : "+ winner[randomNum].teamName;
    dish3.style.color = `${winner[randomNum].primaryColor}`
    dis.style.backgroundColor = winner[randomNum].secondaryColor
    dish5.style.color = `${winner[randomNum].primaryColor}`
    dish5.textContent="Team Caption : "+ winner[randomNum].teamCaption
    dish6.textContent ="Team Owner : "+winner[randomNum].teamOwner
    dish6.style.color = `${winner[randomNum].primaryColor}`
    year.style.color = `${winner[randomNum].primaryColor}`
    year.textContent = "Winning Year: " +winner[randomNum].teamWinningYear
    discrip.style.color=winner[randomNum].primaryColor
    discrip.textContent=winner[randomNum].teamDis
    
})






