var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((value) => bar(value))

var container=document.createElement("div")
container.className="container"
var row=document.createElement("div")
row.className="row"
container.append(row)

function bar(value){
    for(var i=0; i<16;i++){
        row.innerHTML+=`
        <div class="col-md-3">
        <div class="card border-primary mb-3"style="max-width:18rem;">
        <div class="card-body text-primary">
        <h5 class="card-title">Name:Leanne Graham</h5>
        <h5 class="card-title">Email:sincere@april.biz</h5>
        <h5 class="card-title">street:kulas Light</h5>
        <h5 class="card-title">city:Gwenborought</h5>
        </div>
        </div>
         `
    }
    document.body.append(container);
}