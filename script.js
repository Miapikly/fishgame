const fish = [
    {
        name: "Corpse",
        price: "Jail probably",
        image: "corpse.jpg",
        amount: 5
    },
    {
        name: "Skeleton Panda Sea Squirt",
        price: "500",
        image: "seasquirt.jpg",
        amount: 5

    },
    {
        name: "Moon Jelly",
        price: "75",
        image: "moonjelly.jpg",
        amount: 10
    },
    {
        name: "Portuguese man O'War",
        price: "200",
        image: "manofwar.webp",
        amount: 10
    },
    {
        name: "Flapjack Octopus",
        price: "210",
        image: "flapjack.jpg",
        amount: 5
    },
    {
        name: "Nudibranch",
        price: "619",
        image: "nudibranch.jpg",
        amount: 5
    },
    {
        name: "Sardine",
        price: "15",
        image: "sardine.jpg",
        amount: 25
    },
    {
        name: "Pyjama Squid",
        price: "500",
        image: "pyjama.jpg",
        amount: 5
    },
    {
        name: "Manta Ray",
        price: "1332",
        image: "manta.jpg",
        amount: 4
    },
    {
        name: "Tuna",
        price: "33",
        image: "tuna.jpg",
        amount: 25
    },
    {
        name: "Salmon",
        price: "55",
        image: "salmon.jpg",
        amount: 25
    },
    {
        name: "You couldn't catch any fish! You wasted some bait :(",
        price: "-15",
        image: "open-hands.jpg",
        amount: 50
    },
    {
        name: "Longhorn Cowfish",
        price: "100",
        image: "cowfish.webp",
        amount: 10
    },
    {
        name: "Lumpfish",
        price: "125",
        image: "lumpfish.webp",
        amount: 10
    },
    {
        name: "Sergeant Major",
        price: "110",
        image: "sergeant.jpg",
        amount: 15
    },
    {
        name: "Catshark",
        price: "250",
        image: "catshark.webp",
        amount: 5
    },
    {
        name: "Catfish",
        price: "50",
        image: "catfish.jpg",
        amount: 25
    },
    {
        name: "Octopus",
        price: "210",
        image: "octopus.jpg",
        amount: 10
    }
]

//global variables

const container = document.getElementById("fishContainer");
const win = document.getElementById("profit")
let profit=0;

let timerStarted = false;
let time = 15;
let interval;

let scores = [];

//function for randomly selecting fish

