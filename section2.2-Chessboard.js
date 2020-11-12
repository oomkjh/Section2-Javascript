//Run on Html

let number_input1 = document.getElementById('number_input1');
let number_input2 = document.getElementById('number_input2');
let runButton = document.getElementById('run_button');
let output = document.getElementById('output');

function chessBoard() {
    let number1 = Number(number_input1.value);
    let number2 = Number(number_input2.value);
    let outputHtml = '';

    for (let i = 1; i <= number1; i++) {
        for (let j = 1; j <= number2 * 2; j++) {
            if ((i + j) % 2 == 0) outputHtml += '#';
            else outputHtml += ' ';
        }
        outputHtml += '<br>';
    }
    output.innerHTML = outputHtml;
}
runButton.addEventListener('click', chessBoard);


// Grid 8x8
// let x = 8;
// let y = 8;
// let print = '';
// for (let i = 1; i <= x; i++) {
//     for (let j = 1; j <= y; j++) {
//         if ((i + j) % 2 == 0) print += '#';
//         else print += ' ';
//     }
//     print += '\n';
// }
// console.log(print);


