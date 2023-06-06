function validate () {
    let usuario = document.getElementById("").value;
    let clave = document.getElementById("").value;
    if (usuario == "" && clave == "") {
    
        window.location.href = "index.html";
        return false;
    } else {
        alert("prueba");
    }
}
let button = document.getElemntById("button");
button.addEventListener("click", (e)=> {
      e.preventDeFault();
    validate();
})