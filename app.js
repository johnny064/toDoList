// selecting the text Area

var toDoText = document.getElementById("textArea");

var inputBtn = document.getElementById("inputBtn");
var itemList = document.querySelector(".item-list");



       // console.log("I am Kazi");
     
       
       inputBtn.addEventListener("click", function(e){
              e.preventDefault();
              
              // Create li element
              var toDoList =document.createElement("li");

              toDoList.classList.add("itemList");
              toDoList.innerText= toDoText.value;
              
              itemList.appendChild(toDoList);
              
              toDoText.value = "";

              // create checkmark button
              
       })
 
       
       

