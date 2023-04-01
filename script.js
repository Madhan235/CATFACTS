async function getdata() {

    var url = await fetch("https://cat-fact.herokuapp.com/facts");
    var res = await url.json();
    console.log(res);

    var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
//to add multiple classes to the same element
row.classList.add("row","m-3");
container.append(row);

for(var i=0;i<res.length;i++){
    row.innerHTML+=
    `<div class="col-md-4">
    <div class="card border-primary mb-3" style="max-width: 18rem;">
    <h2 class="card-title"> ${res[i].type}</h2>
    <div class="card-body text-primary">
    <h5 class="card-title">${res[i].text}</h5>
      <p class="card-text"> user : ${res[i].user}</p>
      <p class="card-text">id : ${res[i]._id}</p>
      <p class = "card-text">source : ${res[i].source}</p>
    </div>
  </div>
  </div>`
}
document.body.append(container);

}
getdata()