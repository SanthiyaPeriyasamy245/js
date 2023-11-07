//select outbox inbox add-button
var outside=document.querySelector(".outbox")
var inside=document.querySelector(".inbox")
var a=document.getElementById("add")
a.addEventListener("click",function(){
    outside.style.display="block"
    inside.style.display="block"

})

// select delete button
var del=document.getElementById("delete")
del.addEventListener("click",function(event){
    event.preventDefault()
    outside.style.display="none"
    inside.style.display="none"
})
// select add button which is inside the form ,booktitle,author name,description
var container=document.querySelector(".container")
var bookName=document.getElementById("book-name")
var author=document.getElementById("author-name")
var description=document.getElementById("Short-description")
var addButton=document.getElementById("additional")
addButton.addEventListener("click",function(event)
{
    event.preventDefault()
    var box=document.createElement("div")
    box.setAttribute("class","book-container")
    box.innerHTML=`<h2>${bookName.value}</h2>
           <h5>${author.value}</h5>
           <p>${description.value}</p>
            <button onclick="destroy(event)">delete</button>`
    container.append(box)
    outside.style.display="none"
    inside.style.display="none"

})
function destroy(even)
{
   event.target.parentElement.remove()  
}

