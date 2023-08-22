const inputBox = document.getElementById("input-box");
const containerList = document.getElementById("list-container");

function addList(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        containerList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value='';
}

containerList.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data", containerList.innerHTML);
}

function showSavedData(){
    containerList.innerHTML=localStorage.getItem("data");
}

showSavedData();