function startFish(){

    let html="";
    let randomNumber=Math.floor(Math.random()*268);
    console.log(randomNumber);
    let number = randomNumber;
    console.log(profit);
    let gain = `<h3 class="earnings">Profit: $${profit}</h3>`;
    document.getElementById('profit').innerHTML=gain;

    document.querySelector(".play").disabled=false;

    //Play again function

    if(timerStarted == false){
        timerStarted = true;
        interval = setInterval(() => {
            console.log("time", time)
            time--;
            if(time<=0){
                let score=profit;
                scores.push(score);
                let end = document.getElementById("fishContainer")
                end.innerHTML+=`<h3>Your final profit is $${score}</h3>
                </br>
                <h3>If you wish to play again:
                <ul>
                <li>Click the button below 
                <li>Start fishing again by pressing the fish button!</li> 
                </ul>
                </br> 
                <button onclick="reset()">Play again?</button>`
                profit=0;
                document.querySelector(".play").disabled = true;
                clearInterval(interval);
            }
        }, 1000);
        
    }

    //Function for displaying fish

    if(number<26){
        console.log(profit);
        console.log(fish[10]);
        html +=
        `<div class="fished">
        <img src="${fish[10].image}" width="500px">
        <h3>Name: ${fish[10].name}</h3>
        <h3>Price: $${fish[10].price}</h3>
        </div>`;
        container.innerHTML=html;

        return profit += parseInt(fish[10].price);
    } else if(number<51 && number>26){
        console.log(fish[9]);
        html +=
        `<div class="fished">
        <img src="${fish[9].image}" width="500px">
        <h3>Name: ${fish[9].name}</h3>
        <h3>Price: $${fish[9].price}</h3>
        </div>`;
        container.innerHTML=html;

        return profit += parseInt(fish[9].price);
    } else if(number<76 && number>51){
        console.log(fish[6]);
        html +=
        `<div class="fished">
        <img src="${fish[6].image}" width="500px">
        <h3>Name: ${fish[6].name}</h3>
        <h3>Price: $${fish[6].price}</h3>
        </div>`;
        container.innerHTML=html;

        return profit += parseInt(fish[6].price);
    } else if(number<86 && number>76){
        console.log(fish[2]);
        html +=
        `<div class="fished">
        <img src="${fish[2].image}" width="500px">
        <h3>Name: ${fish[2].name}</h3>
        <h3>Price: $${fish[2].price}</h3>
        </div>`;
        container.innerHTML=html;

        return profit += parseInt(fish[2].price);
    } else if(number<96 && number>86){
        console.log(fish[3]);
        html +=
        `<div class="fished">
        <img src="${fish[3].image}" width="500px">
        <h3>Name: ${fish[3].name}</h3>
        <h3>Price: $${fish[3].price}</h3>
        </div>`;
        container.innerHTML=html;

        return profit += parseInt(fish[3].price);
    } else if(number<101 && number>96){
        console.log(fish[7]);
        html +=
        `<div class="fished">
        <img src="${fish[7].image}" width="500px">
        <h3>Name: ${fish[7].name}</h3>
        <h3>Price: $${fish[7].price}</h3>
        </div>`;
        container.innerHTML=html;

        return profit += parseInt(fish[7].price);
    } else if(number<106 && number>101){
        console.log(fish[5]);
        html +=
        `<div class="fished">
        <img src="${fish[5].image}" width="500px">
        <h3>Name: ${fish[5].name}</h3>
        <h3>Price: $${fish[5].price}</h3>
        </div>`;
        container.innerHTML=html;

        return profit += parseInt(fish[5].price);
    } else if(number<111 && number>106){
        console.log(fish[4]);
        html +=
        `<div class="fished">
        <img src="${fish[4].image}" width="500px">
        <h3>Name: ${fish[4].name}</h3>
        <h3>Price: $${fish[4].price}</h3>
        </div>`;
        container.innerHTML=html;

        return profit += parseInt(fish[4].price);
    } else if(number<121 && number>111){
        console.log(fish[3]);
        html +=
        `<div class="fished">
        <img src="${fish[3].image}" width="500px">
        <h3>Name: ${fish[3].name}</h3>
        <h3>Price: $${fish[3].price}</h3>
        </div>`;
        container.innerHTML=html;

        return profit += parseInt(fish[3].price);
    } else if(number<126 && number>121){
        console.log(fish[2]);
        html +=
        `<div class="fished">
        <img src="${fish[2].image}" width="500px">
        <h3>Name: ${fish[2].name}</h3>
        <h3>Price: $${fish[2].price}</h3>
        </div>`;
        container.innerHTML=html;

        return profit += parseInt(fish[2].price);
    } else if(number<132 && number>128){
        console.log(fish[8]);
        html +=
        `<div class="fished">
        <img src="${fish[8].image}" width="500px">
        <h3>Name: ${fish[8].name}</h3>
        <h3>Price: $${fish[8].price}</h3>
        </div>`;
        container.innerHTML=html;

        return profit += parseInt(fish[8].price);
    } else if(number<137 && number>132){
        console.log(fish[1]);
        html +=
        `<div class="fished">
        <img src="${fish[1].image}" width="500px">
        <h3>Name: ${fish[1].name}</h3>
        <h3>Price: $${fish[1].price}</h3>
        </div>`;
        container.innerHTML=html;

        return profit += parseInt(fish[1].price);

    
    } else if(number<187 && number>137){
        console.log(fish[11]);
        html +=
        `<div class="fished">
        <img src="${fish[11].image}" width="500px">
        <h3>Name: ${fish[11].name}</h3>
        <h3>Price: $${fish[11].price}</h3>
        </div>`;
        container.innerHTML=html;

        return profit += parseInt(fish[11].price);
    }     else if(number<192 && number>187){
        console.log(fish[0]);
        html +=
        `<div class="fished">
        <img src="${fish[0].image}" width="500px">
        <h3>Name: ${fish[0].name}</h3>
        <h3>Price: ${fish[0].price}</h3>
        </div>`;
        container.innerHTML=html;

        profit=0
    }   else if(number<202 && number>192){
        console.log(fish[12]);
        html +=
        `<div class="fished">
        <img src="${fish[12].image}" width="500px">
        <h3>Name: ${fish[12].name}</h3>
        <h3>Price: $${fish[12].price}</h3>
        </div>`;
        container.innerHTML=html;
    }else if(number<212 && number>202){
        console.log(fish[13]);
        html +=
        `<div class="fished">
        <img src="${fish[13].image}" width="500px">
        <h3>Name: ${fish[13].name}</h3>
        <h3>Price: $${fish[13].price}</h3>
        </div>`;
        container.innerHTML=html;
    }else if(number<227 && number>212){
        console.log(fish[14]);
        html +=
        `<div class="fished">
        <img src="${fish[14].image}" width="500px">
        <h3>Name: ${fish[14].name}</h3>
        <h3>Price: $${fish[14].price}</h3>
        </div>`;
        container.innerHTML=html;
    }else if(number<232 && number>227){
        console.log(fish[15]);
        html +=
        `<div class="fished">
        <img src="${fish[15].image}" width="500px">
        <h3>Name: ${fish[15].name}</h3>
        <h3>Price: $${fish[15].price}</h3>
        </div>`;
        container.innerHTML=html;
    }else if(number<257 && number>232){
        console.log(fish[16]);
        html +=
        `<div class="fished">
        <img src="${fish[16].image}" width="500px">
        <h3>Name: ${fish[16].name}</h3>
        <h3>Price: $${fish[16].price}</h3>
        </div>`;
        container.innerHTML=html;
    }else if(number<267 && number>257){
        console.log(fish[17]);
        html +=
        `<div class="fished">
        <img src="${fish[17].image}" width="500px">
        <h3>Name: ${fish[17].name}</h3>
        <h3>Price: $${fish[17].price}</h3>
        </div>`;
        container.innerHTML=html;
    }
}

//function to restart the game

function reset(){
    document.querySelector(".play").disabled=false;
    timerStarted = false;
    time = 15;
}
