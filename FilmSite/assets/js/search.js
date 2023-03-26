let searchbtn=document.querySelector(".search-button")
let searchInput=document.querySelector(".search-input")

searchbtn.addEventListener("click",()=>{
    console.log("hello");
allMovie.innerHTML="";
fetch("https://api.tvmaze.com/search/shows?q="+searchInput.value)
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
    data.forEach(element => {
        allMovie.innerHTML+=`
        <div class="flip">
                    <div class="front" style="background-image: url(${element.show.image?.medium})">
                      <h1 class="text-shadow">${element.show.name}</hi>
                    </div>
                    <div class="back">
                      <h2>${element.show.genres[0]}</h2>
                      ${element.show.summary}
                      <a class="btn btn-primary" href="details.html?id=${element.show.id}">See More </a> 
                    </div>
                </div>
                     `
    });
   
})
})
