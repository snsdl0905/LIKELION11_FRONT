var clicked = document.querySelectorAll('button');
var resultBox = document.querySelector('.printBox');

var keyClicked = "";
var num = "";
var stack = [];
var op;
var a, b;

clicked.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.className){
            case 'set':
                calculate();
                break;
            case 'reset':
                reset();
                break;
            case 'oper' :
                a = num;
                op = button.innerText;
                num = "";
                keyClicked += button.innerText;
                break;
            default :
                keyClicked += button.innerText;
                num += button.innerText;
                break;
        }
        load();
    })
})

function calculate(){
    b = num;
    var result;

    console.log('a = ' + a);
    console.log('b = ' + b);

    switch (op){
        case '+':
            result = parseInt(a) + parseInt(b);
            break;
        case '-':
            result = parseInt(a) - parseInt(b);
            break;
        case '*':
            result = parseInt(a) * parseInt(b);
            break;
        case '/':
            result = parseFloat(a) / parseFloat(b);
            break;            
    }

    keyClicked += "=" + result;
    num = String(result);
    load();
}

function load() {
    resultBox.value = keyClicked;
}

function reset(){
    keyClicked = "";
    stack = [];
}

// function infix_to_postfix(){
//     var stackcnt = 0;
//     var temp
//     const len = keyClicked.length
//     for (var i = 0; i < len; i++){
//         temp = keyClicked[i]
//         if (temp === '+' || temp === '-' || temp === '*' || temp === '%'){
//             if (stackcnt === 0){
//                 stackcnt++;
//                 stack.push(temp)
//             }
//             else{
//                 while (stackcnt !== 0 && prech(temp) <= prech(stack[stackcnt - 1])){

//                 }
//             }

//         }

//     }


// }

// function prech(op){
//     switch (op){
//         case '+' : case '-' : return 1
//         case '*' : case '%' : return 2 
//     }
// }