var inputBox = document.querySelector(".userInput");
var inputButton = document.querySelector(".add");
var place = document.querySelector(".toDo");
var list = [];
var toDoId = 0;

inputButton.addEventListener("click", addList);

function addList(){
    if (inputBox.value == "")
        return;
    const idnum = toDoId++;
    const input = inputBox.value;
    const info = {
        id : idnum,
        text : input,
        done : false
    };
    list.push(info);
    inputBox.value = "";
    saveLS();
    showList();
}

function showList(){
    loadLS();
    place.innerHTML = '';
    list.forEach(doIt => {
        const todoItemElem = document.createElement('li');
        todoItemElem.classList.add('todo-item');

        const checkBoxImg = document.createElement('img');
        checkBoxImg.classList.add('checkImg');
        if(doIt.done) {
            todoItemElem.classList.add('checked');
            checkBoxImg.src="./checked.png"
        }
        else{
            checkBoxImg.src="./before_check.png"
        }
        checkBoxImg.addEventListener('click', () => checkList(doIt.id))

        const todoElem = document.createElement('div');
        todoElem.classList.add('todo-content');
        todoElem.innerText = doIt.text;

        const btns = document.createElement('div');
        btns.classList.add('btn-array');

        const editBtnElem = document.createElement('button');
        editBtnElem.classList.add('chgbtn');
        editBtnElem.innerHTML = '수정';
        editBtnElem.addEventListener('click', () => editList(doIt.id))

        const delBtnElem = document.createElement('button');
        delBtnElem.classList.add('delbtn');
        delBtnElem.innerHTML = 'X';
        delBtnElem.addEventListener('click', () => deleteList(doIt.id))

        todoItemElem.appendChild(checkBoxImg);
        todoItemElem.appendChild(todoElem);
        todoItemElem.appendChild(btns);

        btns.appendChild(editBtnElem);
        btns.appendChild(delBtnElem);

        place.appendChild(todoItemElem);
    })
}


function deleteList(i){
    const newList = list.filter(todo => todo.id !== i);
    list = newList;
    saveLS();
    showList();
}


function checkList(i){
    var idx = list.findIndex(obj => obj.id == i);
    if(list[idx].done){
        list[idx].done = false;
    }
    else{
        list[idx].done = true;
    }
    saveLS();
    showList();
}

function editList(i){
    var idx = list.findIndex(obj => obj.id == i);
    if(list[idx].done)
        return;
    const editingList = prompt("수정할 내용을 입력하세요", list[idx].text);
    if(!editingList)
        return;
    list[idx].text = editingList;
    saveLS();
    showList();
}

function saveLS(){
    localStorage.setItem('list', JSON.stringify(list));
}

function loadLS(){
    const loadedItem = localStorage.getItem('list');
    if(loadedItem !== null){
        const parsedItem = JSON.parse(loadedItem);
        list = parsedItem;
    }
}

inputBox.addEventListener('keypress', (e) =>{
    if( e.key === 'Enter' ){
        addList();
    }
})

showList();