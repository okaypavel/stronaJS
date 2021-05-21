// div1
const newDiv1 = document.createElement('div')
const idDiv1 = newDiv1.id = "div-1"
newDiv1.id = idDiv1
newDiv1.setAttribute("class", "div1")
const span1a = document.createElement('span')
span1a.innerText = "Book 1"
const paragraf1b = document.createElement('p')
paragraf1b.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit at alias beatae quos assumenda, ad earum minus aperiam? Laudantium, distinctio facilis. Ipsa accusamus maiores aut assumenda vero voluptates, et deleniti laboriosam, aperiam dolorem sed eaque."
const button1 = document.createElement('button')
button1.innerText = "Delete"
button1.setAttribute("onclick", "del1(value)")
button1.setAttribute("class", "delete")

// div2
const newDiv2 = document.createElement('div')
const idDiv2 = newDiv2.id = "div-2"
newDiv2.id = idDiv2
newDiv2.setAttribute("class", "div2")
const span2a = document.createElement('span')
span2a.innerText = "Book 2"
const paragraf2b = document.createElement('p')
paragraf2b.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit at alias beatae quos assumenda, ad earum minus aperiam? Laudantium, distinctio facilis. Ipsa accusamus maiores aut assumenda vero voluptates, et deleniti laboriosam, aperiam dolorem sed eaque."
const button2 = document.createElement('button')
button2.innerText = "Delete"
button2.setAttribute("onclick", "del2(value)")
button2.setAttribute("class", "delete")

// div3
const newDiv3 = document.createElement('div')
const idDiv3 = newDiv3.id = "div-3"
newDiv3.id = idDiv3
newDiv3.setAttribute("class", "div3")
const span3a = document.createElement('span')
span3a.innerText = "Book 3"
const paragraf3b = document.createElement('p')
paragraf3b.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit at alias beatae quos assumenda, ad earum minus aperiam? Laudantium, distinctio facilis. Ipsa accusamus maiores aut assumenda vero voluptates, et deleniti laboriosam, aperiam dolorem sed eaque."
const button3 = document.createElement('button')
button3.innerText = "Delete"
button3.setAttribute("onclick", "del3(value)")
button3.setAttribute("class", "delete")

// div4
const newDiv4 = document.createElement('div')
const idDiv4 = newDiv4.id = "div-4"
newDiv4.id = idDiv4
newDiv4.setAttribute("class", "div4")
const span4a = document.createElement('span')
span4a.innerText = "Book 4"
const paragraf4b = document.createElement('p')
paragraf4b.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit at alias beatae quos assumenda, ad earum minus aperiam? Laudantium, distinctio facilis. Ipsa accusamus maiores aut assumenda vero voluptates, et deleniti laboriosam, aperiam dolorem sed eaque."
const button4 = document.createElement('button')
button4.innerText = "Delete"
button4.setAttribute("onclick", "del4(value)")
button4.setAttribute("class", "delete")

// div5
const newDiv5 = document.createElement('div')
const idDiv5 = newDiv5.id = "div-5"
newDiv5.id = idDiv5
newDiv5.setAttribute("class", "div5")
const span5a = document.createElement('span')
span5a.innerText = "Book5 "
const paragraf5b = document.createElement('p')
paragraf5b.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit at alias beatae quos assumenda, ad earum minus aperiam? Laudantium, distinctio facilis. Ipsa accusamus maiores aut assumenda vero voluptates, et deleniti laboriosam, aperiam dolorem sed eaque."
const button5 = document.createElement('button')
button5.innerText = "Delete"
button5.setAttribute("onclick", "del5(value)")
button5.setAttribute("class", "delete")

// div6
const newDiv6 = document.createElement('div')
const idDiv6 = newDiv6.id = "div-6"
newDiv6.id = idDiv6
newDiv6.setAttribute("class", "div6")
const span6a = document.createElement('span')
span6a.innerText = "Book 6"
const paragraf6b = document.createElement('p')
paragraf6b.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit at alias beatae quos assumenda, ad earum minus aperiam? Laudantium, distinctio facilis. Ipsa accusamus maiores aut assumenda vero voluptates, et deleniti laboriosam, aperiam dolorem sed eaque."
const button6 = document.createElement('button')
button6.innerText = "Delete"
button6.setAttribute("onclick", "del6(value)")
button6.setAttribute("class", "delete")



