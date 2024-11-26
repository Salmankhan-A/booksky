var popupOverlay=document.querySelector(".popup-overlay")
var popupBox=document.querySelector(".popup-box")
var addPopupButton=document.getElementById("add-popup-button")
var cancelButton=document.getElementById("cancel-popup")
var container=document.querySelector(".container")
var bookTitle=document.getElementById("book-title")
var bookAuthor=document.getElementById("book-Author")
var description=document.getElementById("description")
var addBookForm=document.getElementById("add-book-form")

addPopupButton.addEventListener("click",function(){
    popupOverlay.style.display="block"
    popupBox.style.display="block"
})


cancelButton.addEventListener("click",function(){
    popupOverlay.style.display="none"
    popupBox.style.display="none"
})



addBookForm.addEventListener("submit",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bookTitle.value}</h2>
    <h5>${bookAuthor.value}</h5>
    <p>${description.value}</p>
    <button onclick="deleteBook(event)">Delete</button>`
    container.append(div)
})

function deleteBook(event){
    event.target.parentElement.remove()
}

