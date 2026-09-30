function clicked() {
    document.title = document.getElementById('textbox').value;
}
function loading() {
   if (localStorage.getItem("b1")) {
       document.getElementById('b1').innerText = localStorage.getItem("b1");
   }
    if (sessionStorage.getItem("b2")) {
        document.getElementById('b2').innerText = sessionStorage.getItem("b2");
    }
}
function b1c() {
    document.getElementById('b1').innerText = JSON.parse(document.getElementById('b1').innerText)+ 1;
    localStorage.setItem('b1', document.getElementById('b1').innerText);
}
function b2c() {
    document.getElementById('b2').innerText = JSON.parse(document.getElementById('b2').innerText) + 1;
    sessionStorage.setItem('b2', document.getElementById('b2').innerText);
}