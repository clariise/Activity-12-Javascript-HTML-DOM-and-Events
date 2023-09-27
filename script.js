
document.querySelector("#addTask").addEventListener("click",() =>{
     if(document.querySelector("#inputText").value != ""){
    document.querySelector("#taskArea").innerHTML +=
    ` <div>
    <button class="btn btn-primary markButton">☑️</button>
    <span>${document.querySelector("#inputText").value}</span>
    </div> <hr>`;
    document.querySelector("#inputText").value="";
}
    else {
    alert("Field is empty!");
}

const markButtons = document.querySelectorAll(".markButton");
markButtons.forEach((markButton)=>{
    markButton.addEventListener("click", (event) =>{
        event.target.parentElement.lastElementChild.style = "text-decoration-line: line-through; font-weight: 900; color: red;";
        event.target.remove();
    });
});
});