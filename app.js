// Increment Function and Save Function
let saveEntry = document.getElementById("saveEntry")
let countpeeps = document.getElementById("countpeeps")
let count = 0;


function increment() {
    count += 1;
    countpeeps.textContent = count;
    
}

function saveButton (){
    let countStr = count + " - "
    saveEntry.textContent += countStr;
    countpeeps.innerText = 0;
    count = 0;
}
