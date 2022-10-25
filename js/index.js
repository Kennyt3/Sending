let form = document.getElementById("form");
let listcon = document.getElementById("todo__list")



function onDelete(){
let parent = document.getElementById("todo__list")
let child = parent.lastElementChild
parent.removeChild(child)
}

function selectButtons(){
let collectButtons = document.querySelectorAll(".delete__btn")
let lastButton = collectButtons[collectButtons.length - 1]

lastButton.addEventListener("click", onDelete)
}


function onFormSubmit(todo){
let li = document.createElement("li")
li.classList.add("todo__section--todoItem") 
li.innerHTML = `
<div class= "div-main-wrapper">
    <input class="todo__checkbox" type="checkbox" />
    <span class="todo__text"> ${todo} </span>
    <div class="todo__actions--wrapper">
        <button id="edit_btn" class="todo__actions edit__btn">edit</button>
        <button id="delete_btn" class="todo__actions delete__btn">delete</button>
    </div>
</div>
`
listcon.appendChild(li)
selectButtons()

}



function onFormSubmitHandler(e){
e.preventDefault();
let input = document.getElementById("todo__input");
let inputValue = input.value

onFormSubmit(inputValue)

input.value = " "

}
form.addEventListener("submit", onFormSubmitHandler)