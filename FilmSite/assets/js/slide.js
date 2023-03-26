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
let btn_seeMore=document.querySelector("#btn-seeMore")
//console.log(bestMovie);

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
                  <a class="btn btn-primary" href="details.html?id=${arr[i].id}">See More </a> 
                </div>
            </div>`
    }
}
//btn_seeMore.addEventListener("click",)

// //DETAILS
// let detailsContainer=document.querySelector(".detailsContainer")
// let getId=window.location.search.slice(4)
// fetch("https://api.tvmaze.com/shows/"+getId)
// .then((response)=>response.json()
// .then((data)=>{
//     detailsContainer.innerHTML+=`
//     <div class="fb-offset-inner">
//                     <div class="image"><img  src="${data.image.medium}" alt=""></div>
//                     <div class="content">
//                         <h2>${data.name}</h2>
//                         ${data.summary}
//                         <div class="imbdAbdGenres" style="display-flex !important">
//                             <p><b>IMDB:</b> ${data.rating.average}</p>
//                             <p><b>Genres:</b> ${data.genres[0]}</p>
//                         </div>
                        
//                         <p><b>Language:</b>${data.language}</p>
//                     </div>
//                 </div>
//     `
// }))

