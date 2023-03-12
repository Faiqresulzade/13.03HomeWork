var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

fetch("https://api.tvmaze.com/show")
.then((response)=>response.json()
.then((data)=>BestMovie(data)));

let bestMovie=document.getElementById("spinner");
let allMovie=document.querySelector(".AllMovie")

console.log(bestMovie);

function BestMovie(arr) {
    AllMovio(arr);
    for(let i=0;i<8;i++){
        //console.log(arr[0].image.medium)
        bestMovie.innerHTML+=`
        <img style={height="200px"} src="${arr[i].image.medium}" alt>
`
    }
}
function AllMovio(arr){
    for(let i=0;i<10;i++){
allMovie.innerHTML+=`
            <div class="flip">
                <div class="front" style="background-image: url(${arr[i].image.medium})">
                  <h1 class="text-shadow">${arr[i].name}</hi>
                </div>
                <div class="back">
                  <h2>${arr[i].genres[0]}</h2>
                  ${arr[i].summary}
                </div>
            </div>`
    }
}