let boxPhoneEl = document.getElementById("boxPhone");
let boxPagerEl = document.getElementById("boxPager");

let number = "";

function btn1() { number += "1"; boxPhoneEl.textContent = number }
function btn2() { number += "2"; boxPhoneEl.textContent = number }
function btn3() { number += "3"; boxPhoneEl.textContent = number }
function btn4() { number += "4"; boxPhoneEl.textContent = number }
function btn5() { number += "5"; boxPhoneEl.textContent = number }
function btn6() { number += "6"; boxPhoneEl.textContent = number }
function btn7() { number += "7"; boxPhoneEl.textContent = number }
function btn8() { number += "8"; boxPhoneEl.textContent = number }
function btn9() { number += "9"; boxPhoneEl.textContent = number }
function btn0() { number += "0"; boxPhoneEl.textContent = number }
function btn_x() { number += "*"; boxPhoneEl.textContent = number }
function btn_n() { number += "#"; boxPhoneEl.textContent = number }

function reset() {
    number = "";
    boxPhoneEl.textContent = number;
}

function send() {
    boxPagerEl.textContent = number;
    number = "";
    boxPhoneEl.textContent = number;
}