// add div/p/button
newDiv1.appendChild(span1a)
newDiv1.appendChild(paragraf1b)
newDiv1.appendChild(button1)
grid.appendChild(newDiv1)

newDiv2.appendChild(span2a)
newDiv2.appendChild(paragraf2b)
newDiv2.appendChild(button2)
grid.appendChild(newDiv2)

newDiv3.appendChild(span3a)
newDiv3.appendChild(paragraf3b)
newDiv3.appendChild(button3)
grid.appendChild(newDiv3)

newDiv4.appendChild(span4a)
newDiv4.appendChild(paragraf4b)
newDiv4.appendChild(button4)
grid.appendChild(newDiv4)

newDiv5.appendChild(span5a)
newDiv5.appendChild(paragraf5b)
newDiv5.appendChild(button5)
grid.appendChild(newDiv5)

newDiv6.appendChild(span6a)
newDiv6.appendChild(paragraf6b)
newDiv6.appendChild(button6)
grid.appendChild(newDiv6)


function del1(value) {
    const bbg1 = document.getElementById('div-1')
    bbg1.remove()
}
function del2(value) {
    const bbg2 = document.getElementById('div-2')
    bbg2.remove()
}
function del3(value) {
    const bbg3 = document.getElementById('div-3')
    bbg3.remove()
}
function del4(value) {
    const bbg4 = document.getElementById('div-4')
    bbg4.remove()
}
function del5(value) {
    const bbg5 = document.getElementById('div-5')
    bbg5.remove()
}
function del6(value) {
    const bbg6 = document.getElementById('div-6')
    bbg6.remove()
}


// add

function add() {
    const addBook = document.getElementById('addBook')
    addBook.innerHTML = ''
    let divAdd = document.createElement('div')
    const idDivAddPost = divAdd.id = "divv1"
    divAdd.id = idDivAddPost
    divAdd.setAttribute('class', "group-main")
    let input = document.createElement('input')
    const idInput = input.id = "inp1"
    input.id = idInput
    input.setAttribute('class', "bookName")
    input.setAttribute('placeholder', "Name Book")
    let textarea = document.createElement('textarea')
    const idTextarea = textarea.id = "tex1"
    textarea.id = idTextarea
    textarea.setAttribute('class', "bookDescription")
    textarea.setAttribute('placeholder', "Description Book")
    let buttonAddBook = document.createElement('button')
    buttonAddBook.setAttribute('class', "addPost")
    buttonAddBook.setAttribute('onclick', "addPost()")
    buttonAddBook.innerText = 'Add Book'
    divAdd.appendChild(input)
    divAdd.appendChild(textarea)
    divAdd.appendChild(buttonAddBook)
    addBook.appendChild(divAdd)
}

function addPost() {
    addNewDiv = document.createElement('div')
    addNewDiv.setAttribute("class", "addNewDiv")
    const addNewSpan = document.createElement('span')
    const idNewSpan = addNewSpan.id = "spa1"
    addNewSpan.id = idNewSpan
    const addNewParagraf = document.createElement('p')
    const idNewParagraf = addNewParagraf.id = "par1"
    addNewParagraf.id = idNewParagraf
    addNewDiv.appendChild(addNewSpan)
    addNewDiv.appendChild(addNewParagraf)
    grid.appendChild(addNewDiv)
    let inputSpan = document.getElementById('inp1').value;
    document.getElementById('spa1').innerHTML = inputSpan;
    let inputParagraf = document.getElementById('tex1').value;
    document.getElementById('par1').innerHTML = inputParagraf;
    dell1();
}

function dell1() {
    const back = document.getElementById('divv1')
    back.innerHTML = ''
}