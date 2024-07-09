const input= document.getElementById("item");
const ul = document.querySelector("ul");


let itemstring = localStorage.getItem("items");
let itemsArray;
if(itemstring!=null){
    itemsArray=JSON.parse(itemstring);
}
else{
    itemsArray=[];
}

// let itemsArray = localStorage.getItem("items")?
// JSON.parse(localStorage.getItem("items")):[];
itemsArray.forEach(addTask);
function addTask(text){
    const li = document.createElement("li");
    li.textContent=text;
    ul.appendChild(li);
}
function add(){
    itemsArray.push(input.value);
    localStorage.setItem("items",JSON.stringify(itemsArray));
    addTask(input.value);
    // input.value='';
}
function del(){
    localStorage.clear();
    itemsArray=[];
    ul.innerHTML="";
}
