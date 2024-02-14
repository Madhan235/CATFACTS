 

async function getdata() {

  try {

    if(!url){  var loadingpara = document.createElement("p")
    loadingpara.className = "loading";
    loadingpara.innerHTML = "Please wait While Fetching Data..."
    document.body.appendChild(loadingpara);}

    var url = await fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=50");

 
 
    var res = await url.json();
    
var container = document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);
console.log(res);
for(var i=0;i<res.length;i++){

  function generateRandomSingleDigit() {
    return Math.floor(Math.random() * 10);
}
var num =Math.round(generateRandomSingleDigit());
 
    row.innerHTML+=
    `<div class="col-lg-4 col-md-6 col-sm-12 card-container">
    <div class="card mb-3" style="max-width: 22rem;">
    <img src="./images/cat${num}.jpg"alt="catImg"/>
    <h2 class="card-title">Fact No : ${i+1}</h2>
    <div class="card-body text-primary">
    <h5 class="card-title">${res[i].text}</h5>
      <p class="card-text"> User : ${res[i].user} </p>
      <p class="card-text">Updated : ${res[i].updatedAt}</p>
       
    </div>
  </div>
  </div>`
}
document.body.removeChild(loadingpara);

document.body.append(container);

  } catch (error) {
    console.log(error);
  }

   
}

 
 getdata()

  

 
  
 
 