let melissa = document.getElementById("melissa")
let dropdown = document.getElementById("dropdown")
function prova() {
    if (dropdown.style.display === "block"  ) { //sto indicando che la prima variabile all'interno dell'if, sia uguale (===) a none;
        dropdown.style.display = "none"
    }else  {dropdown.style.display = "block"}

}